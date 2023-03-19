const Discord = require("discord.js")

module.exports = {
  name: "decida", // Coloque o nome do comando
  description: "eu irei decidir quem ganhou a discussão.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        type: Discord.ApplicationCommandOptionType.User,
        name: "primenvolvido",
        description: "o primeiro envolvido na discussão",
        required: true,
    },
    {
        type: Discord.ApplicationCommandOptionType.User,
        name: "segenvolvido",
        description: "o segundo envolvido na discussão",
        required: true,
    },
  ],

  run: async (client, interaction) => {

    let ganhador = Math.random();
    if(ganhador < 0.5){
        var user = interaction.options.getUser("primenvolvido");
    }
    else{
        var user = interaction.options.getUser("segenvolvido");
    }
    
    let frases = [
        //bote frases referenciando o ganhador da discussão
        `quem ganhou foi ${user}.`,
        `obviamente ${user} tem razão.`,
        `${user} sensato como sempre.`,
        `${user} é o dono da razão.`
    ];
    let frase = frases[Math.floor(Math.random() * frases.length)]; //essa estrutura funciona bem pra escolher uma frase aleatoria de um array
    interaction.reply({content: frase, ephemeral: false});

  }
}
