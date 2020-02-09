const Discord = require('discord.js');
const client = new Discord.Client();

var meme = require('./damp');


client.on('ready', () => {
    console.log('I am ready!');
  });

client.on('message', message => { 
    if(message.content === "!анекдот") {
        message.channel.send(meme.aneki());
    }
});

client.on('message', message => { 
    if(message.content === "!слава") {
        message.channel.send('Украине');
    }
});  

client.on('message', message => { 
    if(message.content === "!info") {
        message.channel.send('Бот знает команды:\n - !слава\n - !анекдот\n - !паста\n - !iq\n - !мое фото ');
    }
});

client.on('message', message => {
    if(message.content === "!паста") {
        message.channel.send(meme.pasti()); 
    }
});

client.on('message', (msg) => {
    if(msg.content === "!iq") {
        msg.channel.send(`IQ  ${msg.author} ` + meme.iq()); 
    }
});

client.on('message', (msg) => {
    if(msg.content === "!мое фото") {
        msg.channel.send(meme.shs()); 
    }
});

client.on('message', message => { 
    if(message.content === "!роджер") {
        message.channel.send('а кто такой роджер');
    }
});  
 client.on('message', message => { 
    if(message.content === "!Марк") {
        message.channel.send(meme.zalupa());
    }
});

client.login(process.env.BOT_TOKEN);







