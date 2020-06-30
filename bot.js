const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
    client.user.setStatus('online')
    client.user.setPresence({
        game: {
            name: 'Alpha play GTA V',
            type: "Watching",
            url: "https://discordapp.com/"
        }
    });
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
