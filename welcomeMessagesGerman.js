import Discord, { SelectMenuBuilder } from "discord.js"
//https://cdn.discordapp.com/attachments/1023520486132563988/1082030516468973628/Brigade_banner.png
export function welcomeEmbed() {
    const embed0 = new Discord.EmbedBuilder()
    .setColor(0x662D91)
    .setImage('https://cdn.discordapp.com/attachments/1023520486132563988/1082046285525307442/Brigade_banner.png')

    const embed1 = new Discord.EmbedBuilder()
        .setColor(0xFF4724)
        .setTitle('👋 Willkommen zur BAT Brigade!')
        // .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription(`Wir sind das Zuhause vom Brave Browser und Basic Attention Token auf Discord :BravePing:

        Bevor wir los legen, nimm Dir bitte einen Moment um Dir die folgenden Informationen über Brave und $BAT durchzulesen.`)

    const embed2 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('<:BatBrigade:1020451975613120582> Über die BAT Brigade')
        // .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029677606498480169/FinalFightBatTrivia.png')
        .setDescription(`
        ⦁ Unser Ziel ist es eine sichere und herzliche Community für Brave Nutzer und $BAT Besitzer zur Verfügung zu stellen.
        ⦁ Unser Server wird von der Community geführt, mit Hilfe des Brave Teams.
        ⦁ Wir reden über alles $BAT und Brave bezogene! So wie viele andere Themen.
        ⦁ Wir veranstalten regelmäßig Aktivitäten (üblicherweise in :video_game:・events), zum Beispiel unser wöchentliches Trivia, Gewinnspiele und Wettbewerbe um $BAT und eventuell auch Brave Merchandise zu gewinnen.
        `)
    // .setFooter({text:'Art Credits: User MaThD3D'})

    const embed3 = new Discord.EmbedBuilder()
        .setColor(0x662D91)
        .setTitle('<:bravelogo:1062016479362560060> Über Brave')
        // .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029678072435331122/1026522084081422447.png')
        .setDescription(`
        ⦁ Der Brave Browser ist ein schneller, privater und sicherer Webbrowser für PC, Mac und Mobil.
        ⦁ Gegründet durch Brendan Eich, Erfinder des JavaScript und ehm. CEO von Mozilla Firefox.
        ⦁ Du kannst mehr über die verschiedenen Produkte und Funktionen auf <https://brave.com/> erfahren.`)
    // .setFooter({text:'Art Credits: User BelladoneDC'})

    const embed4 = new Discord.EmbedBuilder()
        .setColor(0xFF4724)
        .setTitle('<:BatLogo:850463023176220693> Über den Basic Attention Token ($BAT)')
        .setDescription(`
        ⦁ $BAT ist der neue Token für die digitale Werbeindustrie. Er entlohnt Publizisten für deren Content, Browser-Nutzer für deren Aufmerksamkeit („Attention“) und gibt darüber hinaus Werbetreibern mehr Wert für deren Werbung.
        ⦁ Unsere Token-Besitzer profitieren von dessen Nutzung in Werbung, Content Kreierung und mehr.
        ⦁ Schau auf unsere Webseite, um mehr über den Basic Attention Token zu erfahren!
        <https://basicattentiontoken.org/>`)

    const embed5 = new Discord.EmbedBuilder()
        .setColor(0x9E1F63)
        .setTitle('🔒 Discord Server Verifikation')
        .setDescription(`
        ⦁ Bitte verifiziere Dich unten zum Beweis, dass du ein Mensch bist.
        ⦁ Nach Deiner Verifizierung schau Dir auch unseren Rollen-Kanal an, in dem Du aussuchen kannst, für was Du gerne gepingt werden möchtest und erfahre mehr über den Server.

        Danke, dass Du unserer Community beigetreten bist! Solltest Du irgend welche Fragen, oder Bedenken haben, melde Dich bitte bei jemandem aus unserem Team. <:BatFistBump:931627619114422292>`)
    return [embed0, embed1, embed2, embed3, embed4]
}

export function onboardingEmbed() {
    const embed1 = new Discord.EmbedBuilder()
        .setColor(0xFF4724)
        .setTitle('👋 Welcome to the BAT Brigade!')
        // .setImage('https://cdn.discordapp.com/attachments/1029463141983211593/1029463175663452210/90193704_p0_master1200.png')
        .setDescription(`Hello! Hola! Bonjour! Ciao! Guten Tag! Olá! Nǐ hǎo! γεια! こんにちは! Приветствую!`)
    return [embed1];
}
export function onboardingComponents() {
    const componentRow = new Discord.ActionRowBuilder()
    // .addComponents(new Discord.ButtonBuilder().setStyle(1).setCustomId("test").setLabel("Test"))
    .addComponents(new Discord.SelectMenuBuilder().setCustomId("testSlide").setPlaceholder("Select Language").setOptions([
        {label:"English", value:"English"},
        {label:"Français", value:"French"},
        {label:"Россия", value:"Russian"},
        {label:"中文", value:"Chinese"}
    ]))
    return [componentRow]
}