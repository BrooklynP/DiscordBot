import Discord from "discord.js"
import config from "./config.json" assert { type: "json" };

const embed1 = new Discord.EmbedBuilder()
.setColor(0xFF4724)
.setTitle('POAP - Proof Of Attendance Protocol')
.addFields(
    {name: 'What is a POAP?', value: 'The proof of attendance protocol allows you to mint memories as digital mementos we call POAPs. Store them via. email address, ETH address, and more!', inline: false },
    {name: 'How to claim a POAP?', value: 'Visit <#981466315510398976> during one of the BAT Community Events such as the Twitter Spaces, or Brave AMAs, and react (click on the emoji) to their respective message in that channel.', inline: false },
    {name: 'When do I claim my POAP?', value: 'When the POAP is available to claim (see <#981594988548870184>), send the phrase "gm" to the <@937748367235235861> bot as direct message. If there\'s an error, enable Direct Messaging in Discord\'s privacy settings. When you are done, you can of course disable it.', inline: false })
.setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

const embed2 = new Discord.EmbedBuilder()
.setColor(0xFF4724)
.setTitle('Tip.cc - A Discord based crypto wallet')
.addFields(
    {name: 'What is tip.cc', value: 'Tip.cc is a wallet bot used by this server to give out airdrops and prizes from events', inline: false },
    {name: 'How do I claim an airdrop?', value: 'Sometimes there are airdrops in the server that you can claim by reacting the correct emoji', inline: false },
    {name: 'How do I withdraw?', value: 'You can dm <@' + config.TIPCC_USER_ID + '> with the command $help for a list of commands such as $withdraw (note you will need enough to pay the network fee', inline: false })
.setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')


export function getPOAPFAQ() {
    return [embed1.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function getTipCCFAQ() {
    return [embed2.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

// export function getNFTStatsEmbed() {
//     return [embed2.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
// }

// export function getSecondaryInfoEmbed() {
//     return [embed3.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
// }

// export function getVerificationGuideEmbed() {
//     return [embed4.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
// }

// export function getBlogPostEmbed() {
//     return [embed5.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
// }

// export function getUtilityEmbed() {
//     return [embed6, embed7.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
// }

// export function getSageInfoEmbed() {
//     return [embed8.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
// }