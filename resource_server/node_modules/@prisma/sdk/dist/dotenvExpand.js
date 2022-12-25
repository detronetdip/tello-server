var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  dotenvExpand: () => dotenvExpand
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function dotenvExpand(config) {
  const environment = config.ignoreProcessEnv ? {} : process.env;
  const interpolate = /* @__PURE__ */ __name2((envValue) => {
    const matches = envValue.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g) || [];
    return matches.reduce(function(newEnv, match) {
      const parts = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(match);
      if (!parts) {
        return newEnv;
      }
      const prefix = parts[1];
      let value, replacePart;
      if (prefix === "\\") {
        replacePart = parts[0];
        value = replacePart.replace("\\$", "$");
      } else {
        const key = parts[2];
        replacePart = parts[0].substring(prefix.length);
        value = Object.hasOwnProperty.call(environment, key) ? environment[key] : config.parsed[key] || "";
        value = interpolate(value);
      }
      return newEnv.replace(replacePart, value);
    }, envValue);
  }, "interpolate");
  for (const configKey in config.parsed) {
    const value = Object.hasOwnProperty.call(environment, configKey) ? environment[configKey] : config.parsed[configKey];
    config.parsed[configKey] = interpolate(value);
  }
  for (const processKey in config.parsed) {
    environment[processKey] = config.parsed[processKey];
  }
  return config;
}
__name(dotenvExpand, "dotenvExpand");
__name2(dotenvExpand, "dotenvExpand");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dotenvExpand
});
