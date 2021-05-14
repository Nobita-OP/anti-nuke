const Discord = require("discord.js")
module.exports = {
  name: "whitelisted",
  run: async (client, message, args, db) => {
    let bruh =[]
    let embed = new Discord.MessageEmbed()
    .setTitle("**The list of whitelisted users**")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setFooter(message.guild.name, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    let whitelisted = db.get(`whitelist_${message.guild.id}`)
         if(whitelisted && whitelisted.length) {
              whitelisted.forEach(x => {
              bruh.push(`<@${x.user}>`)
            })
         embed.addField('**Users**', `${bruh.join("\n")}`)
         .setColor(0x000000)
        } else {
          embed.setDescription(":x: | **No whitelisted Users Found**")
          .setColor(0x000000)
        }
        message.channel.send({ embed: embed })
  }
}
