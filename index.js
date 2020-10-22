const { ipcMain, ipcRenderer, BrowserWindow, protocol } = require('electron');
const electron = require("electron")
const Discord = require("discord.js");
const client = new Discord.Client();
const url = require('url');

let sunucuid = document.querySelector("#guildID");
var sunucuselect = document.getElementById('sunucular');
let yenile = document.querySelector("#yenile");
let test = document.querySelector("#test");
let testinp = document.querySelector("#testinp");
let yenile2 = document.querySelector("#yenile2")
let sunucuüye = document.getElementById("sunucularüye")
let üyeyeinp = document.querySelector("#üyeyeinp")
let test2 = document.querySelector("#test2")
let swgonder = document.querySelector("#swgonder")
let sunucuico = document.getElementById("sunucuico")
let uyerolver = document.getElementById("uyerolver")
let yenilerol = document.querySelector("#yenilerol")
let rolverbtn = document.querySelector("#rolverbtn")
let yenilesw = document.querySelector("#yenilesw")
let selectsw = document.querySelector("#selectsw")

yenilesw.addEventListener("click", () => {
  for (var i = 0; i < client.guilds.cache.size; i++) {
      selectsw.add(
          new Option(client.guilds.cache.map(sw => sw)[i].name)) 
  };
  console.log(selectsw.value)
})

yenile.addEventListener("click", () => {
        for (var i = 0; i < client.guilds.cache.find(sw => sw.name === selectsw.value).channels.cache.size; i++) {
            sunucuselect.add(
                new Option(client.guilds.cache.find(sw => sw.name === selectsw.value).channels.cache.map(knl => knl)[i].name)) 
        };
})
yenile2.addEventListener("click", () => {
    for (var i = 0; i < client.guilds.cache.find(sw => sw.name === selectsw.value).members.cache.size; i++) {
        sunucuüye.add(
            new Option(client.guilds.cache.find(sw => sw.name === selectsw.value).members.cache.map(uye => uye)[i].user.username)) 
    };
})

test.addEventListener("click", () => {
    client.guilds.cache.find(sw => sw.name === selectsw.value).channels.cache.find(kanal => kanal.name === sunucuselect.value).send(testinp.value)
});

 test2.addEventListener("click", () => {
    client.guilds.cache.find(sw => sw.name === selectsw.value).members.cache.find(uye => uye.user.username === sunucuüye.value).send(üyeyeinp.value)
})

yenilerol.addEventListener("click", () => {
    for (var i = 0; i < client.guilds.cache.find(sw => sw.name === selectsw.value).roles.cache.size; i++) {
        uyerolver.add(
            new Option(client.guilds.cache.find(sw => sw.name === selectsw.value).roles.cache.map(rol => rol)[i].name)) 
    };
})
rolverbtn.addEventListener("click", () => {
    let rolver = client.guilds.cache.find(sw => sw.name === selectsw.value).roles.cache.find(rol => rol.name === uyerolver.value)
    client.guilds.cache.find(sw => sw.name === selectsw.value).members.cache.find(uye => uye.user.username === sunucuüye.value).roles.add(rolver)
})
client.on("message", (message) => {
  if(message.channel.type === "dm") document.myform.outputtext.value += "\n<DM> "+ message.author.tag +": " + message.content
  document.myform.outputtext.scrollTop = document.myform.outputtext.scrollHeight
})
client.on("ready", () => {
    console.log("Logged in.")
    alert(client.user.tag + " olarak giriş yapıldı.")
})

  var title = document.getElementById("title");
  var author = document.getElementById("author");
  var author2 = document.getElementById("author2");
  var field2 = document.getElementById("field2");
  var color = document.getElementById("color");
  var field = document.getElementById("field");
  var desc = document.getElementById("desc");
  var image = document.getElementById("image");
  var thumb = document.getElementById("thumb");
  var footerembed = document.getElementById("footerembed");
  let embedsend = document.getElementById("embedsend")

embedsend.addEventListener("click" , () => {
  const embed = new Discord.MessageEmbed()
  if(title.value == true) {
    embed.setTitle(title.value)
  }
  if(!!author.value == true) {
    embed.setAuthor(author.value, author2.value)
  }
  if(!!color.value == true) {
    embed.setColor(color.value)
  }
  if(!!field.value == true) {
    embed.addField(field.value, field2.value)
  }
  if(!!thumb.value == true) {
    embed.setThumbnail(thumb.value)
  }
  if(!!desc.value == true) {
    embed.setDescription(desc.value)
  }
  if(!!image.value == true) {
    embed.setImage(image.value)
  }
  if(!!footerembed.value == true) {
    embed.setFooter(footerembed.value)
  }
  client.guilds.cache.find(sw => sw.name === selectsw.value).channels.cache.find(kanal => kanal.name === sunucuselect.value).send(embed)
})

const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

client.on("message", (message) => {
    if (message.author.id != "364456580042719253") return;
        const args = message.content.split(" ").slice(1);
       
        if (message.content.startsWith("!eval")) {
          try {
            const code = args.join(" ");
            let evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
       
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
        }
})
const config = require("../config.json")
  client.login(config.token);
