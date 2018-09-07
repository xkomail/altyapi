const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Sunucumuza gelirmisin :blush:  https://discord.gg/phr92uH');
};
