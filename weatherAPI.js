var Discord = require("discord.js");
var fs = require('fs');
var bot= new Discord.Client();
// var encoder = require('turkish-char-encoding');

const now = require('performance-now');
// var iconv = require('iconv-lite');

//ready

bot.on("ready", function() {
		console.log("Bot Online and Ready! The bot is online on " + bot.servers.length  + " servers which are " + bot.servers + "." + '\n' + '\n' + "Admin Commands:" + '\n' + "/serverlist");

	});

bot.on("ready", () => {
	 bot.setPlayingGame("Development weather");
	})

bot.on("message", function(message) {

	//console.log(Vamount);
	var Vin=message.content;


	if (message.content.startsWith("/ping")) {
	    var startTime = now();
	    message.channel.sendMessage("Pong!")
	        .then(message => {
	            var endTime = now();
	            return message.edit(`Pong! ${(endTime - startTime).toFixed(3)} ms.`);
	        }).catch(console.error);
	}

  if (Vin.indexOf("/weather ") === 0) {

  	var Vquery = Vin.substring(9);
    //console.log(Vquery);

var url="http://api.openweathermap.org/data/2.5/weather?q="+Vquery+"&units=metric&appid=69a428c22191f083669211170fec429c";

// bot.sendMessage(message,"http://api.openweathermap.org/data/2.5/weather?q="+Vquery+"&units=metric&appid=69a428c22191f083669211170fec429c");

var request = require("request");
request({
    url: url,
    json: true,
		// encoding:null
}, function (error, response, body)
 {
	//  body=iconv.decode(body, 'iso-8859-1');
// var inc=0;
    if (!error && response.statusCode === 200)
     {
			// for(var key in body.namazvakitleri.vakitler[0]) {
			// 	var value=body.namazvakitleri.vakitler[0][key];
			// 	var keyMain=Object.keys(body.namazvakitleri.vakitler[0])[inc];
			// 	inc++;
			// 	var combine=keyMain+":"+value;


     var result="```name: "+body.name+","+body.sys.country + '\n' + `weather: `+body.weather[0].main+"    description: "+body.weather[0].description + '\n' + "temperature: "+body.main.temp+"    humidity: "+body.main.humidity+ '\n' +"Min/Max temp: "+body.main.temp_min+"/"+body.main.temp_max + '\n' + "Wind Speed: "+body.wind.speed+"```";

      //  console.log(body);
			bot.sendMessage(message,result);


//       body.weather[0].main
// body.weather[0].description
// body.main.temp
// body.main.pressure
// body.main.humidity
// body.main.temp_min
// body.main.temp_max
// body.wind.speed
// body.name

    //  console.log(body);

      //API: 69a428c22191f083669211170fec429c
    }

 })
}

 })

bot.login("denek.can90@gmail.com","sunal1997");
