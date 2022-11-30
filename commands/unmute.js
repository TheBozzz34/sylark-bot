const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unmute')
		.setDescription('Unmutes a user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member you want to unmute')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for the unmute')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason');
		const member = interaction.guild.members.cache.get(user.id);
		if (member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
			await interaction.reply('You can\'t unmute that user!');
		}
		else {
			await interaction.guild.members.unmute(user, { reason: reason });
			await interaction.reply(`Unmuted ${user.tag} for ${reason}`);
		}
	},
};
