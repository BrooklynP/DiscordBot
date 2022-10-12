const Discord = require("discord.js");
const config = require("./config.json");

    function welcomeEmbed() {
        const embed1 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Welcome to Bat Brigade')
        .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription('Hey, I\'m Bat Chan, Welcome to the BAT Brigade! We are the official Brave and BAT community on Discord.')
        
        const embed2 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Events')
        .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029677606498480169/FinalFightBatTrivia.png')
        .setDescription(`We host trivia every Friday in the <#`+config.EVENTS_CHANNEL_ID+`> channel. You get BAT for getting the right answers as well as for participating. Use the <#`+config.EVENTS_CALENDAR_CHANNEL_ID+`> to give yourself a reminder.
    
        We also have weekly community calls from the Brave team that gives us updates on where Brave is going, what they are planning on doing etc. 
        
        Again, you can use the <#`+config.EVENTS_CALENDAR_CHANNEL_ID+`> to give yourself a reminder for these calls.`)
        
    
        const embed3 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Boosting BAT on socials')
        .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029678072435331122/1026522084081422447.png')
        .setDescription(`The BAT Brigade is also the hub for promoting BAT and Brave on social media such as Twitter. 
        If you want to help spread the word on Brave and BAT, then you can join the BAT Elites programme. Please contact <@`+config.ACE_LOLZ_USER_ID+`> if you are interested. 
        Once you get the BAT elites role, you can then post in the <#`+config.ELITES_CHANNEL_ID+`> channel. 
        You can retweet the tweets in the channel. You can also post your tweets in the channel and other users will retweet it for you. `)
        
    
        const embed4 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Beta Testing')
        .setDescription('The BAT Brigade also gets access to beta programs like Brave Talk and Brave Search last year so if you wanna get first dibs on stuff like this, the BAT Brigade is THE place to be.    ')
        
        return [embed1, embed2, embed3, embed4]
    }

    module.exports = {welcomeEmbed}

// export default function welcomeEmbed () {

// }