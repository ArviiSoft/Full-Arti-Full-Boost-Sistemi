const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar =require("../ayarlar.json")

exports.run = async (client, message, args) => {

if(!args[0]) return message.reply(`<:carpi_arviis:1046067681515814912> Lütfen bir mesaj gir. \n\n<:modernsagok_arviis:1093852394317676634> **__Örnek Kullanım__** : \`${ayarlar.prefix}boost-mesaj ayarla <mesaj>\` / \`${ayarlar.prefix}boost-mesaj sıfırla\``)
if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
    return message.reply(`<:carpi_arviis:1046067681515814912> Lütfen bir mesaj gir. \n\n<:modernsagok_arviis:1093852394317676634> **__Örnek Kullanım__** : \`${ayarlar.prefix}boost-mesaj ayarla <mesaj>\` / \`${ayarlar.prefix}boost-mesaj sıfırla\``)
}
  if(args[0] == "ayarla") {
    if(!args[1]) {
      return message.reply('<:carpi_arviis:1046067681515814912> Lütfen bir mesaj gir.')
    } else {
      let msj = args.slice(1).join(' ')
      if(!msj) {
        return message.reply('<:carpi_arviis:1046067681515814912> Lütfen geçerli bir mesaj gir.')
      } else {
       db.set(`boostmesaj_${message.guild.id}`, `${args.slice(1).join(' ')}`)
       message.reply(`<:tik_arviis:1046067679884234863> Boost mesajı başarıyla **(** \`${args.slice(1).join(' ')}\` **)** olarak ayarlandı.`)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostmesaj_${message.guild.id}`)
    message.reply(`<:tik_arviis:1046067679884234863> Boost mesajı başarıyla sıfırlandı.`)
  }
}

};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['boost-mesaj'],
  permlevel: 0
}

exports.help = {
  name: 'boost-mesaj',
  description: 'Boost Kanalına Gönderilecek Mesajı Ayarlarsınız.',
  usage: ''
}