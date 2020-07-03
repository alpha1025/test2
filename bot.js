const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    var generalChannel = client.channels.cache.get("727732332253151242") // Replace with known channel ID
    generalChannel.send({embed:{
      color:1752220 ,
      description:"Revised   ",
       timestamp: new Date()
    }})
    client.user.setActivity("under development", {type:"WATCHING"})
    console.log("bot is online")
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
        receivedMessage.channel.send({embed:{
          color: 3066993,
          description:"try ^commands 😁"
        }})
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send({embed:{
        color: 1752220
        ,description: "Help is currently limited" ,
	       timestamp: new Date(),
        icon_url: 'https://i.imgur.com/TV9NcbJ.jpg',
 //

    }})
    } else {
        receivedMessage.channel.send({embed:{
          color:12745742,
          description: " jk🤣. help is still in development",

        }})
    }
}


function commandsCommand(arguments,receivedMessage){
  receivedMessage.channel.send({embed:{
    color:15844367,
    title:"List of Commands",
    description: " ^help for help \n ^fun for fun\n ^command for list of commands\n \n and more coming soon",

  }})
}

function funCommand(arguments,receivedMessage){
  receivedMessage.channel.send({embed:{
    color:12370112,
    title:"Thanks for trying",
    description: "This service will resume soon"

  }})
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
