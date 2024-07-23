const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setColor(0x2f3136)
    .setImage("https://media.discordapp.net/attachments/1069639498637525043/1251982521718276137/ArviS1.png?ex=66a15695&is=66a00515&hm=ea0ac949c7cfd9b0b3d0eba83867cca420e9aa81abcb56fc4ea3a3cf900674a3&=&format=webp&quality=lossless&width=1422&height=592")
    .addField(
      `Booster Rol`,
      `\`${prefix}boost-rol @rol\``,
      true
    )

    .addField(
      `Boost Log`,
      `\`${prefix}boost-log <#kanal>\``,
      true
    )

    .addField(
      `Boost Mesajı`,
      `\`${prefix}boost-mesaj <mesaj>\``,
      true
    )

    .addField(
      `Boost Sistemi Kapat`,
      `\`${prefix}boost-sistemi-kapat\` `,
      true
    )

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};