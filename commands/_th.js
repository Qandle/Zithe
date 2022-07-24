const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('_th')
		.setDescription('TH <-> EN')
		.addStringOption((option) =>
			option.setName('word')
				.setDescription('Change word')
				.setRequired(true),
		),
	async execute(interaction) {
		const th = 'ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ';
		const en = '1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';
		const string = interaction.options.getString('word');
		const output = [];
		for (let i = 0; i < string.length; i++) {
			for (let j = 0; j < en.length; j++) {
				if (string[i] == en[j]) {
					output.push(th[j]);
				}
			}
		}
		await interaction.reply(output);
	},
};