var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
  forbiddenTransactionsWithProxyFlagMessage: () => forbiddenTransactionsWithProxyFlagMessage
});
var import_chalk = __toModule(require("chalk"));
var import_highlight = __toModule(require("../../../highlight/highlight"));
var import_link = __toModule(require("../../../utils/link"));
const forbiddenTransactionsWithProxyFlagMessage = `
The ${import_chalk.default.green("dataProxy")} and ${import_chalk.default.green("interactiveTransactions")} Preview Features can not be enabled at the same time.
Remove ${import_chalk.default.red("interactiveTransactions")} from previewFeatures, for example:

${import_chalk.default.bold((0, import_highlight.highlightDatamodel)(`generator client {
    provider = "prisma-client-js"
    previewFeatures = ["dataProxy"]
}`))}

More information in our documentation:
${(0, import_link.link)("https://pris.ly/d/data-proxy")}
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  forbiddenTransactionsWithProxyFlagMessage
});
