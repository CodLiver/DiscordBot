var Discord = require("discord.js");
var fs = require('fs');
var bot= new Discord.Client();

var Astore=[];
var i=0;

//ready

bot.on("ready", function() {
		console.log("Bot Online and Ready! The bot is online on " + bot.servers.length  + " servers which are " + bot.servers + "." + '\n' + '\n' + "Admin Commands:" + '\n' + "/serverlist");

	});

bot.on("ready", () => {
 bot.setPlayingGame("Development Objects");
})

bot.on("message", function(message) {

	var user = message.mentions[0];
	if(user == null){
	user = message.sender;
	}

	var d = new Date();
	var Operson={name:user.name, id:user.id, discriminator:user.discriminator, avatar:user.avatarURL};
	var Odate={hour:d.getHours(), min:d.getMinutes(), sec:d.getSeconds(), day:d.getDate(), month:d.getMonth(), year:d.getYear()};

	var both=[];
	both.push(Operson,Odate);
	Astore.push(both);

	//var toBeWritten=""+Astore[i][0].name+"="+Astore[i][1].timeDay;

	console.log(message.content);

	fs.appendFile("C:/filepathHERE/id.txt",""+Astore[i][0].id+"\r\n", function(err) {//writeFile
			if(err) {
					return console.log(err);
			}
	});

	fs.appendFile("C:/filepathHERE/username.txt",""+Astore[i][0].name+"\r\n", function(err) {//writeFile
			if(err) {
					return console.log(err);
			}
	});

	fs.appendFile("C:/filepathHERE/timeH.txt",""+Astore[i][1].hour+"\r\n", function(err) {//writeFile
			if(err) {
					return console.log(err);
			}
	});

	fs.appendFile("C:/filepathHERE/timeM.txt",""+Astore[i][1].min+"\r\n", function(err) {//writeFile
			if(err) {
					return console.log(err);
			}
			console.log("The file was saved!");
			i=i+1
	});

})
bot.login("TOKEN");


