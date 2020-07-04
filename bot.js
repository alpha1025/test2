const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
    var generalChannel = client.channels.get("727732332253151242") // Replace with known channel ID
    generalChannel.send({embed:{
      color:1752220 ,
      description:"Revised   ",
       timestamp: new Date()
    }})
    client.user.setPresence({
        game: {
            name: "Surprise" ,
            type: "Watching",
            url: "https://www.youtube.com/"
        }, status: "online"
    });
    console.log("bot is deployed ")
  })
client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    if (receivedMessage.content.startsWith("^")) {
        processCommand(receivedMessage)
    }
})
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments
    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)
    } else if(primaryCommand == "commands")
    {  commandsCommand(arguments,receivedMessage)
    }
    else if(primaryCommand =='fun')
    {
      funCommand(arguments,receivedMessage)
    }
     else {
        receivedMessage.channel.send({embed:{
          color: 15158332,
          description:"bruh!!! where is the command??😅"
        }})
        receivedMessage.react("🛐")
