const { ActionRowBuilder,ButtonBuilder, ButtonStyle,SlashCommandBuilder,EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('download')
		.setDescription('Download command'),
	async execute(interaction) {
        const downbtn = new ButtonBuilder()
			.setCustomId('downbtn')
			.setLabel('Download')
			.setStyle(ButtonStyle.Success)
            .setDisabled(true);
        const DownEmbem = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Ezio Browser - Download')
            .setURL('https://github.com/EzioInc/browser')
            .setAuthor({ name: 'Ezio Bot', url: 'https://github.com/EzioInc/discord' })
            .setImage('https://ezioinc.alwaysdata.net/EZIO.png')
            .setTimestamp()
            .setFooter({ text: 'Ezio Inc'});
        const row = new ActionRowBuilder()
            .addComponents(downbtn)
		await interaction.reply({ embeds: [DownEmbem], components: [row]});
	},
};