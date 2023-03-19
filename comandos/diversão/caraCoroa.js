const Discord = require("discord.js")

module.exports = {
  name: "moeda", // Coloque o nome do comando
  description: "será que cai cara ou coroa?", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => { //esse comando é o mais simples desse bot, mas seguindo esse padrão tu consegue fazer qualquer coisa
    
    let moeda = Math.random();

    if(moeda < 0.5){
        interaction.reply(`deu Cara!!!`);
    }else{
        interaction.reply(`deu Coroa!!!`);
    }
  }
}
