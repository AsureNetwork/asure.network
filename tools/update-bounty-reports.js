const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const fetchSpreadsheet = require('./lib/fetch-spreadsheet');

const weekNos = _.range(34, 53).map(weekNo => `Week ${weekNo}`);

function createBountyTasks() {
    let bountyTasks = [
        {
            "id": "AIRDROP01",
            "typeId": "airdrop",
            "name": "Airdrop",
            "title": "Registration Airdrop",
            "description": "Just follow the easy steps in <a href=\"https://forms.gle/kLfbUSbyfjRSZEkU7\" target=\"_blank\">Airdrop form</a>. \n <br/><br/>\n1) Follow Asure Official Twitter:\n<a href=\"https://twitter.com/AsureNetwork\" target=\"_blank\">https://twitter.com/AsureNetwork</a>\n<br/>\n2) Retweet the pinned post and put hashtags: #asure #asuretoken $ASR #tge #ico #ieo #crypto #defi #socialsecurity @asurenetwork \n<br/>\n3) Follow Asure Main Telegram:\n<a href=\"https://t.me/AsureNetwork\" target=\"_blank\">https://t.me/AsureNetwork</a>\n<br/>\n4) Follow Asure Bounty Telegram:\n<a href=\"https://t.me/AsureBounty\" target=\"_blank\">https://t.me/AsureBounty</a>\n<br/>\n5) Follow us on other social media channels<br/>\n<a href=\"https://fb.me/AsureNetwork\" target=\"_blank\">https://fb.me/AsureNetwork</a><br/>\n<a href=\"https://medium.com/AsureNetwork\" target=\"_blank\">https://medium.com/AsureNetwork</a><br/>\n<a href=\"https://www.linkedin.com/company/asure\" target=\"_blank\">https://www.linkedin.com/company/asure</a><br/>\n<a href=\"https://www.youtube.com/c/AsureNetwork\" target=\"_blank\">https://www.youtube.com/c/AsureNetwork</a><br/>\n<a href=\"https://www.reddit.com/r/asure\" target=\"_blank\">https://www.reddit.com/r/asure</a><br/>\n<a href=\"https://peepeth.com/AsureNetwork\" target=\"_blank\">https://peepeth.com/AsureNetwork</a>\n<br/>\n6) Write a nice comment to <a href=\"https://bitcointalk.org/index.php?topic=5173993\" target=\"_blank\">Asure Airdrop Announcement in Bitcointalk</a> topic.<br/>",
            "rules": [
                "Only one account per person. Using multi-accounts, cheating and spamming are strictly forbidden.",
                "Your payment address cannot be changed. Once you apply, your address will be locked. (Every participant is responsible for the protection of his/her payment address and private keys).",
                "You need to join our Bounty Telegram group in order to participate in the Asure Airdrop/Bounty program.",
                "Without joining the telegram group, you will not be counted on any Airdrop/Bounty. ",
                "    The Telegram link is: <a href=\"https://t.me/AsureNetwork\" target=\"_blank\">https://t.me/AsureNetwork</a>",
                "    The Bounty Telegram link is: <a href=\"https://t.me/AsureBounty\" target=\"_blank\">https://t.me/AsureBounty</a>",
                "The ones breaking the rule will be disqualified from the Bounty program without getting any tokens.",
                "The distribution of the tokens to participants will occur after the end (31. Dec. 2019) of Token sale.",
                "<b>Note:</b> ALL BOUNTY RELATED QUESTIONS MUST BE ASKED ONLY IN OUR BOUNTY GROUP HERE: <a href=\"https://t.me/AsureBounty\" target=\"_blank\">https://t.me/AsureBounty</a>"
            ],
            "frequency": "Once",
            "reward": "100",
            "rewardType": "Stakes"
        },
        {
            "id": "TWITTER01",
            "typeId": "twitter",
            "name": "Twitter",
            "title": "Likes",
            "description": "5 likes per week of the posts on our main Twitter channel.",
            "rules": [
                "Main Twitter channel: https://twitter.com/AsureNetwork",
                "Max 2 likes can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "TWITTER02",
            "typeId": "twitter",
            "name": "Twitter",
            "title": "Retweets",
            "description": "5 retweets per week of the tweets in our main Twitter channel.",
            "rules": [
                "Main Twitter channel: https://twitter.com/AsureNetwork",
                "Hashtags that can be used: #cryptocurrency #blockchain $asr #ico #tge #asure #network #infrastructure #innovation #pension #insurance #BasicIncome #rente #InsurTech #assurance #TokenSales #tokensale #invest #investmentresearch #wealthmanagement",
                "Max 2 retweets can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "TWITTER03",
            "typeId": "twitter",
            "name": "Twitter",
            "title": "Posts",
            "description": "5 posts per week about our project Asure Network.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Add link to Asure Network twitter: @AsureNetwork",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>.",
                "Hashtags that can be used: #cryptocurrency #blockchain $asr #ico #tge #asure #network #infrastructure #innovation #pension #insurance #BasicIncome #rente #InsurTech #assurance #TokenSales #tokensale #invest #investmentresearch #wealthmanagement",
                "Max 2 posts can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "TWITTER04",
            "typeId": "twitter",
            "name": "Twitter",
            "title": "Comments",
            "description": "5 comments per week to either Asure Network Twitter posts or other crypto-related posts telling about Asure Network and mentioning @AsureNetwork twitter.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Add link to Asure Network twitter: @AsureNetwork",
                "Max 2 comments can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "TWITTER05",
            "typeId": "twitter",
            "name": "Twitter",
            "title": "Profile",
            "description": "Put a link to Asure Network website in your Twitter description.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Add link to Asure Network twitter: @AsureNetwork"
            ],
            "frequency": "Weekly",
            "reward": "2",
            "rewardType": "Stakes"
        },
        {
            "id": "TELEGRAM01",
            "typeId": "telegram",
            "name": "Telegram",
            "title": "Post in our Telegram groups",
            "description": "5 creative and interesting questions per week about Asure Network in our main Telegram group.",
            "rules": [
                "A maximum of 2 post per day is allowed in each group"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "TELEGRAM02",
            "typeId": "telegram",
            "name": "Telegram",
            "title": "Answer the questions of other community members",
            "description": "If (and only if) you already know the answer to a question raised by another Telegram community member in either Telegram group of ours, answer the question.",
            "rules": [
                "Link to our main Telegram group: https://t.me/AsureNetwork",
                "Link to our Bounty Telegram group: https://t.me/AsureBounty"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "TELEGRAM03",
            "typeId": "telegram",
            "name": "Telegram",
            "title": "Post about Asure Network in another crypto-related Telegram group",
            "description": "Post information about Asure Network containing the images we produced in other crypto-related Telegram groups with a short description of our project.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Add link to Asure Network telegram: @AsureNetwork",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>.",
                "Link to the \"Announcement: Asure.Network TGE\" article: https://medium.com/asurenetwork/announcement-asure-network-tge-995f386bf109"
            ],
            "frequency": "Weekly",
            "reward": "10",
            "rewardType": "Stakes"
        },
        {
            "id": "TELEGRAM04",
            "typeId": "telegram",
            "name": "Telegram",
            "title": "Post about Asure Network in another crypto-related Telegram group [10k - 50k members]",
            "description": "Post information about Asure Network containing the images we produced in other crypto-related Telegram groups with a short description of our project.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Add link to Asure Network telegram: @AsureNetwork",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>.",
                "Link to the \"Announcement: Asure.Network TGE\" article: https://medium.com/asurenetwork/announcement-asure-network-tge-995f386bf109"
            ],
            "frequency": "Weekly",
            "reward": "50",
            "rewardType": "Stakes"
        },
        {
            "id": "TELEGRAM05",
            "typeId": "telegram",
            "name": "Telegram",
            "title": "Post about Asure Network in another crypto-related Telegram group [more than 50k members]",
            "description": "Post information about Asure Network containing the images we produced in other crypto-related Telegram groups with a short description of our project.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Add link to Asure Network telegram: @AsureNetwork",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>.",
                "Link to the \"Announcement: Asure.Network TGE\" article: https://medium.com/asurenetwork/announcement-asure-network-tge-995f386bf109"
            ],
            "frequency": "Weekly",
            "reward": "100",
            "rewardType": "Stakes"
        },
        {
            "id": "TELEGRAM06",
            "typeId": "telegram",
            "name": "Telegram",
            "title": "Invite friends to our Telegram groups",
            "description": "Invite 5 people per week to our main Telegram group.",
            "rules": [
                "Link to our main Telegram group: https://t.me/AsureNetwork"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK01",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Likes",
            "description": "5 likes per week of the posts on our main Facebook group. ",
            "rules": [
                "Main Facebook group: https://www.facebook.com/AsureNetwork",
                "Max 2 likes can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK02",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Posts",
            "description": "Write original (unique) post per week about Asure Network in your timeline.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Add link to Main Facebook group: https://www.facebook.com/AsureNetwork/",
                "Hashtags that can be used:  #cryptocurrency #blockchain $asr #ico #tge #asure #network #infrastructure #innovation #pension #insurance #BasicIncome #rente #InsurTech #assurance #TokenSales #tokensale #invest #investmentresearch #wealthmanagement"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK03",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Reposts",
            "description": "Share 5 reposts per week of our posts in our main Facebook group.",
            "rules": [
                "Main Facebook group: https://www.facebook.com/AsureNetwork",
                "Max 2 reposts can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK04",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Comments",
            "description": "5 comments per week to Asure Network Facebook posts talking about Asure Network.",
            "rules": [
                "You can comment our posts by writing valuable and meaningful comments that are at least 15 words long.\r",
                "You can comment under foreign posts, these should be valuable and meaningful and please use link to the website (https://asure.network) or Facebook site (@AsureNetwork).",
                "Max 2 comments can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK05",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Profile",
            "description": "Put a link to Asure Network website in your Facebook description.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>."
            ],
            "frequency": "Weekly",
            "reward": "2",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK06",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Post in another crypto-related Facebook group",
            "description": "Post information about Asure Network containing the images we produced in other crypto-related Facebook groups with a short description of our project.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network",
                "Add link to Main Facebook group: https://www.facebook.com/AsureNetwork",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>."
            ],
            "frequency": "Weekly",
            "reward": "10",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK07",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Post in another crypto-related Facebook group [1k - 5k members]",
            "description": "Post information about Asure Network containing the images we produced in other crypto-related Facebook groups with a short description of our project.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network",
                "Add link to Main Facebook group: https://www.facebook.com/AsureNetwork",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>."
            ],
            "frequency": "Weekly",
            "reward": "50",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK08",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Post in another crypto-related Facebook group [more than 5k members]",
            "description": "Post information about Asure Network containing the images we produced in other crypto-related Facebook groups with a short description of our project.",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/\r",
                "Add link to Main Facebook group: https://www.facebook.com/AsureNetwork/",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>."
            ],
            "frequency": "Weekly",
            "reward": "100",
            "rewardType": "Stakes"
        },
        {
            "id": "FACEBOOK09",
            "typeId": "facebook",
            "name": "Facebook",
            "title": "Invite friends to our Facebook group",
            "description": "Invite 5 friends per week to our main Facebook group.",
            "rules": [
                "Main Facebook group: https://www.facebook.com/AsureNetwork/",
                "Newcomers should like our Facebook group."
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "BITCOINTALK01",
            "typeId": "bitcointalk",
            "name": "Bitcointalk",
            "title": "\nReply to Asure Network in TGE ANN Bitcointalk topic",
            "description": "5 replies to questions in reference to Asure Network project or create new topics with new Questions to Asure Network project.",
            "rules": [
                "TGE Ann Link: <a href=\"https://bitcointalk.org/index.php?topic=5144579.0\" target=\"_blank\">https://bitcointalk.org/index.php?topic=5144579.0</a>",
                "Max 2 replies can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "BITCOINTALK02",
            "typeId": "bitcointalk",
            "name": "Bitcointalk",
            "title": "\nReply about Asure Network in other Bitcointalk topics",
            "description": "5 replies to questions in reference to Asure Network project or create new topics with new Questions to Asure Network project.",
            "rules": [
                "Moderate the channel if it is a new one, answer questions of other users on that channel.",
                "Add link to Asure Network website: https://www.asure.network",
                "Max 2 replies can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "BITCOINTALK03",
            "typeId": "bitcointalk",
            "name": "Bitcointalk",
            "title": "Profile",
            "description": "Put a link to Asure Network website in your Bitcointalk profile.",
            "rules": [
                "Link to Asure Network website: https://www.asure.network",
                "You can use an Avatar Image: https://www.asure.network/logo/asure-logo120x80.png"
            ],
            "frequency": "Weekly",
            "reward": "2",
            "rewardType": "Stakes"
        },
        {
            "id": "BITCOINTALK04",
            "typeId": "bitcointalk",
            "name": "Bitcointalk",
            "title": "Signatures JR MEMBER",
            "description": "Use this BB code signature\n<pre>\n[center]ASURE NETWORK▰ ▰▰▰▰▰ https://asure.network ▰▰▰▰▰ ▰\n▰ FIRST SCALABLE DECENTRALIZED SOCIAL SECURITY NETWORK ▰[/center]\n</pre>",
            "rules": [
                "You must keep the signature until the campaign ends. Early removal will result in disqualification.",
                "Link to Asure Network website: https://www.asure.network/"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "BITCOINTALK05",
            "typeId": "bitcointalk",
            "name": "Bitcointalk",
            "title": "Signatures MEMBER",
            "description": "Use this BB code signature\n<pre>\n[center][url=https://bitcointalk.org/index.php?topic=5144579]ANN[/url] |[color=#579ccc]▰▰▰▰▰▰▰▰▰▰[/color]|    [url=https://asure.network] [b][color=#579ccc]ASURE NETWORK[/color][/b][/url]     |[color=#579ccc]▰▰▰▰▰▰▰▰▰▰[/color]| [url=https://bitcointalk.org/index.php?topic=5175635]Bounty[/url][/center]\n[center][b][color=#444444]FIRST SCALABLE DECENTRALIZED SOCIAL SECURITY NETWORK[/color][/b][/center]\n[center][url=https://www.asure.network/asure.network.whitepaper.en.pdf]Whitepaper[/url]   [url=https://facebook.com/AsureNetwork]Facebook[/url]  [url=https://t.me/AsureNetwork]Telegram[/url]  [url=https://twitter.com/AsureNetwork]Twitter[/url]  |[color=#6bc284]▰▰▰[/color]|  [url=https://asure.network/kyc]Join our TGE in December 2019[/url][/center]\n</pre>",
            "rules": [
                "You must keep the signature until the campaign ends. Early removal will result in disqualification.",
                "Link to Asure Network website: https://www.asure.network/"
            ],
            "frequency": "Weekly",
            "reward": "20",
            "rewardType": "Stakes"
        },
        {
            "id": "BITCOINTALK06",
            "typeId": "bitcointalk",
            "name": "Bitcointalk",
            "title": "Signatures FULL MEMBER - HERO",
            "description": "Use this BB code signature\n<pre>\n[center][url=https://bitcointalk.org/index.php?topic=5144579]ANN[/url] |[color=#579ccc]▰▰▰▰▰▰▰▰▰▰[/color]|    [url=https://asure.network] [b][color=#579ccc]ASURE NETWORK[/color][/b][/url]     |[color=#579ccc]▰▰▰▰▰▰▰▰▰▰[/color]| [url=https://bitcointalk.org/index.php?topic=5175635]Bounty[/url][/center]\n[center][b][color=#444444]FIRST SCALABLE DECENTRALIZED SOCIAL SECURITY NETWORK[/color][/b][/center]\n[center][url=https://www.asure.network/asure.network.whitepaper.en.pdf]Whitepaper[/url]   [url=https://facebook.com/AsureNetwork]Facebook[/url]  [url=https://t.me/AsureNetwork]Telegram[/url]  [url=https://twitter.com/AsureNetwork]Twitter[/url]  |[color=#6bc284]▰▰▰[/color]|  [url=https://asure.network/kyc]Join our TGE in December 2019[/url][/center]\n</pre>",
            "rules": [
                "You must keep the signature until the campaign ends. Early removal will result in disqualification.",
                "Link to Asure Network website: https://www.asure.network/"
            ],
            "frequency": "Weekly",
            "reward": "50",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN01",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Likes",
            "description": "5 likes per week of the posts on our main Asure company LinkedIn profile.",
            "rules": [
                "Asure company LinkedIn profile: https://www.linkedin.com/company/asure",
                "Max 2 likes can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN02",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Posts",
            "description": "Post information about Asure Network, containing the images we produced, in LinkedIn with your own LinkedIn profile.",
            "rules": [
                "Asure company LinkedIn profile: https://www.linkedin.com/company/asure/",
                "Use images from our <a href=\"https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0\" target=\"_blank\">Dropbox</a>.",
                "Asure company LinkedIn profile should be mentioned."
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN03",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Reposts",
            "description": "Share 5 reposts per week of our posts in our LinkedIn company group.",
            "rules": [
                "Asure company LinkedIn profile: https://www.linkedin.com/company/asure",
                "Max 2 reposts can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN04",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Comments",
            "description": "5 comments per week to either Asure Network posts or crypto-related posts mentioning the Asure Network project.",
            "rules": [
                "Max 2 comments can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN05",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Profile",
            "description": "Put a link to Asure Network website in your Linkedin description.",
            "rules": [
                "Link to Asure Network website: https://www.asure.network/"
            ],
            "frequency": "Weekly",
            "reward": "2",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN06",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Post in another crypto-related LinkedIn group",
            "description": "Post information about Asure Network, containing the images we produced, in another crypto-related LinkedIn group with a short description of our project.",
            "rules": [
                "Images for the posts can be found on Asure Network Dropbox.",
                "Asure Network Dropbox: https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0"
            ],
            "frequency": "Weekly",
            "reward": "10",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN07",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Post in another crypto-related LinkedIn group [1k - 5k members]",
            "description": "Post information about Asure Network, containing the images we produced, in another crypto-related LinkedIn group with a short description of our project.",
            "rules": [
                "Images for the posts can be found on Asure Network Dropbox.",
                "Asure Network Dropbox: https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0"
            ],
            "frequency": "Weekly",
            "reward": "50",
            "rewardType": "Stakes"
        },
        {
            "id": "LINKEDIN08",
            "typeId": "linkedin",
            "name": "Linkedin",
            "title": "Post in another crypto-related LinkedIn group [more than 5k members]",
            "description": "Post information about Asure Network, containing the images we produced, in another crypto-related LinkedIn group with a short description of our project.",
            "rules": [
                "Images for the posts can be found on Asure Network Dropbox.",
                "Asure Network Dropbox: https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0"
            ],
            "frequency": "Weekly",
            "reward": "100",
            "rewardType": "Stakes"
        },
        {
            "id": "REDDIT01",
            "typeId": "reddit",
            "name": "Reddit",
            "title": "Upvotes",
            "description": "5 upvotes per week of the posts on our main Asure subreddit.",
            "rules": [
                "Main Asure subreddit: https://reddit.com/r/Asure",
                "Max 2 upvotes can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "REDDIT02",
            "typeId": "reddit",
            "name": "Reddit",
            "title": "Post in Asure subreddit",
            "description": "Create one original (unique) post about Asure Network per week on our main Asure subreddit (Contribution to Asure Network subreddit).",
            "rules": [
                "Main Asure subreddit: https://reddit.com/r/Asure/",
                "Cross-post your posts in the relevant subreddits: /r/altcoins/, /r/CryptoCurrencies/, /r/CryptoCurrency/, /r/CryptoMarkets/, /r/CryptocurrencyICO/, /r/ethereum/, /r/ethinvestor/, /r/ethtrader/, /r/investing/, /r/venturecapital/ and so on."
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "REDDIT03",
            "typeId": "reddit",
            "name": "Reddit",
            "title": "Comments",
            "description": "5 comments per week of the Asure subreddit posts and other crypto-related posts with the mention of Asure Network.",
            "rules": [
                "Main Asure subreddit: https://reddit.com/r/Asure",
                "Max 2 comments can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "REDDIT04",
            "typeId": "reddit",
            "name": "Reddit",
            "title": "Profile",
            "description": "Put a link to Asure Network website in your Reddit profile.",
            "rules": [
                "Link to Asure Network website: https://www.asure.network/"
            ],
            "frequency": "Weekly",
            "reward": "2",
            "rewardType": "Stakes"
        },
        {
            "id": "REDDIT05",
            "typeId": "reddit",
            "name": "Reddit",
            "title": "Post in another crypto-related subreddit",
            "description": "Post information about Asure Network containing the images we produced, in other crypto-related Facebook groups with a short description of our project.",
            "rules": [
                "Images for the posts can be found on Asure Network Dropbox.",
                "Asure Network Dropbox: https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0"
            ],
            "frequency": "Weekly",
            "reward": "10",
            "rewardType": "Stakes"
        },
        {
            "id": "REDDIT06",
            "typeId": "reddit",
            "name": "Reddit",
            "title": "Post in another crypto-related subreddit [50k - 100k members]",
            "description": "Post information about Asure Network containing the images we produced, in other crypto-related Facebook groups with a short description of our project.",
            "rules": [
                "Images for the posts can be found on Asure Network Dropbox.",
                "Asure Network Dropbox: https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0"
            ],
            "frequency": "Weekly",
            "reward": "100",
            "rewardType": "Stakes"
        },
        {
            "id": "REDDIT07",
            "typeId": "reddit",
            "name": "Reddit",
            "title": "Post in another crypto-related subreddit [more than 100k members]",
            "description": "Post information about Asure Network containing the images we produced, in other crypto-related Facebook groups with a short description of our project.",
            "rules": [
                "Images for the posts can be found on Asure Network Dropbox.",
                "Asure Network Dropbox: https://www.dropbox.com/sh/46std9u0knlq2cz/AAAR3N1LiMs0vG0ZqWf7RSj9a?dl=0"
            ],
            "frequency": "Weekly",
            "reward": "500",
            "rewardType": "Stakes"
        },
        {
            "id": "CREATIVE01",
            "typeId": "cc",
            "name": "Creative",
            "title": "Create a Video on Youtube",
            "description": "Create and upload an original video review of the Asure Network project.\nIt should be clear from the video what the Asure Project vision is about  (our vision can be found in our Whitepaper or in our article).",
            "rules": [
                "Link to our Whitepaper in English: https://www.asure.network/asure.network.whitepaper.en.pdf",
                "Link to the article mentioned in the description: https://medium.com/asurenetwork/sustainability-audit-through-visions-in-blockchain-projects-aaca3b5dd5eb",
                "Maximum of 5 submissions per user"
            ],
            "frequency": "Submission",
            "reward": "100",
            "rewardType": "Tokens"
        },
        {
            "id": "CREATIVE02",
            "typeId": "cc",
            "name": "Creative",
            "title": "Create a Video on Youtube [20k - 100k followers]",
            "description": "Create and upload an original video review of the Asure Network project.\nIt should be clear from the video what the Asure Project vision is about  (our vision can be found in our Whitepaper or in our article).",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Link to our Whitepaper in English: https://www.asure.network/asure.network.whitepaper.en.pdf",
                "Link to the article mentioned in the description: https://medium.com/asurenetwork/sustainability-audit-through-visions-in-blockchain-projects-aaca3b5dd5eb",
                "Maximum of 5 submissions per user"
            ],
            "frequency": "Submission",
            "reward": "2500",
            "rewardType": "Tokens"
        },
        {
            "id": "CREATIVE03",
            "typeId": "cc",
            "name": "Creative",
            "title": "Create a Video on Youtube [more than 100k followers]",
            "description": "Create and upload an original video review of the Asure Network project.\nIt should be clear from the video what the Asure Project vision is about  (our vision can be found in our Whitepaper or in our article).",
            "rules": [
                "Add link to Asure Network website: https://www.asure.network/",
                "Link to our Whitepaper in English: https://www.asure.network/asure.network.whitepaper.en.pdf",
                "Link to the article mentioned in the description: https://medium.com/asurenetwork/sustainability-audit-through-visions-in-blockchain-projects-aaca3b5dd5eb",
                "Maximum of 5 submissions per user"
            ],
            "frequency": "Submission",
            "reward": "5000",
            "rewardType": "Tokens"
        },
        {
            "id": "CREATIVE04",
            "typeId": "cc",
            "name": "Creative",
            "title": "Comments",
            "description": "5 comments per week to the Asure Network Youtube videos.",
            "rules": [
                "Max 2 comments can be made per day"
            ],
            "frequency": "Weekly",
            "reward": "7",
            "rewardType": "Stakes"
        },
        {
            "id": "CREATIVE05",
            "typeId": "cc",
            "name": "Creative",
            "title": "Create a blog-post/press-release on your own website/blog",
            "description": "The information must be as close as possible to the way we describe the project, examples are to be found on our Medium blog.",
            "rules": [
                "Link to our blog on Medium: https://medium.com/asurenetwork",
                "Maximum of 5 submissions per user"
            ],
            "frequency": "Submission",
            "reward": "100",
            "rewardType": "Tokens"
        },
        {
            "id": "CREATIVE06",
            "typeId": "cc",
            "name": "Creative",
            "title": "Create a blog-post/press-release on a well-known website [more than 100k views/month]",
            "description": "The information must be as close as possible to the way we describe the project, examples are to be found on our Medium blog. More than 100k unique views per month and crypto-related. (Forbes, TechCrunch, Bitcoin Magazine, etc.)",
            "rules": [
                "Link to our blog on Medium: https://medium.com/asurenetwork",
                "Forbes, Techcrunch, BitcoinMagazin and others are crypto-related.",
                "Platforms like Facebook, Linkedin, Medium, are not crypto-related and don't count in this category.",
                "Maximum of 1 submissions per user"
            ],
            "frequency": "Submission",
            "reward": "100",
            "rewardType": "Tokens"
        },
        {
            "id": "CREATIVE07",
            "typeId": "cc",
            "name": "Creative",
            "title": "Translate documents",
            "description": "Translate our bitcointalk-ann, press-site, whitepaper, tge-paper, investor-deck, press-release-articles.",
            "rules": [
                "Reservation is needed. Please contact us by sending an email to bounty@asure.io"
            ],
            "frequency": "Submission",
            "reward": "300",
            "rewardType": "Tokens"
        },
        {
            "id": "CREATIVE08",
            "typeId": "cc",
            "name": "Creative",
            "title": "Translate unformatted content",
            "description": "It requires an individual agreement.",
            "rules": [
                "Reservation is needed. Please contact us by sending an email to bounty@asure.io"
            ],
            "frequency": "Submission",
            "reward": "1000",
            "rewardType": "Tokens"
        }
    ];

    for (let task of bountyTasks) {
        task.totalStakes = 0;
        task.totalTokens = 0;
    }

    return bountyTasks;
}

function parseCampaigns(groupedWeek) {
    return groupedWeek.reduce((acc, cur) => {
        const campaignGroups = [
            'Twitter Campaign',
            'Telegram Campaign',
            'Facebook Campaign',
            'Bitcointalk Campaign',
            'LinkedIn Campaign',
            'Reddit Campaign',
            'Creative Campaign',
        ];

        campaignGroups.forEach(campaignGroup => {
            if (!cur[campaignGroup]) {
                return;
            }

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

    const reports = Object.keys(groupedByAddr).map(addr => {
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

    // Every Ethereum address that used the report form
    // is part of the airdrop campaign too.
    reports.forEach(report => {
        report.weeks[0].campaigns['AIRDROP01'] = {done: true};
    });

    return reports;
}

function calcRewards(output) {
    output.summary = {
        totalTokens: 0,
        totalStakes: 0
    };

    for (let member of output.data) {
        member.stakes = 0;
        member.tokens = 0;

        const airdropTask = output.bountyTasks.find(t => t.id === "AIRDROP01");
        if (airdropTask) {
            member.stakes += Number(airdropTask.reward);
            airdropTask.totalStakes += Number(airdropTask.reward);
            output.summary.totalTokens += Number(airdropTask.reward);
        }

        for (let week of member.weeks) {
            for (let campaignName of Object.keys(week.campaigns)) {
                const campaign = week.campaigns[campaignName];
                const task = output.bountyTasks.find(t => t.id === campaignName);
                if (campaign.done && task) {
                    if (task.rewardType === "Stakes" && task.frequency === "Weekly") {
                        member.stakes += Number(task.reward);
                        task.totalStakes += Number(task.reward);
                        output.summary.totalStakes += Number(task.reward);
                    } else if (task.rewardType === "Tokens" && task.frequency === "Submission") {
                        member.tokens += Number(task.reward);
                        task.totalTokens += Number(task.reward);
                        output.summary.totalTokens += Number(task.reward);
                    }
                } else {
                    console.warn("task not found!");
                }
            }
        }
    }
}

function printStatistics(output) {
    let totalCampaigns = 0;
    for (const member of output.data) {
        for (const week of member.weeks) {
            totalCampaigns += Object.keys(week.campaigns).length
        }
    }

    console.log(`Total Bounty Members: ${output.data.length}, Total Campaigns: ${totalCampaigns}`);
    
    const totalAsrTokens = 2000000;
    const stakesAsrTokens = totalAsrTokens - output.summary.totalTokens;
    const asrTokenPerStake = stakesAsrTokens / output.summary.totalStakes;
    
    console.log(`Total ASR: ${totalAsrTokens}, Total Stakes ASR: ${stakesAsrTokens}, Total Stakes ${output.summary.totalStakes}, 1 Stake = ${asrTokenPerStake} ASR`);
    for (const member of output.data) {
        const asrTokens = member.tokens + (member.stakes * asrTokenPerStake);
        console.log(`ETH ${member['ERC-20 Wallet Address']}, `)
    }
}

function parseBountyReports(rows) {
    const headers = rows.shift();

    const reports = rows.map((row) => _.zipObject(headers, row));
    for (let report of reports) {
        // TODO: We lose the address checksum if we convert to lower case ...
        report['ERC-20 Wallet Address'] = report['ERC-20 Wallet Address'].trim().toLowerCase();
    }

    return reports;
}

function updateHarpData(bountyReports) {
    const harpDataFile = path.join(__dirname, '../src/bounty/_data.json');
    const harpData = JSON.parse(fs.readFileSync(harpDataFile, 'utf-8'));

    harpData.index.bountyReports = bountyReports;

    fs.writeFileSync(harpDataFile, JSON.stringify(harpData, null, 2));
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

            const blacklist = [];
            const blacklisted = bountyReport => !blacklist.includes(bountyReport['ERC-20 Wallet Address']);

            const transformedBountyReports = transformData(bountyReports.filter(blacklisted));
            const output = {
                created: new Date().toISOString(),
                weekNos: weekNos,
                data: transformedBountyReports,
                bountyTasks: createBountyTasks()
            };

            calcRewards(output);
            printStatistics(output);
            updateHarpData(output);
            console.log('Done.');
        } else {
            console.log('No data found.');
        }
    } catch (err) {
        console.log('The API returned an error: ' + err)
    }
})();
