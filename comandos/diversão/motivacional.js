const Discord = require("discord.js")
const { user } = require("../..")

module.exports = {
  name: "motivacional", // Coloque o nome do comando
  description: "vai te ajudar nos piores momentos.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      type: Discord.ApplicationCommandOptionType.User,
      name: "alvo",
      description: "escreva quem você deseja consolar.",
      required: true,
    },
  ],

  run: async (client, interaction) => {

    var usuario = interaction.options.getUser("alvo");

    let frases = [
      `nunca vi homem tão foda como ${usuario}`, 
      `siga em frente mano ${usuario}, tu consegue!`,
      `${usuario} é o orgulho dessa ordem, falo mesmo`,
      `o mano ${usuario} carrega esse capitulo, não à como negar.`,
      `${usuario} acorda todos os dias pensando em nós, um exemplo de Demolay`,
      `${usuario} tá voando alto em`
    ];

    let frase = frases[Math.floor(Math.random() * frases.length)];
    interaction.reply({content: frase , ephemeral: false});
  }
}