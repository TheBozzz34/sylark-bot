const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField } = require('discord.js');

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
		if (member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
			await interaction.reply('You can\'t kick that user!');
		}
		else {
			try {
				await interaction.guild.members.kick(user, { reason: reason });
				await interaction.reply(`Kicked ${user.tag} for ${reason}`);
			}
			catch (err) {
				await interaction.reply('Something went wrong!\n ```' + err.stack.split('\n', 1).join('') + '```');
			}
		}
	},
};

