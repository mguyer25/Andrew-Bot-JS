const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
	if (msg.content.toLowerCase() === "hey cutie") {
		msg.reply("Can you give me your Amazon Prime 50% discount for GW2?")
	}
})

 /**
  * This is for authenticating and logging the bot in through using 
	* an environment variable, so that no one can see the token needed to login
	* Only I can see the environment variable.
  */
client.login(process.env['token'].TOKEN)
