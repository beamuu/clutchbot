function getAvatarUrl(msg) {
  return "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".jpeg"
}
function getGuildAvatar(channel) {
  return channel.guild.iconURL()
}
module.exports = {
  getAvatarUrl,
  getGuildAvatar
}