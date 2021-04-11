const Discord = require('discord.js');
const global = require('../../global.json');
module.exports = {
    name: 'foo',
	execute(message, args) {
		message.channel.send(`bar`);
	},
};