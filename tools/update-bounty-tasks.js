// See https://developers.google.com/sheets/api/quickstart/nodejs?authuser=1

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const fetchSpreadsheet = require('./lib/fetch-spreadsheet');
const {camelize} = require('./lib/utils');

function parseBountyTasks(rows) {
    const headers = rows.shift().map(camelize);

    return rows.map((row) => {
        const bountyTask = _.zipObject(headers, row);
        bountyTask.rules = bountyTask.rules.split('\n').filter(r => r !== '');
        return bountyTask;
    });
}

function updateHarpData(bountyTasks) {
    const harpDataFile = path.join(__dirname, '../src/bounty/_data.json');
    const harpData = JSON.parse(fs.readFileSync(harpDataFile, 'utf-8'));

    harpData.index.ui = bountyTasks;

    fs.writeFileSync(harpDataFile, JSON.stringify(harpData,null, 2));
}


(async () => {
   try {
       const res = await fetchSpreadsheet({
           spreadsheetId: '1t24TcE14RAVoCqxvIaid8xIxwYgRL2IKidkKllvOzJY',
           range: 'Tasks',
       });

       const rows = res.data.values;
       if (rows.length) {
           const bountyTasks = parseBountyTasks(rows);
           updateHarpData(bountyTasks);
           console.log('Done.');
       } else {
           console.log('No data found.');
       }
   } catch (err) {
       console.log('The API returned an error: ' + err)
   }
})();
