const Discord = require("discord.js")
const { user } = require("../..")

module.exports = {
  name: "motivacional", // Coloque o nome do comando
  description: "vai te ajudar nos piores momentos.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let user = interaction.user.get;

    let frases = [
      `você é foda cara, eu sei que tu consegue.`,
      `nunca vi homem tão foda como ${user}`, 
    ];
    
    interaction.reply(`nunca vi homem tão foda como ${user}`);
  }
}