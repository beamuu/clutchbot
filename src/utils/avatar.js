export function getAvatarUrl(msg) {
  return "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".jpeg";
}
export function getGuildAvatar(channel) {
  return channel.guild.iconURL();
}