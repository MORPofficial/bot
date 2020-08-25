const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQzMzI2NjQ1NjUzMzQwMTgw.XzTC4g.HBVoYrgB8j026flGcj3btlcynsg';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "staff"){
        msg.reply('Hai there please wait raise a ticket and wait for our staff to reach you');
    }
})

bot.login(token);