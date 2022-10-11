const Discord = require("discord.js");
const config = require("./config.json");
const welcomeMessages = require("./welcomeMessages.js")
const safetyMessages = require("./safetyMessages.js")

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
    partials: 
    ["GUILD_MEMBER"]
});

client.on('ready',  (clientReady) =>{
    // const welcomeChannel = client.channels.fetch(config.WELCOME_CHANNEL_ID).then (channel => 
    //     {
    //         channel.send({embeds: welcomeMessages.welcomeEmbed()})

    //     })

        // const safetyChannel = client.channels.fetch(config.SAFETY_CHANNEL_ID).then (channel => 
        //     {
        //         channel.send({embeds: safetyMessages.safetyEmbed()})
    
        //     })
        console.log("I live");
})

client.on('messageCreate', message =>{
    console.log(message.content)
    if (message.content.includes("GM")) {
        message.react('👋')
        console.log("going to reply");
    }
})

client.login(config.BOT_TOKEN);
