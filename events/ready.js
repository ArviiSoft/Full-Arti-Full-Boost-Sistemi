const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[AKTİF] ${client.user.username}`);

  client.user.setStatus("PLAYING");
  client.user.setActivity("Made By 💖 arviis.", {
    type: "PLAYING"
  });
};