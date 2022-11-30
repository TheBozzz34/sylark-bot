// mute a discord user
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Mutes a user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member you want to mute')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for the mute')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason');
		const member = interaction.guild.members.cache.get(user.id);
		if (member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
			await interaction.reply('You can\'t mute that user!');
		}
		else {
			await interaction.guild.members.mute(user, { reason: reason });
			await interaction.reply(`Muted ${user.tag} for ${reason}`);
		}
	},
};

