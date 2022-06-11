import dotenv from "dotenv"
dotenv.config()

import { Client, Intents } from "discord.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

import { handler } from "./core/handler.js"

// express api server
import express from "express"
import cors from "cors"
import apiRouter from "./api/index.js"
const app = express()



// Initialize discord.js client
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return false;

  console.log(`Message from ${msg.author.username}: ${msg.content}`);

  handler(client, msg);
});

client.login(process.env.DISCORD_TOKEN);



// express init
const PORT = process.env.PORT || 8080
app.use(cors())
app.use(express.json())
app.use("/api", apiRouter)

app.listen(PORT, () => console.log(`API service is running on port ${PORT}`))