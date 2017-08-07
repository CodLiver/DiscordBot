var Discord = require("discord.js");
var fs = require('fs');
var bot= new Discord.Client();

const now = require('performance-now');

var msgArray=[];

//ready

bot.on("ready", function() {
		console.log("Bot Online and Ready! The bot is online on " + bot.servers.length  + " servers which are " + bot.servers + "." + '\n' + '\n' + "Admin Commands:" + '\n' + "/serverlist");

	});

bot.on("ready", () => {
 bot.setPlayingGame("Development Deletion");
})

bot.on("message", function(message) {

	var user = message.mentions[0];
	if(user == null){
	user = message.sender;
	}

 var Vinput=message.content.toUpperCase();
	//console.log(Vinput);

 var Vamount = Vinput.replace(/[^0-9]/g, '');

	//msg adding and for bulk del
	msgArray.push(message);


	//console.log(Vamount);

	if (message.content.startsWith("/ping")) {
	    var startTime = now();
	    message.channel.sendMessage("Pong!")
	        .then(message => {
	            var endTime = now();
	            return message.edit(`Pong! ${(endTime - startTime).toFixed(3)} ms.`);
	        }).catch(console.error);
	}

 if (Vinput.startsWith("/DELETE") && user.id=="Your ID"){/* && user == null && Vamount>0){*/
	
	 var messagecount = parseInt(Vamount);

	 for (x=0;x<messagecount;x++){

		 //bot.deleteMessage(message);
		 var toDel=msgArray.length-x-1;
		 bot.deleteMessage(msgArray[toDel]);

		  console.log(msgArray[toDel]);
	 }
	 msgArray.splice(msgArray.length-x, msgArray.length);
	// bot.deleteMessage((message), Vamount);
	 //bot.sendMessage(message,"messages were deleted!");


 }


})
bot.login("TOKEN");
