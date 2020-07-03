const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('DEploymn Succesfully!');
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
        ,description: "Bot is online" ,
	 timestamp: new Date(),

	footer: {
		text: 'Deployed at',
		icon_url: 'https://i.imgur.com/TV9NcbJ.jpg',
		timestamp: new Date(),
		text: "by alpha",

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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
