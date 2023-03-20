const Discord = require("discord.js")

module.exports = {
  name: "anunciar", // Coloque o nome do comando
  description: "faça anuncios manualmente em uma embed.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        type: Discord.ApplicationCommandOptionType.String,
        name: "titulo",
        description: "escreva o titulo da embed",
        required: true,
    },
    {
        type: Discord.ApplicationCommandOptionType.String,
        name: "descrição",
        description: "escreva o texto da embed",
        required: true,
    },
    {
        type: Discord.ApplicationCommandOptionType.Channel,
        name: "chat",
        description: "o canal em que a embed será enviada",
        required: true,
    },
    {
        type: Discord.ApplicationCommandOptionType.String,
        name: "cor",
        description: "cor da embed",
        required: false,
    },
    {
        type: Discord.ApplicationCommandOptionType.Boolean,
        name: "alertar",
        description: "você quer alertar a todos",
        required: false,
    },
  ],

  run: async (client, interaction) => {

    if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)){
        interaction.reply({content: 'você não tem permissão para utilizar este comando.', ephemeral: true})
    }else{
        let titulo = interaction.options.getString("titulo")
        let desc = interaction.options.getString("descrição")
        let cor = interaction.options.getString("cor")
        let todos = interaction.options.getBoolean("alertar")
        if(!cor) cor = "Random"
        let chat = interaction.options.getChannel("chat")
        if (Discord.ChannelType.GuildText !== chat.type) return interaction.reply({content: `❌ Este canal não é um canal de texto para enviar uma mensagem.`, ephemeral: true})

        let embed = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setTitle(titulo)
        .setDescription(desc)
        .setColor(cor);

        if(todos){
            chat.send({ embeds: [embed], content: `@everyone` }).then( () => {
                interaction.reply(`✅ seu aviso foi enviado em ${chat} com sucesso.`)
            }).catch( (e) => {
                interaction.reply(`❌ Algo deu errado.`)
            })
        }else{
            chat.send({ embeds: [embed]}).then( () => {
                interaction.reply(`✅ seu aviso foi enviado em ${chat} com sucesso.`)
            }).catch( (e) => {
                interaction.reply(`❌ Algo deu errado.`)
            })
        }
    }

  }
}