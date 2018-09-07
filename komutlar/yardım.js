const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pages = ['[❯ Tüm Komutlar]\n\n[.yardım](https://discord.gg/MeRfXzE)  •  Botun tüm komutlarını gösterir.\n[.istatistik](https://discord.gg/MeRfXzE)  • Botun istatistiklerini gönderir.\n[.avatar](https://discord.gg/MeRfXzE) •  Kendi avatarınızı veya etiketlediğiniz kişinin avatarını verir.\n[.sunucubilgi](https://discord.gg/MeRfXzE)  •  Sunucu hakkında bilgi verir.\n[.temizle](https://discord.gg/MeRfXzE) • Belirttiğiniz kadar mesajı siler.\n[.bilgi](https://discord.gg/PJSuUVP) • Bot hakkında bilgiler verir.'];
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,bot.user.avatarURL)
  .setFooter(`© 2018 TEST BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,bot.user.avatarURL)
message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 TEST BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 TEST BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })

    })
  })
}

module.exports.help = {
  name: "yardım"
}