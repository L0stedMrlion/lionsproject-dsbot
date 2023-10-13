const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

let expectedNumber = 1;
const reactionEmoji = "👍";

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    const content = message.content;

    if (parseInt(content) === expectedNumber) {
        expectedNumber++;
        message.react(reactionEmoji);
    } else {
        message.delete();
    }
});

client.login(config.token);