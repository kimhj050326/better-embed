const Discord = require('discord.js')

module.exports = bembed

/**
 * @return {Discord.RichEmbed}
 * @param {string} title Title for embed
 * @param {string} author THe author of embed
 * @param {string} desc Description for embed
 * @param {string[]} names Array of fields' name
 * @param {string[]} fields Array of fields
 * @param {boolean} inline Whether add fields inline or not default is false
 * @param {string} color Color of embed. Default is #000
 */
function bembed(title, author, desc, names, fields, inline=false, color='#000') {
  if(!title) Err('Missing argument: title')
  if(!author) Err('Missing argument: author')
  if(!desc) Err('Missing argument: description')
  if(!names) Err('Missing argument: names')
  if(!fields) Err('Missing argument: fields')

  if(names.length !== fields.length) throwErr('Lack of argument: ' + names.length > fields.length ? 'fields' : 'names')

  const embed = new Discord.RichEmbed()
    .setTitle(title)
    .setAuthor(author)
    .setDescription(desc)
    .setColor(color)

  for (let i in fields) {
    embed.addField(names[i], fields[i], inline)
  }

  return embed
}

function Err(text) {
  console.log(text)
}