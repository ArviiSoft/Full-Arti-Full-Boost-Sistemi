const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`## <a:dikkat_arviis:997074866371039322> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 const rol = db.fetch(`boostrol_${message.guild.id}`)  
 if(!rol) return message.reply(`<:carpi_arviis:1046067681515814912> Bu özellik zaten kapalı.`)


  message.channel.send(`<:tik_arviis:1046067679884234863> Boost sistemi başarıyla kapatıldı.`)


  db.delete(`boostrol_${message.guild.id}`)  
  db.delete(`boostlog_${message.guild.id}`) 
  db.delete(`boostmesaj_${message.guild.id}`)  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-sistemi-kapat']
  };

  exports.help = {
    name: 'boost-sistemi-kapat',
    description: 'Boost Sistemini Kapatmanızı Sağlar.',
    usage: ''
  };