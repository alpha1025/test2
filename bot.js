const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Delpoyed Succesfully!');
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
    var generalChannel = client.channels.get("727732332253151242") // Replace with known channel ID
    generalChannel.send({embed:{
        color: 43127
        ,description: "Bot is ready" ,
	 timestamp: new Date(),
    
	footer: {
		text: 'Developed by Alpha',
		icon_url: 'https://i.imgur.com/TV9NcbJ.jpg',
		timestamp: new Date(),
		
	},
    }})
  
   client.user.setPresence({
        game: {
            name: 'LoveDarsh😍🛐',
            type: "Watching",
            url: "https://www.youtube.com/"
        }, status: "online"
    });
   
});
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

if (message.content === 'hi') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send({embed: {
  color: 3447003,
  description: " Hi,i am bot !"
}});
}});
} 

})
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
