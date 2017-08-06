var Discord = require("discord.js");
var YouTube = require('youtube-node');
var bot= new Discord.Client();
var youTube = new YouTube();
youTube.setKey('YT_TOKEN');


bot.on("ready", () => {
 bot.setPlayingGame("BOT IS UNAVAILABLE");
})
bot.on("message", function(message){

	var Vinput = message.content.toUpperCase();

	if (Vinput.indexOf("/YOU ") === 0) {

	var VsearchQuery = Vinput.substring(5);

	youTube.search(VsearchQuery, 1, function(error, result) {

	if (error) {
		console.log(error);
	}
	else{

    var v=	[JSON.stringify(result)];
    bot.sendMessage(message ,"https://www.youtube.com/watch?v="+JSON.parse(v[0]).items[0].id.videoId);


    //to dev

    // var v=	[JSON.stringify(result,['videoId'])];
    // console.log(JSON.parse(v));

    //devved

	// var v=	[JSON.stringify(result, ['etag'] )];
	// console.log(JSON.parse(v[0]).etag);

	}
	})
	}
})

bot.login("TOKEN");
