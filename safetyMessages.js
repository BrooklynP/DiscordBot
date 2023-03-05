import Discord from "discord.js"
import config from "./config.json" assert { type: "json" };

export function safetyEmbed1() {
    const embed0 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1050061676155764736/safetybanner1.png')
    // .setThumbnail('https://media.discordapp.net/attachments/875480807232380949/963760758603276318/Super_Invisible_Line.png?width=962&height=2')

    const embed1 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('Moderators and Admins will never send you a Direct Message (DM) first!')
        .setDescription(`If you need to reach out to a Moderator or Admin in DM, be sure that the person you reach out to has the <@&` + config.ADMIN_ROLE_ID + `>/<@&` + config.MODERATOR_ROLE_ID + `> role. 
        You can also see the online Admins & Moderators in the right pannel and contact them from here.
        
        If you win a giveaway/contest, you will be told exactly who to contact to claim your prizes in the public announcement of the winners.
        
        To stop scammers DMing you, disable Direct Messages from other members in your Privacy Settings of the server.`)
        .setThumbnail('https://cdn.discordapp.com/emojis/909733848626126868.webp?size=96&quality=lossless')

    const embed2 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('We do not host sneaky airdrops')
        .setDescription(`The only airdrops we host are via <@` + config.TIPCC_USER_ID + `> and <@` + config.INVITE_TRACKER_USER_ID + `> bots (the only thing required to enter is to put an emoji react or click the "ENTER" button below the bots' posts, nothing more). 
        All the other Airdrops and Giveaways will be publicly announced in <#`+ config.ANNOUNCEMENT_CHANNEL_ID + `>`)
        .setThumbnail('https://media.discordapp.net/stickers/883810003302121573.webp?size=160')

    const embed3 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('Report any suspicious behaviour')
        .setDescription(`If you have any doubt on a suspiscious message, announcement or user IMMEDIATELY notify Moderators and Admins using <@&` + config.ADMIN_ROLE_ID + `>/<@&` + config.MODERATOR_ROLE_ID + `>. 
        Also warn the other members of the server ! Scammers are like wolves looking for the lost sheep. The more noise you make about it the less people are likely to fall for it !

        If you notice a suspicious behavior from a Moderator or Admin report it too ! Their account could have been compromised and could be impersonated by scammers ! Even if we do as much as possible to prevent it, we're not 100% infallible.
        
        Report any scam you may stumble upon in <#`+ config.REPORT_SCAM_CHANNEL_ID + `>`)
        .setThumbnail('https://media.discordapp.net/stickers/889963498124222574.webp?size=160')

    const embed4 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('Never FOMO (Fear Of Missing Out)')
        .setDescription(`Scammers will often play with your emotions and try to make you act in a hurry (e.g. saying a giveaway is only open for the next 5 min, or to the first 10 people) and use arguments from authority or injunctions. It always requires a few seconds being off-guard to fall for it and then feeling sorry for yourself.

        We will never rush you into entering a giveaway, airdrop or contest.`)

    const embed5 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('Use the official links!')
        .setDescription(`Always prefer using the official links in <#` + config.FAQ_CHANNEL_ID + `>. Scammers can trick you into using altered links or fake copycat webpages.`)


    return [embed0, embed1, embed2, embed3, embed4, embed5]
}