// mute a discord user
const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField } = require('discord.js');
const ms = require('ms');

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
				.setName('time')
				.setDescription('The time-length for the mute')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for the mute')
				.setRequired(false)),
	async execute(interaction) {
		const time = ms(interaction.options.getInteger('time'));
		const user = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason');
		const member = interaction.guild.members.cache.get(user.id);
		if (member.permissions.has(PermissionsBitField.Flags.MuteMembers)) {
			await interaction.reply('You can\'t mute that user!');
		}
		else {
			try {
				await member.timeout(time, reason);
				await interaction.reply(`Muted ${user.tag} for ${reason}` + (time ? ` for ${ms(time, { long: true })}` : ''));
			}
			catch (err) {
				await interaction.reply('Something went wrong!\n ```' + err.stack.split('\n', 1).join('') + '```');
			}
		}
	},
};

