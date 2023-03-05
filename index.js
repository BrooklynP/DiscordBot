import Discord from "discord.js"
import config from "./config.json" assert { type: "json" };
import * as welcomeMessages from "./welcomeMessages.js"
import * as safetyMessages from "./safetyMessages.js"
import * as ruleMessages from "./ruleMessages.js"
import *  as FAQMessages from "./FAQMessages.js" 
import *  as NFTInfo from "./NFTInfoMessages.js" 
import http from 'http'
import fetch from 'node-fetch'

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
    partials: 
    ["GUILD_MEMBER"]
});
client.login(config.BOT_TOKEN);

const postData = JSON.stringify( { "condition": { "display_name": "BAT x Adam Ape for Brave" } })
const options = {
    // hostname: 'https://beta.api.solanalysis.com',
    // path: '/rest/get-project-stat-by-name',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    //   'Content-Length': Buffer.byteLength(postData),
      'Authorization': config.HYPERSPACE_AUTH_TOKEN
    },
    body: postData
  };

async function GetProjectStats(){
    const response = await fetch('https://beta.api.solanalysis.com/rest/get-project-stat-by-name', options)
    return response.json();
}

function UpdateProjectFloorPrice(){
    GetProjectStats().then((stats=>{
        // client.user.setPresence({activities:[{name: 'Floor Price: ' + stats.project_stats[0].floor_price + 'SOL'}]})
        client.user.setActivity('Floor Price: ' + stats.project_stats[0].floor_price + 'SOL')
        console.log("Set FP to " + stats.project_stats[0].floor_price + "SOL")
    }))
}

client.on('ready',  (clientReady) =>{
    UpdateProjectFloorPrice()
    setInterval(() => {
        UpdateProjectFloorPrice()
    }, 900000);
    // const request = http.request(options, (response) => {
    //     response.setEncoding('utf8');
    
    //     response.on('data', (chunk) => {
    //       data += chunk;
    //     });
    
    //     response.on('end', () => {
    //       console.log(data);
    //     });
    //   });
    // request.on('error', (error) => {
    //     console.error(error);
    // });
    // request.write(postData);
    // request.end();

    // console.log("running")
    // let batbromessageID = '1035653394217582603'
    // let batbrochannelID = '846472323250257951'
    // let bravelistroleID = '1034373289222610946'
    // let batpepereactionID = '839871482535608380'
    // let batbrigadeserverID = '839283762843484192'
    // client.channels.fetch(batbrochannelID).then(channel => {
    //     channel.messages.fetch(batbromessageID).then(message =>{
    //         message.reactions.resolve(batpepereactionID).users.fetch().then(userList=>{
    //             // console.log(userList);
    //             client.guilds.fetch(batbrigadeserverID).then(guild =>{
    //                 const roleToGive = guild.roles.cache.get(bravelistroleID)
    //                 userList.forEach(userListUser => {
    //                     console.log(userListUser.username + '#' + userListUser.discriminator)
    //                     // console.log("found user", userListUser.id);
    //                     // guild.members.fetch(userListUser.id).then(MemberUser =>{                      
    //                     //     MemberUser.roles.add(roleToGive);
    //                     //     console.log("role given", userListUser.id);
    //                     // })
                        
    //                 });
    //         })

    //         })
    //     })
    // })
    // client.channels.fetch(config.RULE_CHANNEL_ID).then(channel => 
    // {
    //     channel.send({
    //         embeds: ruleMessages.ruleEmbed()
    //     }).then(sentMessage =>  {

    //     })
    // });

    // client.channels.fetch(config.NFT_INFO_CHANNEL_ID).then(channel => 
    //     {
    //         channel.messages.fetch('1060316513048985640').then(message =>{
    //             message.edit({
    //                 embeds: NFTInfoEmbed()
    //             })
    //         })
    //         // channel.send({
    //         //     embeds: NFTInfoEmbed()
    //         // }).then(sentMessage =>  {
    
    //         // })
    //     });
        // const MessageButtonCollector = channel.createMessageComponentCollector()
        // console.log("created button hook")
        // MessageButtonCollector.on('collect', interaction => {
        //     console.log("button pressed");
        //     console.log(interaction)
        //     const member = interaction.guild.members.cache.get(interaction.user.id);
        //     if(interaction.message.id === welcomeMessageID) {
        //         client.users.fetch(interaction.user.id).then(user =>{
        //             console.log(user);
        //             //const roleToGive = interaction.guild.roles.cache.find(role => role.name === "Member")
        //             const roleToGive = interaction.guild.roles.cache.get(config.MEMBER_ROLE_ID)
        //             member.roles.add(roleToGive)
        //             console.log("added role");
        //             interaction.reply({ content: 'Added Member Role', ephemeral: true });
        //         })
        //     }
        // })
        // console.log("created button hook event");
    // })

        // const safetyChannel = client.channels.fetch(config.SAFETY_CHANNEL_ID).then (channel => 
        //     {
        //         channel.send({embeds: safetyMessages.safetyEmbed1()})
    
        //     })
        // const rulesChannel = client.channels.fetch(config.RULE_CHANNEL_ID).then (channel => 
        //     {
        //         channel.send({embeds: ruleMessages.ruleEmbed()})
    
        //     })
        // client.channels.fetch(config.WELCOME_CHANNEL_ID).then (channel => 
        //     {
        //         channel.send({embeds: welcomeEmbed.welcomeEmbed()})
    
        //     })

            //1023520486132563988 server makeover channel

        // client.channels.fetch(config.WELCOME_CHANNEL_ID).then(channel => 
        // {
        //     channel.messages.fetch('1035236461924077588').then(message =>{
        //         message.edit({embeds: welcomeMessages.welcomeEmbed()})
        //     })
        // });
})

client.on('messageCreate', message =>{
    const messageContent = message.content.toLowerCase()
    const channelID = message.channelId
    const senderID = message.author.id

    if (senderID == 1029393319924609115) {
        return
    }
    if (messageContent.includes(" gm ") || messageContent.startsWith("gm") || messageContent.endsWith("gm")) {
        message.react('👋')
        message.react('845061306259734578')
    }
    if (messageContent.includes("bat chan") || messageContent.includes("bat-chan") ) {
        message.react('👀')
    }
    if (messageContent.includes(" dru ") || messageContent.startsWith("dru") || messageContent.endsWith("dru")) {
        message.reply('Ban Dru')
    }
    if (messageContent.includes(" frimm ") || messageContent.startsWith("frimm") || messageContent.endsWith("frimm")) {
        message.reply('Ban Frimm')
    }
    if (messageContent.includes(" borky ") || messageContent.startsWith("borky") || messageContent.endsWith("borky")) {
        message.reply('Ban Borky')
    }
    if (messageContent.includes("spammu")) {
        message.reply('Spammu isn\'t real')
    }
    if (messageContent.includes(" gn ") || messageContent.startsWith("gn") || messageContent.endsWith("gn")) {
        message.react('845061305874513931')
    }
    if (messageContent.includes(" wen ") || messageContent.startsWith("wen") || messageContent.endsWith("wen")){
        message.reply('<:wen:1049723300739297310>')
    }//<:emoji name:emoji id> emoji_name:emoji_id
    if (messageContent === "ping") {
        console.log("pong");
        message.reply('pong')
    }

    if(messageContent.startsWith("!")){
        let embeds = []
        switch(messageContent){
            case "!nft_sale":
                embeds = NFTInfo.getOriginalSaleInfoEmbed()
                break;
            case "!nft_stats":
                embeds = NFTInfo.getNFTStatsEmbed()
                break;
            case "!nft_secondary":
                embeds = NFTInfo.getSecondaryInfoEmbed()
                break;
            case "!nft_verify":
                embeds = NFTInfo.getVerificationGuideEmbed()
                break;
            case "!nft_blog":
                embeds = NFTInfo.getBlogPostEmbed()
                break;
            case "!nft_utility":
                embeds = NFTInfo.getUtilityEmbed()
                break;
            case "!nft_sage":
                embeds = NFTInfo.getSageInfoEmbed()
                break;
            case "!faq_poap":
                embeds = FAQMessages.getPOAPFAQ()
                break;
            case "!faq_tipcc":
                embeds = FAQMessages.getTipCCFAQ()
                break;
            default:
                embeds = []
                break;
        }
        try {
            client.channels.fetch(channelID).then (channel => {
                channel.send({embeds: embeds})
            })
        }
        catch (error) {
            console.log(error)
        }
    }
})


