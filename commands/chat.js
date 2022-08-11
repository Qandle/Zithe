const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chat')
		.setDescription('คุยเล่น')
		.addStringOption((option) =>
			option.setName('word')
				.setDescription('Change word')
				.setRequired(true),
		),
	async execute(interaction) {
		const output = 'พิขิมยังไม่ได้เขียนบทให้';
		const string = interaction.options.getString('word');
		const wordSet = {
			'สวัสดี' : 'ดีจ้า',
			'เรื่องคำศัพท์ภาษาอังกฤษพอได้มั้ย' : 'พอได้ ๆ',
			'อย่างสีเหลือง' : 'เยลโล่ !',
			'มะม่วง' : 'แมงโก้ !',
			'รถกระบะ' : 'วีโก้ !',
			'ไฟแชค' : 'ซิปโป้ !',
			'เตา' : 'อั้งโล่ !',
			'มีด' : 'อีโต้ !',
			'ชุดชั้นใน' : 'วาโก้ ! (ได้เหรอ)',
			'งอนอะ' : 'งอนหรอ ไม่ง้อหรอก',
			'หิวข้าว' : 'ไปกินดิ รอไร',
		};
		await interaction.reply(wordSet[string] ? wordSet[string] : output);
	},
};
