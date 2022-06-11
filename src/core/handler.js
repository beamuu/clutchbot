import { check } from "./prefix.js"
import { handleBackups } from "./backups.js";

export async function handler(client, msg) {

  handleBackups(client, msg);

  const splitted = msg.content.split(" ");

  if (!check(splitted[0][0])) return;

  const command = splitted[0].slice(1, splitted[0].length);
  const args = splitted.slice(1, splitted.length);
  try {
    const lib = await import(`../cmd/${command}.js`);
    lib.default(msg, args);
  } catch (error) {
    console.log(error)
  }
}
