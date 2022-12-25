var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  error: () => error,
  info: () => info,
  log: () => log,
  query: () => query,
  should: () => should,
  tags: () => tags,
  warn: () => warn
});
var import_chalk = __toModule(require("chalk"));
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const tags = {
  error: import_chalk.default.red("prisma:error"),
  warn: import_chalk.default.yellow("prisma:warn"),
  info: import_chalk.default.cyan("prisma:info"),
  query: import_chalk.default.blue("prisma:query")
};
const should = {
  warn: !process.env.PRISMA_DISABLE_WARNINGS
};
function log(...data) {
  console.log(...data);
}
__name(log, "log");
__name2(log, "log");
function warn(message, ...optionalParams) {
  if (should.warn) {
    console.warn(`${tags.warn} ${message}`, ...optionalParams);
  }
}
__name(warn, "warn");
__name2(warn, "warn");
function info(message, ...optionalParams) {
  console.info(`${tags.info} ${message}`, ...optionalParams);
}
__name(info, "info");
__name2(info, "info");
function error(message, ...optionalParams) {
  console.error(`${tags.error} ${message}`, ...optionalParams);
}
__name(error, "error");
__name2(error, "error");
function query(message, ...optionalParams) {
  console.log(`${tags.query} ${message}`, ...optionalParams);
}
__name(query, "query");
__name2(query, "query");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  error,
  info,
  log,
  query,
  should,
  tags,
  warn
});
