const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.sahip);
  
  message.channel.sendMessage(`<a:d_mavionay:760779972356603914> **Başarılı!** Bot **Yeniden Başlatılıdı.**`);
  message.delete(60).then(msg => {
    console.log(`Bot Yeniden Başlatıdı!`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yenidenbaşlat"]
}; 

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};
