const Discord = require('discord.js');
const global = require('../../global.json');
module.exports = {
    name: 'pog_base',
	execute(message, args) {
		message.channel.send(`pog`);
	},
};