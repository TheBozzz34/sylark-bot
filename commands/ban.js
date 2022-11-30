// ban a discord user
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member you want to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for the ban')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason');
		const member = interaction.guild.members.cache.get(user.id);
		if (member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
			await interaction.reply('You can\'t ban that user!');
		}
		else {
			await interaction.guild.members.ban(user, { reason: reason });
			await interaction.reply(`Banned ${user.tag} for ${reason}`);
		}
	},
};

