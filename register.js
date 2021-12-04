require("dotenv").config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const commands = [
 {
     "name": "kanal",
     "description": "Yükseltme düşme mesajlarının atılacağı kanalı belirler",
     "options": [
       {
         "type": 7,
         "name": "kanal",
         "description": "Yükseltme düşme mesajlarının atılacağı kanal",
         "required": true
       }
     ]
   }
];
if (!process.argv[2]) {
    if (!process.env.DEV_GUILD_ID) {
        console.log("Komutlar Global Olarlak Ayırlanıcak Etkisini Göstermesi 1 Saati bulabilir")
        const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
        rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
         .then(() => console.log('Başarıyla Slash (/) Komutları Global Olarak Oluşturuldu.'))
         .catch(console.error);
     }
     else {
         console.log("Komutlar Sunucu Bazlı Olarlak Ayırlanıcak Etkisini Göstermesi 1-2 Dakika Sürebilir")
         const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
         rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.DEV_GUILD_ID), { body: commands })
          .then(() => console.log('Başarıyla Slash (/) Komutları Sunucu Bazlı Olarak Oluşturuldu.'))
          .catch(console.error);
     }
}
else if (process.argv[2] == "sil") {
    console.log("Slash (/) Komutları Silinecek")
    if (!process.env.DEV_GUILD_ID) {
        console.log("Komutlar Global Olarlak Silinecek Etkisini Göstermesi 1 Saati bulabilir")
        const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
        rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
         .then(() => console.log('Başarıyla Slash (/) Komutları Global Olarak Silindi.'))
         .catch(console.error);
     }
     else {
         console.log("Komutlar Sunucu Bazlı Olarlak Silinecek Etkisini Göstermesi 1-2 Dakika Sürebilir")
         const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
         rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.DEV_GUILD_ID), { body: [] })
          .then(() => console.log('Başarıyla Slash (/) Komutları Sunucu Bazlı Olarak Silindi.'))
          .catch(console.error);
     }
}