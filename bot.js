const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Delpoyed Succesfully!');
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'Grand theft auto V',
            type: "Playing",
            url: "https://discordapp.com/"
        }
    });
});

client.on('message', (receivedMessage) => {
     if (receivedMessage.author == client.user) {
        return 
     }
      else if(message.content != 'ping') {
          receivedMessage.channel.send("i am bot")
      }
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
