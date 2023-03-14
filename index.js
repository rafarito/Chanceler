const Discord = require("discord.js")

const config = require("./config.json")

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

const client1 = new Discord.Client({intents: [1, 512, 32768, 2, 128]});

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

client.on('ready', () => {
  console.log(`🔥 Estou online em ${client.user.username}!`)
})


client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)
client1.login(config.token)

client1.on("guildMemberAdd", (member) => {
    let canal_logs = "1053104699512979496";
    if (!canal_logs) return;
  
    let embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Boas Vindas!")
    .setDescription(`> Olá ${member}!\n\nSeja Bem-Vindo(a) ao \`${member.guild.name}\`!\n\nEu sou o Chanceler, um bot exclusivo desse servidor e posso fazer algumas coisas para lhe ajudar e divertir, darei avisos e fornecerei informações quando necessario.\n\nAqui você poderá jogar com seus irmãos, conversar, estudar ritualistica, planejar filantropias e muito mais!\n\nFique à vontade para explorar e participar ativamente das calls\n\n`);
  
    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content".
  })