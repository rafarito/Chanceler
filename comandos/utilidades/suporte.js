const Discord = require("discord.js")
const DONO = "554016380576596008"; // Coloque seu ID

module.exports = {
  name: "suporte", // Coloque o nome do comando
  description: "exibe um campo de suporte com textos que podem ser uteis.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let embed = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user},\n\n se você possui qualquer duvida ou sugestão sobre o bot, contate ${client.users.cache.get(DONO)}, o meu criador.\n\nA triade de conselheiros pode te ajudar com questões administrativas ou duvidas sobre eventos, se tiver duvidas sobre a cavalaria procure o ICC.\n\nO server organiza campeonatos de tempos em tempos podendo até mesmo haver premios,\n\nDivirta -se.\n\n`)
    .setColor("Green");

    interaction.reply({ embeds: [embed] })

  }
}