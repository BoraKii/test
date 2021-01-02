const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  if (message.author.id !== ayarlar.sahip);

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('**Yazmam için herhangi bir şey yazmalısın.**');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz']
};

exports.help = {
  name: 'yaz',
  description: 'Yaz Komutu',
  usage: 'yaz'
};