const Discord = require('discord.js');
const bot = new Discord.Client();
var nbtypiq = 0;
var isCoolDown = false;
bot.on('ready',function () {
    console.log("la connection est la");
})

bot.on('message',message=>{
    var newMessage =message.content.split(' ');
    if (newMessage[0] == "3615") {
        if(newMessage[1] == 'ping'){
            prevMess =  message.channel.send('pong')
        }
        if (newMessage[1] == 'prev') {
            message.channel.send( bot.user.lastMessage.content);
        }
        if (newMessage[1] == 'help') {
            message.channel.send("typ = incrementer le nombre de typiquement de 1;typCombo [entier] = incrementer le nombre de typiquement d'un certains nombre");
        }
    }else{
        if (message.content == "typ" && isCoolDown==false ) {
            nbtypiq++;
            isCoolDown=true;
            message.channel.send("Il y a "+nbtypiq+" 'typiquement' depuis le début de ce cours");
            setTimeout(function() {
                isCoolDown=false;
            },3000);
        }
        if (newMessage[0] == "typCombo") {
            if(!isNaN(newMessage[1])){
                if (parseInt(newMessage[1]) <=10 && parseInt(newMessage[1])>0) {
                nbtypiq+=parseInt(newMessage[1]);
                message.channel.send("Il y a "+nbtypiq+" 'typiquement' depuis le début de ce cours");
                }else{
                    message.channel.send("c'est trop beau pour etre vrai");
                }
            }
        }
        if (newMessage[0] == "setTypiquement") {
            if (message.author.username == "alexis dit jeff") {
                message.channel.send("oui mon maitre ?");
                if (!isNaN(newMessage[1])) {
                nbtypiq = newMessage[1];
                }else{
                    message.channel.send("you are an illusion");
                }
            }else{
                message.channel.send("***TAISEZ VOUS INFIDELE !!!*** ~~typiquement~~");
            }
        }

    }
})
//
var fs = require("fs");
var text = fs.readFileSync("./token.txt","UTF-8");
bot.login(text);