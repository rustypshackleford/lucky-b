import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

const token = "MTA3NjAxODYxNjM1ODY2NjMyMA.GhHNax.Rf3bAsCzPxAr4sGvW-Zy_oWuMeVGksgnfeJtxg";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);

console.log(client);