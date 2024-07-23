const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => { 
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix  
let rol = message.mentions.roles.first() 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`## <a:dikkat_arviis:997074866371039322> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

 if(!rol) return message.channel.send(`<:carpi_arviis:1046067681515814912> Lütfen bir rol etiketle. \n\n<:modernsagok_arviis:1093852394317676634> **__Örnek Kullanım__** : \`${ayarlar.prefix}boost-rol @rol \``)



  message.channel.send(`
<:tik_arviis:1046067679884234863> Booster Rolü Aktif Edildi!

<:modernsagok_arviis:1093852394317676634> Booster Rolü **(** ${rol} **)** Olarak Güncellendi! 
`)


  db.set(`boostrol_${message.guild.id}`, rol.id)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-rol']
  };

  exports.help = {
    name: 'boost-rol',
    description: 'Boost Basan Kişiye Otmatik Rol Vermeyi Sağlar.',
    usage: ''
  };