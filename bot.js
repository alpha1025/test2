const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Delpoyed Succesfully!');
    client.user.setStatus('online')
    client.user.setPresence({
        game: {
            name: 'Gta V',
            type: "watching",
            url: "https://discordapp.com/"
        }
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
