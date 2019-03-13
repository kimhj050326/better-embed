# better-embed
> Better Discord embed Module

### Author
- khjkr <khj@kkutu.co> (KHJKR#9298)

### License
- MIT

#### Special Thanks
- ZEONPLEX

### Installation
```
npm install better-embed
```

### dependencies
- discord.js@11.4.2

## Examples
```js
const bembed = require('better-embed')
const Discord = require('discord.js')

const client = new Discord.Client()

client.on('message', msg => {
  if (msg.content === 'bembed') {
    const embed = bembed('title', 'author', 'desc', ['names'], ['fildes'], false, '#000')
    msg.channel.send(embed)
  }
})
```
