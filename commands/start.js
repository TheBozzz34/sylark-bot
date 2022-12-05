/* eslint-disable no-mixed-spaces-and-tabs */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
 	data: new SlashCommandBuilder()
 		.setName('discordtogether')
 		.setDescription('Starts a discordtogether session.')
 		.addStringOption(option =>
 			option
 				.setName('activity')
 				.setDescription('The activity you want to start')
 				.setRequired(true)
				.addChoices(
					{ name: 'YouTube Together', value: 'youtube' },
					{ name: 'Poker Night', value: 'poker' },
					{ name: 'Betrayal.io', value: 'betrayal' },
					{ name: 'Fishington.io', value: 'fishington' },
					{ name: 'Chess in the Park', value: 'chess' },
				)),
 	async execute(interaction) {
		if (interaction.user.id !== '457659194535837727') {
			await interaction.reply('This command can only be used by the bot owner!');
			return;
		}
 		const activity = interaction.options.getString('activity');
 		const embed = new EmbedBuilder()
 			.setColor('#0099ff')
 			.setTitle('Discord Together')
 			.setDescription('Click the link below to start the activity!');
 		if (activity === 'youtube') {
 			const link = await interaction.client.discordTogether.createTogetherCode(interaction.member.voice.channelID, 'youtube');
 			embed.addFields(
 				{ name: 'YouTube Together', value: `[Click Here](${link})` },
 			);
 		}
 		else if (activity === 'poker') {
 			const link = await interaction.client.discordTogether.createTogetherCode(interaction.member.voice.channelID, 'poker');
 			embed.addFields(
 				{ name: 'Poker Night', value: `[Click Here](${link})` },
 			);
 		}
 		else if (activity === 'betrayal') {
 			const link = await interaction.client.discordTogether.createTogetherCode(interaction.member.voice.channelID, 'betrayal');
 			embed.addFields(
 				{ name: 'Betrayal.io', value: `[Click Here](${link})` },
 			);
 		}
 		else if (activity === 'fishington') {
 			const link = await interaction.client.discordTogether.createTogetherCode(interaction.member.voice.channelID, 'fishington');
 			embed.addFields(
 				{ name: 'Fishington.io', value: `[Click Here](${link})` },
 			);
 		}
 		else if (activity === 'chess') {
 			const link = await interaction.client.discordTogether.createTogetherCode(interaction.member.voice.channelID, 'chess');
 			embed.addFields(
 				{ name: 'Chess in the Park', value: `[Click Here](${link})` },
 			);
 		}
 		await interaction.reply({ embeds: [embed] });
 	},
};

