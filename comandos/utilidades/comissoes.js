const Discord = require("discord.js")
const DONO = "554016380576596008"; // Coloque seu ID

module.exports = {
  name: "comissões", // Coloque o nome do comando
  description: "busque ajuda com comissões", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        type: Discord.ApplicationCommandOptionType.String,
        name: "comissão",
        description: "selecione a comissão desejada",
        required: true,
        choices: [
            {
                name: "membros",
                value: "comi_membros"
            },
            {
                name: "dinheiro",
                value: "comi_dinheiro"
            }
        ]
    },
  ],

  run: async (client, interaction) => {

    let embed = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}\n\nNossa ordem precisa de renovação constante, então se você conhece garotos que na sua concepção, podem ser iniciados na ordem, encaminhe seu contato para membros da comissão de novos membros ou o presidente da comissão ${client.users.cache.get(DONO)}. \n\nContamos com você!!!`)
    .setColor("Green");

    interaction.reply({ embeds: [embed] })

  }
}