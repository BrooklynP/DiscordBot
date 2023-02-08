const Discord = require("discord.js");
const config = require("./config.json");
const welcomeMessages = require("./welcomeMessages.js")
const safetyMessages = require("./safetyMessages.js")
const ruleMessages = require("./ruleMessages.js");
const {NFTInfoEmbed,getOriginalSaleInfoEmbed,getNFTStatsEmbed, getSecondaryInfoEmbed, getVerificationGuideEmbed, getBlogPostEmbed, getUtilityEmbed, getSageInfoEmbed} = require("./NFTInfoMessages");

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

client.on('ready',  (clientReady) =>{
    client.user.setPresence({activities:[{name: 'Brave Browser'}]})
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

    client.channels.fetch(config.NFT_INFO_CHANNEL_ID).then(channel => 
        {
            channel.messages.fetch('1060316513048985640').then(message =>{
                message.edit({
                    embeds: NFTInfoEmbed()
                })
            })
            // channel.send({
            //     embeds: NFTInfoEmbed()
            // }).then(sentMessage =>  {
    
            // })
        });
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
})

client.on('messageCreate', message =>{
    const messageContent = message.content.toLowerCase()
    const channelID = message.channelId

    if (messageContent.includes(" gm ") || messageContent.startsWith("gm") || messageContent.endsWith("gm")) {
        message.react('👋')
        message.react('845061306259734578')
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
                embeds = getOriginalSaleInfoEmbed()
                break;
            case "!nft_stats":
                embeds = getNFTStatsEmbed()
                break;
            case "!nft_secondary":
                embeds = getSecondaryInfoEmbed()
                break;
            case "!nft_verify":
                embeds = getVerificationGuideEmbed()
                break;
            case "!nft_blog":
                embeds = getBlogPostEmbed()
                break;
            case "!nft_utility":
                embeds = getUtilityEmbed()
                break;
            case "!nft_sage":
                embeds = getSageInfoEmbed()
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


