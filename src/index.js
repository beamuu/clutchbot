const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const handler = require("./handler");



// Discord bot token
const { discord } = require("../token.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
    if (msg.author.bot) return false; 

    console.log(`Message from ${msg.author.username}: ${msg.content}`);

    handler(msg);

  });

client.login(discord);