import Discord from "discord.js"
import config from "./config.json" assert { type: "json" };
import * as welcomeMessages from "./welcomeMessages.js"
import * as welcomeMessagesGerman from "./welcomeMessagesGerman.js"
import * as safetyMessages from "./safetyMessages.js"
import * as ruleMessages from "./ruleMessages.js"
import *  as FAQMessages from "./FAQMessages.js"
import *  as NFTInfo from "./NFTInfoMessages.js"
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

const postData = JSON.stringify({ "condition": { "display_name": "BAT x Adam Ape for Brave" } })
const ProjectStatsOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': config.HYPERSPACE_AUTH_TOKEN
    },
    body: postData
};

const BatStatsOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const AvailableFAQs = {
    NFTSaleStats: "!nft_sale",
    NFTStats: "!nft_stats",
    SecondaryMarkets: "!nft_secondary",
    HolderVerification: "!nft_verify",
    NFTBlog: "!nft_blog",
    NFTUtility: "!nft_utility",
    SageDetails: "!nft_sage",
    POAP: "!faq_poap",
    TIPCC: "!faq_tipcc",
    MAUDAU: "!mdau"
}

const MonthMap = {
    "jan": "01",
    "feb": "02",
    "mar": "03",
    "apr": "04",
    "may": "05",
    "jun": "06",
    "jul": "07",
    "aug": "08",
    "sep": "09",
    "oct": "10",
    "nov": "11",
    "dec": "12"
}

async function GetProjectStats() {
    const response = await fetch('https://beta.api.solanalysis.com/rest/get-project-stat-by-name', ProjectStatsOptions)
    return response.json();
}

async function GetBATStats() {
    const response = await fetch('https://brave.com/transparency-data.json', BatStatsOptions)
    return response.json();
}

function UpdateProjectFloorPrice() {
    GetProjectStats().then((stats => {
        client.user.setActivity('Floor Price: ' + stats.project_stats[0].floor_price + 'SOL')
        console.log("Set FP to " + stats.project_stats[0].floor_price + "SOL")
    }))
}

function giveUsersRoleFromReaction(ChannelID, RoleID, MessageID, EmojiReactionID, ServerID) {
    // let batbromessageID = '1035653394217582603'
    // let batbrochannelID = '846472323250257951'
    // let bravelistroleID = '1034373289222610946'
    // let batpepereactionID = '839871482535608380'
    // let batbrigadeserverID = '839283762843484192'

    client.channels.fetch(ChannelID).then(channel => {
        channel.messages.fetch(MessageID).then(message => {
            message.reactions.resolve(EmojiReactionID).users.fetch().then(userList => {
                client.guilds.fetch(ServerID).then(guild => {
                    const roleToGive = guild.roles.cache.get(RoleID)
                    userList.forEach(userListUser => {
                        console.log(userListUser.username + '#' + userListUser.discriminator)
                        guild.members.fetch(userListUser.id).then(MemberUser => {
                            MemberUser.roles.add(roleToGive);
                            console.log("role given", userListUser.id);
                        })

                    });
                })

            })
        })
    })
}

function createVerificationMessage() {
    const MessageButtonCollector = channel.createMessageComponentCollector()
    console.log("created button hook")
    MessageButtonCollector.on('collect', interaction => {
        console.log("button pressed");
        console.log(interaction)
        const member = interaction.guild.members.cache.get(interaction.user.id);
        if (interaction.message.id === welcomeMessageID) {
            client.users.fetch(interaction.user.id).then(user => {
                console.log(user);
                //const roleToGive = interaction.guild.roles.cache.find(role => role.name === "Member")
                const roleToGive = interaction.guild.roles.cache.get(config.MEMBER_ROLE_ID)
                member.roles.add(roleToGive)
                console.log("added role");
                interaction.reply({ content: 'Added Member Role', ephemeral: true });
            })
        }
    })
    console.log("created button hook event");
}

function updateWelcomeMessage() {
    //1023520486132563988 server makeover channel
    client.channels.fetch(config.WELCOME_CHANNEL_ID).then(channel => {
        channel.messages.fetch('1035236461924077588').then(message => {
            message.edit({ embeds: welcomeMessages.welcomeEmbed() })
        })
    });
}
function updateImportantInfoChannel() {
    client.channels.fetch(config.NFT_INFO_CHANNEL_ID).then(channel => {
        channel.messages.fetch('1060316513048985640').then(message => {
            message.edit({ embeds: NFTInfoEmbed() })
        })
    });
}

function HandleFAQCommands(messageContent, channelID) {
    let embeds = []
    switch (messageContent) {
        case "!faq_help":
            let FAQDescription = ""
            for (const [key, faq] of Object.entries(AvailableFAQs)) {
                FAQDescription += faq
                FAQDescription += "\n"
            }
            embeds = [new Discord.EmbedBuilder().setTitle("List of FAQ commands").setDescription(FAQDescription).setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
            break;
        case AvailableFAQs.NFTSaleStats:
            embeds = NFTInfo.getOriginalSaleInfoEmbed()
            break;
        case AvailableFAQs.NFTStats:
            embeds = NFTInfo.getNFTStatsEmbed()
            break;
        case AvailableFAQs.SecondaryMarkets:
            embeds = NFTInfo.getSecondaryInfoEmbed()
            break;
        case AvailableFAQs.HolderVerification:
            embeds = NFTInfo.getVerificationGuideEmbed()
            break;
        case AvailableFAQs.NFTBlog:
            embeds = NFTInfo.getBlogPostEmbed()
            break;
        case AvailableFAQs.NFTUtility:
            embeds = NFTInfo.getUtilityEmbed()
            break;
        case AvailableFAQs.SageDetails:
            embeds = NFTInfo.getSageInfoEmbed()
            break;
        case AvailableFAQs.POAP:
            embeds = FAQMessages.getPOAPFAQ()
            break;
        case AvailableFAQs.TIPCC:
            embeds = FAQMessages.getTipCCFAQ()
            break;
        default:
            embeds = []
            break;
    }
    try {
        if (embeds.length > 0) {
            client.channels.fetch(channelID).then(channel => {
                channel.send({ embeds: embeds })
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}

function createOnboardingEmbed(channel) {
    return channel.send({ embeds: welcomeMessages.onboardingEmbed(), components: welcomeMessages.onboardingComponents() })
}

function handleLanguageSelection(channel, messageID) {
    const MessageButtonCollector = channel.createMessageComponentCollector()
    MessageButtonCollector.on('collect', interaction => {
        // const member = interaction.guild.members.cache.get(interaction.user.id);
        if (interaction.message.id === messageID) {
            const member = interaction.guild.members.cache.get(interaction.user.id);
            if (interaction.values[0] === "German") {
                interaction.reply({ embeds: welcomeMessagesGerman.welcomeEmbed(), ephemeral: true });

                let roleToGive = interaction.guild.roles.cache.get('1025506875279683684')
                member.roles.add(roleToGive)
                roleToGive = interaction.guild.roles.cache.get(config.MEMBER_ROLE_ID)
                member.roles.add(roleToGive)
            } else {
                interaction.reply({ embeds: welcomeMessages.welcomeEmbed(), ephemeral: true });

                const roleToGive = interaction.guild.roles.cache.get(config.MEMBER_ROLE_ID)
                member.roles.add(roleToGive)
            }
        }
    })
}

client.on('ready', (clientReady) => {
    // UpdateProjectFloorPrice()
    // setInterval(() => {
    //     UpdateProjectFloorPrice()
    // }, 900000);
})

client.on('messageCreate', message => {
    const messageContent = message.content.toLowerCase()
    const channelID = message.channelId
    const senderID = message.author.id

    if (messageContent == "!onboardingtest") {
        //1023520486132563988 server makeover channel
        client.channels.fetch(channelID).then(channel => {
            createOnboardingEmbed(channel).then((response) => {
                let onboardingMessageID = response.id
                handleLanguageSelection(channel, onboardingMessageID)
            })
        });
    }

    if (senderID == 1029393319924609115n) {
        return
    }
    if (messageContent.includes(" gm ") || messageContent.startsWith("gm") || messageContent.endsWith("gm")) {
        message.react('👋')
        message.react('845061306259734578')
    }
    if (messageContent.includes("bat chan") || messageContent.includes("bat-chan")) {
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
    if (messageContent.includes(" wen ") || messageContent.startsWith("wen") || messageContent.endsWith("wen")) {
        message.reply('<:wen:1049723300739297310>')
    }//<:emoji name:emoji id> emoji_name:emoji_id
    if (messageContent === "ping") {
        console.log("pong");
        message.reply('pong')
    }
    if (messageContent.includes("!mdau")) {
        let month = "02";
        let year = "2023"
        if (messageContent.length > 8) {
            if (message.content.length > 12) {
                console.log(messageContent.substring(10, 14))
                let newYear = messageContent.substring(10, 14)
                console.log(newYear)
                year = newYear
            }
            console.log(messageContent.substring(6, 9))
            let newMonth = MonthMap[messageContent.substring(6, 9)]
            console.log(newMonth)
            if (newMonth) {
                month = newMonth
            }
        }
        GetBATStats().then(BatStats => {
            // console.log(BatStats);
            let date = year + "-" + month
            console.log(date);
            if (BatStats.users[date]) {
                let mau = BatStats.users[date].mau
                let dau = BatStats.users[date].dau
                message.reply("MAU for "+ date + " was: " + (mau / 1000000) + "m and the DAU was: " + (dau / 1000000) + "m")
            }
        })
        return
    }
    if (messageContent.startsWith("!")) {
        HandleFAQCommands(messageContent, channelID)
    }
})


