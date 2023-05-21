const { ActionRowBuilder, SlashCommandBuilder  } = require('discord.js');

const { downloadKey } = require('../../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('predownload')
		.setDescription('Predownload the browser')
		.addStringOption(option =>
			option
				.setName('key')
				.setDescription('The download key'))
		.setDMPermission(false),

    async execute(interaction) {
		const key = interaction.options.getString('key') ?? "undefined";
		if (key === "undefined") {
			await interaction.reply("Please enter a download key")
		}
        else if (key === downloadKey){
			await interaction.reply({ content: "Here is the download link. Please do not share this link to others, otherwise you will be banned from the server\nhttps://ezioinc.alwaysdata.net/download/predowload/ezio-browser/n9tp6mlk123jhie4yz93.exe", ephemeral: true});
		} else {
			await interaction.reply("The entered download key is not a valid, please try again or contact a staff member.");
		}
		
	},
};