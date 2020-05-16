const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// inicio:
const Discord = require('discord.js');
const client = new Discord.Client()
const mysql = require('mysql');
const prefix = ">";
const ownerID = "567694683300691989";
const ownerBot = "329731644099657729";
const CrabbyGay = "315925208693342209";
const BuyerID = '665255205092458516';
const ServerID = '607050158336638976';

  //if(message.author.id !== ownerID) return;
client.login(process.env.TOKEN);

var db = mysql.createConnection({
    port: 3306,
    host: "remotemysql.com",
    database: "nuns7yEFuk",
    user: "nuns7yEFuk",
    password: "jtHcVqWlel"
});

db.connect(err => {
    if(err) throw err;
    console.log("Conectado com sucesso no DataBase");
    
});

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity('By: SuperOuro#6366', { type: 'PLAYING' });
})
client.on("message", async message => {
    
    const args = message.content.split(" ").slice(1);
let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
    
    if (command === `redeem`) {
    const sayMessage = args[0]
   
    db.query(`SELECT * FROM Users WHERE WLKey ='${sayMessage}'`, function(error, results, fields, data)
     {
        console.log(results[0]);
        
        const KeyInvalida1Mensagem = new Discord.RichEmbed() .setColor('#F93A2F') .setTitle('Invalid Key') .setDescription('this key is not invalid, check if you didnt write anything wrong') .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
        if (results.length < 1)  return  message.channel.send(KeyInvalida1Mensagem);

        const WLKey = results[0].WLKey;
        
        if(WLKey == sayMessage){
            const KeyValidaMensagem = new Discord.RichEmbed()
            .setColor('#00D166')
            .setTitle('Valid Key')
            .setDescription('thanks for buying, now you have the role: RumbleQuest - Buyer')
            .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
            client.guilds.get(ServerID).members.get(message.author.id).addRole(BuyerID)
            message.channel.send(KeyValidaMensagem);
        }else{
            const KeyIncorreta2Mensagem = new Discord.RichEmbed()
            .setColor('#F93A2F')
            .setTitle('Invalid Key')
            .setDescription('This key is wrong, check if you typed it right')
            .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
            message.channel.send(KeyIncorreta2Mensagem);
        }
            
    
    
        
        
    });
    

}else   
if(command === `addkey`){
    const AddKeySemPermissao = new Discord.RichEmbed()
   .setColor('#F93A2F')
   .setTitle('Not Enough Permission')
   .setDescription('You do not have permission')
   .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png'); 
   if(message.author.id == ownerID)
   {
    const args = message.content.split(" ").slice(1);
    const sayMessage = args[0]
        
    sql = `INSERT INTO Users (WLKey) VALUES ('${sayMessage}')`
    db.query(sql, console.log);
    const AddKeyComPermissao = new Discord.RichEmbed()
    .setColor('#00D166')
    .setTitle('Key Added')
    .setDescription('Key successfully added to the database')
    .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
    message.channel.send(AddKeyComPermissao);
   }
    else
    {
         if(message.author.id == ownerBot)
         {
    const args = message.content.split(" ").slice(1);
    const sayMessage = args[0]
        
    sql = `INSERT INTO Users (WLKey) VALUES ('${sayMessage}')`
    db.query(sql, console.log);
    const AddKeyComPermissao = new Discord.RichEmbed()
    .setColor('#00D166')
    .setTitle('Key Added')
    .setDescription('Key successfully added to the database')
    .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
    message.channel.send(AddKeyComPermissao);
         }
          else
         {
           if(message.author.id == 441)
           {
    const args = message.content.split(" ").slice(1);
    const sayMessage = args[0]
        
    sql = `INSERT INTO Users (WLKey) VALUES ('${sayMessage}')`
    db.query(sql, console.log);
    const AddKeyComPermissao = new Discord.RichEmbed()
    .setColor('#00D166')
    .setTitle('Key Added')
    .setDescription('Key successfully added to the database')
    .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
    message.channel.send(AddKeyComPermissao);
           }
           else
           {
             message.channel.send(AddKeySemPermissao);
           }
         }

    }
   
    


}else if(command ===`removekey`){
    const RemoveKeySemPermissao = new Discord.RichEmbed()
    .setColor('#F93A2F')
    .setTitle('Not Enough Permission')
    .setDescription('You do not have permission')
    .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png'); 
    if(message.author.id == ownerID)
    {
    const args = message.content.split(" ").slice(1);
    const sayMessage = args[0]
    sql1 = `DELETE FROM Users WHERE Users.WLKey = '${sayMessage}'`
    db.query(sql1, console.log);
    const RemoveKeyComPermissao = new Discord.RichEmbed()
    .setColor('#00D166')
    .setTitle('Key Removed')
    .setDescription('Key successfully removed from the database')
    .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
    message.channel.send(RemoveKeyComPermissao);
    }
  else
    {
      if(message.author.id == ownerBot)
      {
    const args = message.content.split(" ").slice(1);
    const sayMessage = args[0]
    sql1 = `DELETE FROM Users WHERE Users.WLKey = '${sayMessage}'`
    db.query(sql1, console.log);
    const RemoveKeyComPermissao = new Discord.RichEmbed()
    .setColor('#00D166')
    .setTitle('Key Removed')
    .setDescription('Key successfully removed from the database')
    .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
    message.channel.send(RemoveKeyComPermissao);
      }
      else
      {
        if(message.author.id == 441)
        {
    const args = message.content.split(" ").slice(1);
    const sayMessage = args[0]
    sql1 = `DELETE FROM Users WHERE Users.WLKey = '${sayMessage}'`
    db.query(sql1, console.log);
    const RemoveKeyComPermissao = new Discord.RichEmbed()
    .setColor('#00D166')
    .setTitle('Key Removed')
    .setDescription('Key successfully removed from the database')
    .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
    message.channel.send(RemoveKeyComPermissao);
        }else
        {
            message.channel.send(RemoveKeySemPermissao);
        }
      }
    }
    

}else
if(command ==`updateip`)
{
const guild = client.guilds.get(ServerID);

const member = message.member || guild.members.get(message.author.id);
if (!member) return; // Check if the member isn't in the guild at all.
    if(member.roles.some(r=>["Admin", "#deleted-role"].includes(r.name)) )
    {
        const args = message.content.split(" ").slice(1);
        const sayMessage = args[0]
        let UpdateIP = args.slice(1).join(' ');
        
        sql1 = `UPDATE Users SET IP='${UpdateIP}' WHERE WLKey='${sayMessage}';`
        db.query(sql1, console.log);
        const UpdateIpComPermissao = new Discord.RichEmbed()
        .setColor('#00D166')
        .setTitle('Ip Updated')
        .setDescription('IP successfully updated')
        .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png'); 
        message.channel.send(UpdateIpComPermissao);
    }
    else
    {
        const UpdateIpSemPermissao = new Discord.RichEmbed()
        .setColor('#F93A2F')
        .setTitle('Not Enough Permission')
        .setDescription('You do not have permission')
        .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png'); 
        message.channel.send(UpdateIpSemPermissao);
    }
}

  if(command ==`check`)
  {
          const sayMessage = args[0] 
          db.query(`SELECT * FROM Users WHERE WLKey ='${sayMessage}'`, function(error, results, fields, data)
          {
        console.log(results[0]);
        
        const KeyInvalida1Mensagem = new Discord.RichEmbed() .setColor('#F93A2F') .setTitle('Invalid Key') .setDescription('Tthis key is Invalid') .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
        if (results.length < 1)  return  message.channel.send(KeyInvalida1Mensagem);

        const WLKey = results[0].WLKey;
        
        if(WLKey == sayMessage){
            const KeyValidaMensagem = new Discord.RichEmbed()
            .setColor('#00D166')
            .setTitle('Valid Key')
            .setDescription('This key is valid')
            .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
            message.channel.send(KeyValidaMensagem);
        }else{
            const KeyIncorreta2Mensagem = new Discord.RichEmbed()
            .setColor('#F93A2F')
            .setTitle('Invalid Key')
            .setDescription('Tthis key is Invalid')
            .setFooter('Whitelist Bot', 'https://i.imgur.com/09agfMm.png');
            message.channel.send(KeyIncorreta2Mensagem);
        }
          })
    }
});

        
    
    
