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
                name: "encremento de novos membros",
                value: "com_membros",
            },
            {
                name: "Hospitalaria",
                value: "com_hosp",
            },
            {
                name: "Auditoria",
                value: "com_audi",
            },
            {
                name: "Entreterimento",
                value: "com_entre",
            },
            {
                name: "Finanças",
                value: "com_fin",
            },
        ]
    },
  ],

  run: async (client, interaction) => {

    let com = interaction.options.getString("comissão");

    switch (com){
      case "com_membros":
        var titulo = `Comissão de Encremento de Novos Membros`
        var descricao = `Olá ${interaction.user}\n\nEsta comissão é responsavel por realizar campanhas para aderir novos membros, se você conhece alguem que quer indicar, entre em contato com membros da comissão ou com seu preseidente ${client.users.cache.get(DONO)}.`
      break;
      case "com_hosp":
        var titulo = `Comissão de Hospitalaria`
        var descricao = `Olá ${interaction.user}\n\nEsta comissão é responsavel` // ainda não sei descrever exatamente essa comissão
      break;
      case "com_audi":
        var titulo = `Comissão de Auditoria`
        var descricao = `c` // ainda não sei descrever exatamente essa comissão
      break;
      case "com_entre":
        var titulo = `Comissão de Entreterimento`
        var descricao = `Olá ${interaction.user}\n\nEstá comissão fica responsavel por organizar as atividades de entreterimento do capitulo, se você possui alguma duvida ou sugestão, entre em contato com os membros da comissão ou com o presidente \`Felipe Sérgio\`.`
      break;
      case "com_fin":
        var titulo = `Comissão de Finanças`
        var descricao = `f` // ainda não sei descrever exatamente essa comissão
      break;
    }

    let embed = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setTitle(titulo)
    .setDescription(descricao)
    .setColor("Green");

    interaction.reply({ embeds: [embed] })

  }
}