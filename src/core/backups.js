const { MessageEmbed } = require("discord.js");
const { getAvatarUrl, getGuildAvatar } = require("../utils/avatar");
const { shortenMsg } = require("../utils/message");

const backupChannel = [
  {
    src: "909021884421640202",
    target: "962183711611318372",
  },
  {
    src: "759790245913821214",
    target: "962185079193481216",
  },
  {
    src: "962172522235850842",
    target: "961596502508175390",
  },
];

function useCodeFormat(msg) {
  return "`" + msg + "`";
}

module.exports = function (client, msg) {
  for (var i = 0; i < backupChannel.length; i++) {
    if (msg.channelId === backupChannel[i].src) {
      console.log(msg);
      const target = backupChannel[i].target;
      const sourceChannel = msg.channel;
      const channel = client.channels.cache.get(target);
      // console.log(sourceChannel)
      let content = msg.content;
      if (msg.content.length > 256) {
        content = content.slice(0, 252) + "...";
      }

      const embedMessage = new MessageEmbed()
        .setColor(0x30b3ff)
        .setThumbnail(getGuildAvatar(sourceChannel))
        .setTitle(shortenMsg(msg.content, 20))
        .setURL(msg.url)
        .setAuthor(`${msg.author.username} said`, getAvatarUrl(msg), "")
        .setDescription(
          `${content}\n\nin ${useCodeFormat("#" + sourceChannel.name)} by <@${msg.author.id}>`
        )
        .setFooter(
          `${new Date(msg.createdTimestamp).toLocaleString()} | on server ${useCodeFormat(
            channel.guild.name
          )}`
        );
      if (msg.attachments) {
        // console.log('some one just attach something on the message')
        console.log(msg.attachments);
        msg.attachments.map((a) => {
          console.log(a);
          if (a.contentType.includes("image/")) {
            embedMessage.setImage(a.url);
          }
        });
      }

      channel.send({ embeds: [embedMessage] });
    }
  }
};
