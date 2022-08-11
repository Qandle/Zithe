const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('_en')
		.setDescription('EN <-> TH')
		.addStringOption((option) =>
			option.setName('word')
				.setDescription('Change word')
				.setRequired(true),
		),
	async execute(interaction) {
		let th = 'ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ';
		let en = '1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';
		th = th.split('');
		en = en.split('');
		const string = interaction.options.getString('word');
		const arrOutput = Array.prototype.map.call(string, (e) => {
			return en.indexOf(e) >= 0 ? th[en.indexOf(e)]
				: e == ' ' ? ' ' : '';
		});
		let output = arrOutput.join('');
		output ? output : output = 'Could not change to Thai';
		await interaction.reply(output);
	},
};
