const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `About`,
      "description": `Writen by Sadan#9264 and GitHub Copilot`,
      "color": 0x952d92,
      "fields": [
        {
          "name": `Credits:`,
          "value": `+ https://discord.js.org\n+ https://github.com/raymondjavaxx/swearjar-node\n+ https://github.com/RemyK888/discord-together`
        }
      ],
      "footer": {
        "text": `\t© 2022 EJ`
      }
    }
  ]
});