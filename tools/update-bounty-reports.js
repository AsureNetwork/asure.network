const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const fetchSpreadsheet = require('./lib/fetch-spreadsheet');

const weekNos = _.range(22, 53).map(weekNo => `Week ${weekNo}`);

function parseCampaigns(groupedWeek) {
    return groupedWeek.reduce((acc, cur) => {
        const campaignGroups = [
            'Twitter Campaign',
            'Telegram Campaign',
        ];

        campaignGroups.forEach(campaignGroup => {
            cur[campaignGroup].split(',').forEach(campaign => {
                let normalizedCampaign = campaign.substring(0, campaign.indexOf(':')).trim();

                //if (!campaigns.includes(normalizedCampaign)) {
                //    console.warn(`Invalid Campaign "${normalizedCampaign}"`);
                //    return;
                //}

                acc[normalizedCampaign] = {done: true};
            });
        });

        return acc;
    }, {});
}

function parseWeekNo(weekNo) {
    let result;

    const parsed = parseInt(weekNo);
    if (isNaN(parsed)) {
        result = weekNo.substring(0, 7);
    } else {
        switch (parsed) {
            case 1:
                result = 'Week 23';
                break;
            case 2:
                result = 'Week 24';
                break;
            case 3:
                result = 'Week 25';
                break;
            default:
                throw Error(`Could not parse weekNo "${parsed}"`);
        }
    }

    if (!weekNos.includes(result)) {
        throw Error(`Invalid weekNo "${result}"`);
    }

    return result;
}

function transformData(input) {
    const groupedByAddr = _.groupBy(input, 'ERC-20 Wallet Address');

    return Object.keys(groupedByAddr).map(addr => {
        const groupedWeek = _.groupBy(groupedByAddr[addr], 'Week Number');
        return {
            address: addr,
            weeks: Object.keys(groupedWeek).map(weekNo => {
                return {
                    weekNo: weekNo,
                    parsedWeekNo: parseWeekNo(weekNo),
                    campaigns: parseCampaigns(groupedWeek[weekNo])
                }
            })
        };
    });
}

function printStatistics(transformedData) {
    let totalCampaigns = 0;
    for (const member of transformedData) {
        for (const week of member.weeks) {
            totalCampaigns += Object.keys(week.campaigns).length
        }
    }

    console.log(`Total Bounty Members: ${transformedData.length}, Total Campaigns: ${totalCampaigns}`);
}

function parseBountyReports(rows) {
    const headers = rows.shift();

    return rows.map((row) => _.zipObject(headers, row));
}

function updateHarpData(bountyReports) {
    const harpDataFile = path.join(__dirname, '../src/bounty/_data.json');
    const harpData = JSON.parse(fs.readFileSync(harpDataFile, 'utf-8'));

    harpData.index.bounties = bountyReports;

    fs.writeFileSync(harpDataFile, JSON.stringify(harpData,null, 2));
}

(async () => {
    try {
        const res = await fetchSpreadsheet({
            spreadsheetId: '1t24TcE14RAVoCqxvIaid8xIxwYgRL2IKidkKllvOzJY',
            range: 'BountyHunter Reports',
        });

        const rows = res.data.values;
        if (rows.length) {
            const bountyReports = parseBountyReports(rows);
            const transformedBountyReports = transformData(bountyReports);

            printStatistics(transformedBountyReports);

            const output = {
                created: new Date().toISOString(),
                weekNos: weekNos,
                data: transformedBountyReports,
            };

            updateHarpData(output);
            console.log('Done.');
        } else {
            console.log('No data found.');
        }
    } catch (err) {
        console.log('The API returned an error: ' + err)
    }
})();