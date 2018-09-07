const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
     member.sendMessage('```md\n# Hoş geldin ' + username + ' ! \n# Buraya Yakın arkadaşlarını çağırıp oyunlar oynayıp sohbet edebilirsin!\n# Discord sunucumuza gelmeyi unutma!```\n ** https://discord.gg/phr92uH ** \n\n\n  \n\n ');
};
