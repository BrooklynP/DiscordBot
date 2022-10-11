const Discord = require("discord.js");
const config = require("./config.json");

    function safetyEmbed() {
        const embed1 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('🚫 Moderators & Admins will never send you a Direct Message (DM) first ! ')
        .setDescription(`✓ If you need to reach out to a Moderator or an Admin in DM, be sure that the person you reach out to has the @Admin:Admin: or @Moderator:Moderator: role. You can also see the online Admins & Moderators in the right pannel and contact them from here.

        ✓ If you win a giveaway/contest, you will be told exactly who's the right person to contact to claim your prizes in the public announcement of the winners. 
        In any case always be sure to whom you're talking to. 
        
        ✓ Disable Direct Messages from other members in your Privacy Settings of the server `)
        
        const embed2 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('🪂 No sneaky Airdrops !')
        .setDescription(`✓ We will never host sneaky Airdrops or Giveaways except with the use of @tip.cc and @Invite Tracker bots (the only thing required to enter is to put an emoji react or click the "ENTER" button below the bots' posts, nothing more). All the other Airdrops and Giveaways will be publicly announced in 📢`)
        
    
        const embed3 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('⚠️ Report any suspicious behaviour')
        .setDescription(`✓ If you have any doubt on a suspiscious message, announcement or user IMMEDIATELY notify Moderators and Admins using @Moderator/ @Admin explaining them exactly the context. Also warn the other members of the server ! Scammers are like wolves looking for the lost sheep. The more noise you make about it the less people are likely to fall for it !

        ✓ If you notice a suspicious behavior from a Moderator or Admin report it too ! Their account could have been compromised and could be impersonated by scammers ! Even if we do as much as possible to prevent it, we're not 100% infallible.
        
        ✓ Report any scam you may stumble upon in 🔫report-scam 
        `)
        
    
        const embed4 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('😱 Never FOMO (Fear Of Missing Out).')
        .setDescription(`✓ Scammers will often play with your emotions and try to make you act in a hurry (e.g. saying a giveaway is only open for the next 5 min, or to the first 10 people) and use arguments from authority or injunctions. It always requires a few seconds being off-guard to fall for it and then feeling sorry for yourself.

        ✓ We will never rush you into entering a giveaway, airdrop or contest.
        
        ⛓️ Use the official links !
        
        ✓ Always prefer using the official links in ❓faqs. Scammers can trick you into using altered links or fake copycat webpages. `)

        const embed5 = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('😱 Never FOMO (Fear Of Missing Out).')
        .setDescription(`✓ Scammers will often play with your emotions and try to make you act in a hurry (e.g. saying a giveaway is only open for the next 5 min, or to the first 10 people) and use arguments from authority or injunctions. It always requires a few seconds being off-guard to fall for it and then feeling sorry for yourself.

        ✓ We will never rush you into entering a giveaway, airdrop or contest.
        
        ⛓️ Use the official links !
        
        ✓ Always prefer using the official links in ❓faqs. Scammers can trick you into using altered links or fake copycat webpages. `)
        
        
        return [embed1, embed2, embed3, embed5]
    }

    module.exports = {safetyEmbed}
