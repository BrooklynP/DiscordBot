const Discord = require("discord.js");
const config = require("./config.json");

    function ruleEmbed() {
        const embed0 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048991428652580864/rules.png')
        
        const embed1 = new Discord.EmbedBuilder()
        .setColor(0xFF4724)
        .setTitle('1. Keep it friendly!')
        //.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription('Keep it friendly and inclusive. We will not tolerate discrimination, nor harassment based on race, beliefs, origin, sexual orientation, gender, affiliation, politics, or any other related reason.')
        .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

        const embed2 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('2. No trading in server or giving financial advice')
        //.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription('Crypto has its risks. You should be aware of them at all times. As such, we do not allow P2P trading in the server, offering NFTs, investment advice, pump&dump schemes, moon-talk, or any kind of manipulative behaviour that might put users at financial risk. ')
        .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

        const embed3 = new Discord.EmbedBuilder()
        .setColor(0x662D91)
        .setTitle('3. No unsolicited advertising')
        //.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription('We will not tolerate being used for your own gains, be it a genuine server, and especially if they are a scam. If you want to be a part of Brave or BAT, go through the official channels to request partnerships, or ask a Team member if what you want to share is fine with us, or not. This includes referrals and other promotional material unless expressly confirmed by the admin team BEFORE it is shared.')
        .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

        const embed4 = new Discord.EmbedBuilder()
        .setColor(0xFF4724)
        .setTitle('4. No NSFW content')
        //.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription('We are family friendly and expect you not to show NSFW content in any way, be it uploads, embeds, GIFs, or links that lead to NSFW. If you are not sure whether your post is NSFW or not, do not post it.')
        .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

        const embed5 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('5. Server team may act at their discretion')
        //.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription('Team members, Mods and Admins may act beyond the given rules if deemed necessary. Please listen to them and if you feel at odds with the decision you may contact an Admin to dispute any action.')
        .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

        const embed6 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png')

        return [embed0, embed1, embed2, embed3, embed4, embed5, embed6]
    }

    module.exports = {ruleEmbed}

// export default function welcomeEmbed () {

// }