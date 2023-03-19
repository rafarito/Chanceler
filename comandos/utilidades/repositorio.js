const Discord = require("discord.js")
const DONO = "554016380576596008"; // Coloque seu ID

module.exports = {
  name: "repositório", // Coloque o nome do comando
  description: "informações sobre o bot e codigo aberto", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let embed = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user},\n\nEsse bot se encontra em um repositório publico do gitHub, sinta se livre para esturar seu codigo fonte neste link: https://github.com/rafarito/Chanceler.\n\nEm caso de duvida, entre em contato com meu desenvolvedor ${client.users.cache.get(DONO)}`)
    .setColor("Green");

    interaction.reply({ embeds: [embed] })

  }
}