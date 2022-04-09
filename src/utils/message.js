function shortenMsg(msg, len) {
  if (msg.length <= len) return msg
  return msg.slice(0,len-3)+"..."
}
module.exports = {
  shortenMsg
}