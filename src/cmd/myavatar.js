import { getAvatarUrl } from "../utils/avatar.js";

export default function myAvartar(msg, args) {
  msg.reply(getAvatarUrl(msg))
}