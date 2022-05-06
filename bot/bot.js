require('dotenv').config();

const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
	console.log(`${bot.user.tag} started and runs`)
})

bot.on('message', (msg) => {
	console.log(`${msg.author.tag} texted ${msg.content}`);
})

bot.login(process.env.TOKEN);