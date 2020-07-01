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
        ,description: "Bot is ready"}})
  
    client.user.setPresence({
        game: {
            name: 'GTA V',
            type: "Watching",
            url: "https://discordapp.com/"
        }, status: "online"
    });
   
    
    
});
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    receivedMessage.channel.send(
    {embed: {
  color: 3447003,
  description: " i am bot !"
}})
})
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
