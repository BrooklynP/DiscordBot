import Discord from "discord.js"
//https://cdn.discordapp.com/attachments/1023520486132563988/1082030516468973628/Brigade_banner.png
export function welcomeEmbed() {
    const embed0 = new Discord.EmbedBuilder()
    .setColor(0x662D91)
    .setImage('https://cdn.discordapp.com/attachments/1023520486132563988/1082046285525307442/Brigade_banner.png')

    const embed1 = new Discord.EmbedBuilder()
        .setColor(0xFF4724)
        .setTitle('👋 Welcome to the BAT Brigade!')
        // .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription(`We are the home of the Brave Browser and Basic Attention Token ($BAT) on Discord.
        
        Before you get started, please take a moment to review the following information to learn more about Brave and $BAT.`)

    const embed2 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('<:BatBrigade:1020451975613120582> About the BAT Brigade')
        // .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029677606498480169/FinalFightBatTrivia.png')
        .setDescription(`
        ⦁ Our goal is to provide a safe and welcoming community for Brave users and $BAT holders.
        ⦁ Our server is run by community members and Brave Team members!
        ⦁ We talk about any and all things BAT and Brave! as well as many other topics.
        ⦁ We host activities (Usually in our events channel) such as our weekly trivia, giveaways and competitions to win BAT and Brave merch!
        `)
    // .setFooter({text:'Art Credits: User MaThD3D'})

    const embed3 = new Discord.EmbedBuilder()
        .setColor(0x662D91)
        .setTitle('<:bravelogo:1062016479362560060> About Brave')
        // .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029678072435331122/1026522084081422447.png')
        .setDescription(`
        ⦁ The Brave browser is a fast, private and secure web browser for PC, Mac and mobile.
        ⦁ Founded by Brendan Eich, the creator of JavaScript and ex CEO at Mozilla Firefox.
        ⦁ You can learn more about the different products and features at <https://brave.com>`)
    // .setFooter({text:'Art Credits: User BelladoneDC'})

    const embed4 = new Discord.EmbedBuilder()
        .setColor(0xFF4724)
        .setTitle('<:BatLogo:850463023176220693> About the Basic Attention Token ($BAT)')
        .setDescription(`
        ⦁ $BAT is the new token for the digital advertising industry. It pays publishers for their content and users for their attention, while providing advertisers with more in return for their ads.
        ⦁ Our token holders benefit from its use in advertising, content creation, and more.
        ⦁ To learn more about $BAT, read the whitepaper at <https://basicattentiontoken.org>`)

    const embed5 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('🔒 Discord Server Verification')
        .setDescription(`
        ⦁ Please verify below to prove you are human.
        ⦁ After you verify, please check out our role selection where you can pick what you want to be pinged about and learn more about the server.

        Thank you for joining our community! If you have any questions or concerns, please reach out to a member of our team. <:BatFistBump:931627619114422292>`)
    return [embed0, embed1, embed2, embed3, embed4, embed5]
}