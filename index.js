// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

const { token } = require('./config.json');

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});


// Token from config.json 
// config.json looks like this:
// {
// 	"token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
// }
client.login(token); 


client.on('messageCreate', msg => {
    // You can view the msg object here with console.log(msg)
    //  if (msg.content === 'Hello') {
    //    msg.reply(`Hello ${msg.author.username}`);
    //  }

     if (msg.author.username != 'test-app') {
        msg.reply(`Hello ${msg.author.username} , you are a lovely person.`);
     }

    //  console.log(msg.author.username)
});