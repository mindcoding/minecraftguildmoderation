const Discord = require('discord.js');


const hook = new Discord.WebhookClient('*****', '*****');

var mineflayer = require('mineflayer');

var bot = mineflayer.createBot({
  host: "play.hypixel.net", 
  port: 25565,       
  username: "*****",
  password: "*****",  
});

bot.on('chat', function(username, message) {

	hook.send(message, {username: username});
});
