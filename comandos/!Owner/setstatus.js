const Discord = require("discord.js");
const DONO = "554016380576596008"; // Coloque seu ID

module.exports = {
    name: "setstatus",
    description: "Configure meu status.",
    options: [
        {
            type: Discord.ApplicationCommandOptionType.String,
            name: "status",
            description: "Qual estilo você deseja aplicar (online, dnd, idle, invisible)?", //por algum motivo essa parte não funciona, sinta-se livre para me ajudar com isso
            required: true,
        },
        {
            type: Discord.ApplicationCommandOptionType.String,
            name: "descrição",
            description: "Qual será a descrição do status?",
            required: true,
        }
    ],

    run: async (client, interaction) => {

        if (interaction.user.id !== DONO) return interaction.reply({ content: `Apenas o meu dono pode utilizar este comando!`, ephemeral: true })

        try {

            let status = interaction.options.getString("status");
            let desc = interaction.options.getString("descrição");

            client.user.setStatus(`${status}`);

            client.user.setPresence({
                activities: [{
                    name: desc
                }],
            });

            let embed = new Discord.EmbedBuilder()
            .setColor("Green")
            .setTitle("Status atualizado!")
            .addFields(
                {
                    name: `🔮 Mudei meu status para:`,
                    value: `\`${status}\`.`,
                    inline: false
                },
                {
                    name: `📝 Mudei minha descrição para:`,
                    value: `\`${desc}\`.`,
                    inline: false
                }
            )

            await interaction.reply({ embeds: [embed] });

        } catch (error) {
            return console.log(`Ops ${interaction.user}, algo deu errado ao executar este comando.`)
        }
    }
}