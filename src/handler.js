const check = require("./prefix")
const handleBackups = require('./backups')
function handler(client, msg) {

  handleBackups(client, msg)

  const splitted = msg.content.split(" ");

  if (!check(splitted[0][0])) return;

  const command = splitted[0].slice(1, splitted[0].length);
  const args = splitted.slice(1, splitted.length);
  try {
    const lib = require(`./commands/${command}`);
    lib(msg, args)
  } catch (error) {

  }

}



module.exports = handler;