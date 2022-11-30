const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks a user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member you want to kick')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for the kick')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason');
		const member = interaction.guild.members.cache.get(user.id);
		if (member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
			await interaction.reply('You can\'t kick that user!');
		}
		else {
			await interaction.guild.members.kick(user, { reason: reason });
			await interaction.reply(`Kicked ${user.tag} for ${reason}`);
		}
	},
};

