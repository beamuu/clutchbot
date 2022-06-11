import config from "../config.json" assert {type: "json"};
export function check(target) {
  return target === config.prefix;
}
