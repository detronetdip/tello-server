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
  getGeneratorSuccessMessage: () => getGeneratorSuccessMessage
});
var import_chalk = __toModule(require("chalk"));
var import_path = __toModule(require("path"));
var import_getClientEngineType = __toModule(require("../client/getClientEngineType"));
var import_formatms = __toModule(require("../utils/formatms"));
var import_parseEnvValue = __toModule(require("../utils/parseEnvValue"));
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function getGeneratorSuccessMessage(generator, time) {
  const name = generator.getPrettyName();
  const version = formatVersion(generator);
  const to = formatOutput(generator);
  return `\u2714 Generated ${import_chalk.default.bold(name)}${version ? ` (${version})` : ""}${to} in ${(0, import_formatms.formatms)(time)}`;
}
__name(getGeneratorSuccessMessage, "getGeneratorSuccessMessage");
__name2(getGeneratorSuccessMessage, "getGeneratorSuccessMessage");
function formatVersion(generator) {
  var _a;
  const version = (_a = generator.manifest) == null ? void 0 : _a.version;
  if (generator.getProvider() === "prisma-client-js") {
    const engineType = (0, import_getClientEngineType.getClientEngineType)(generator.config);
    return version ? `${version} | ${engineType}` : engineType;
  }
  return version;
}
__name(formatVersion, "formatVersion");
__name2(formatVersion, "formatVersion");
function formatOutput(generator) {
  var _a;
  const output = (_a = generator.options) == null ? void 0 : _a.generator.output;
  return output ? import_chalk.default.dim(` to .${import_path.default.sep}${import_path.default.relative(process.cwd(), (0, import_parseEnvValue.parseEnvValue)(output))}`) : "";
}
__name(formatOutput, "formatOutput");
__name2(formatOutput, "formatOutput");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getGeneratorSuccessMessage
});
