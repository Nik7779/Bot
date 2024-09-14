require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: '𝘼𝙥𝙥 𝘧𝘰𝘳 𝘊𝘻/𝘚𝘬 𝘓𝘦𝘢𝘨𝘶𝘦 𝘊𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺.',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=nIuxVW6ugdk',
  },
  {
    name: '𝘼𝙥𝙥 𝘧𝘰𝘳 𝘾𝙯/𝙎𝙠 𝘓𝘦𝘢𝘨𝘶𝘦 𝘊𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺.',
  },
];

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

client.login(process.env.TOKEN);
