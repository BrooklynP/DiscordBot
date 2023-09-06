import Discord from "discord.js"

const embed1 = new Discord.EmbedBuilder()
    .setColor(0xFF4724)
    .setTitle('Original Sale')
    .addFields({ name: 'Mint Date', value: '10th Nov 2022', inline: true }, { name: 'Mint Price', value: '3 Sol OR 200 sBAT', inline: true }, { name: 'Sold Out?', value: 'Yes, at public', inline: true }, { name: 'Mint Platform', value: 'https://mint.cardinal.so/bat', inline: false })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

const embed2 = new Discord.EmbedBuilder()
    .setColor(0x9E1F63)
    .setTitle('NFT Stats')
    .addFields({ name: 'Total Supply', value: '2500', inline: false }, { name: 'Curious Supply', value: '1400', inline: true }, { name: 'Dabbler Supply', value: '800', inline: true }, { name: 'Degen Supply', value: '300', inline: true })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

const embed3 = new Discord.EmbedBuilder()
    .setColor(0x662D91)
    .setTitle('Official Links For Secondary Markets')
    .addFields({ name: 'Hyperspace', value: 'https://hyperspace.xyz/collection/batxadamape', inline: false }, { name: 'Coral Cube', value: 'https://coralcube.io/collection/bat', inline: false })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

const embed4 = new Discord.EmbedBuilder()
    .setColor(0xFF4724)
    .setTitle('Verifying with Matrica')
    .setDescription("We are now using Matrica for holder role verification!")
    .addFields({ name: 'Full Guide', value: 'https://docs.matrica.io/guides/user-guide/getting-started', inline: true })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')


const embed5 = new Discord.EmbedBuilder()
    .setColor(0x9E1F63)
    .setTitle('More Resources')
    .addFields({ name: 'Pre-mint blog post', value: 'https://brave.com/bat-nft/', inline: true })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

const embed6 = new Discord.EmbedBuilder()
    .setColor(0x662D91)
    .setTitle('Wen Utility?')
    .addFields({ name: 'BAT & Merch drops', value: 'Verified holders in the Discord may recieve surprise merch and BAT drops https://discord.com/channels/839283762843484192/839283763296075779/1045484063240224848', inline: false },
        { name: 'Gated Community', value: 'Secret holders channel in Bat Brigade Discord \n Access to Based MKRS community channel', inline: false },
        { name: 'IronPaw WL raffle', value: 'Sage holders will be able to enter a raffle for 50 WL spots to Adam\'s Iron Paw Gang collection. https://twitter.com/adam_ape_/status/1596231723259334656', inline: false },
        { name: 'Other WL Raffles', value: 'Wild Cat Ad Agency, DeFi Land, DRiP codes, KikiVerse', inline: false },
        { name: 'More updates to come', value: 'Stay tuned!', inline: false },
        { name: 'What else do you want?', value: 'We want to hear from you, let us know your utility ideas at https://forms.gle/Y5ZX9xBLK1vAMdt88', inline: false })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

const embed7 = new Discord.EmbedBuilder()
    .setColor(0xFF4724)
    .setTitle('Past Rewards')
    .addFields({ name: '1 VIP Ticket to WonderFair', value: 'Raffled to BAT x AA whales (holders of 10+ NFTs) https://discord.com/channels/839283762843484192/839283763296075779/1047204704838504478', inline: false })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')

const embed8 = new Discord.EmbedBuilder()
    .setColor(0x9E1F63)
    .setTitle('The Sage')
    .addFields({ name: 'Wen burn?', value: 'TBD', inline: true },
        { name: 'How burn?', value: 'Details will be published prior to the burn', inline: true },
        { name: 'What you\'ll need', value: 'You will need 1 of each of the existing tiers (1 Curious, 1 Dabbler, 1 Degen', inline: false })
    .setImage('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2 ')
    .setImage('https://brave.com/bat-nft/images/featured.jpg')


export function getOriginalSaleInfoEmbed() {
    return [embed1.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function getNFTStatsEmbed() {
    return [embed2.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function getSecondaryInfoEmbed() {
    return [embed3.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function getVerificationGuideEmbed() {
    return [embed4.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function getBlogPostEmbed() {
    return [embed5.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function getUtilityEmbed() {
    return [embed6, embed7.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function getSageInfoEmbed() {
    return [embed8.setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1048992290674323476/rules2.png').setColor(0x9E1F63)]
}

export function NFTInfoEmbed() {
    return [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8]
}