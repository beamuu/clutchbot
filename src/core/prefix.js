function check(target) {
  return target === require("./config.json").prefix;
}
module.exports = check;
