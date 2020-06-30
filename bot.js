const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() =>
  {
    console.log ('connected as '+ client.user.tag)
    client.user.setActivity("GTA V",{type:"WATCHING"})
  })
  client.on('message',message => {
    if(message.content === '!ping')
    {
      message.channel.send('Pong.')
    }
  })


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
