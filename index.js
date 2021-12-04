const db = require("quick.db")
const discord = require("discord.js")
require("dotenv").config()
const client = new discord.Client({allowedMentions:{parse:[]},intents:["GUILDS","GUILD_WEBHOOKS"]})
if (process.env.NODE_ENV !== "production") {
    client
        .on("debug",console.log)
        .on("warn", console.log)
}
client.login(process.env.TOKEN)