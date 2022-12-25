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
  fixBinaryTargets: () => fixBinaryTargets,
  getGithubIssueUrl: () => getGithubIssueUrl,
  getRandomString: () => getRandomString,
  link: () => link,
  plusX: () => plusX
});
var import_debug = __toModule(require("@prisma/debug"));
var import_chalk = __toModule(require("chalk"));
var import_crypto = __toModule(require("crypto"));
var import_fs = __toModule(require("fs"));
var import_new_github_issue_url = __toModule(require("new-github-issue-url"));
var import_terminal_link = __toModule(require("terminal-link"));
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const debug = (0, import_debug.default)("plusX");
function plusX(file) {
  const s = import_fs.default.statSync(file);
  const newMode = s.mode | 64 | 8 | 1;
  if (s.mode === newMode) {
    debug(`Execution permissions of ${file} are fine`);
    return;
  }
  const base8 = newMode.toString(8).slice(-3);
  debug(`Have to call plusX on ${file}`);
  import_fs.default.chmodSync(file, base8);
}
__name(plusX, "plusX");
__name2(plusX, "plusX");
function transformPlatformToEnvValue(platform) {
  return { fromEnvVar: null, value: platform };
}
__name(transformPlatformToEnvValue, "transformPlatformToEnvValue");
__name2(transformPlatformToEnvValue, "transformPlatformToEnvValue");
function fixBinaryTargets(binaryTargets, platform) {
  binaryTargets = binaryTargets || [];
  if (!binaryTargets.find((object) => object.value === "native")) {
    return [transformPlatformToEnvValue("native"), ...binaryTargets];
  }
  return [...binaryTargets, transformPlatformToEnvValue(platform)];
}
__name(fixBinaryTargets, "fixBinaryTargets");
__name2(fixBinaryTargets, "fixBinaryTargets");
function link(url) {
  return (0, import_terminal_link.default)(url, url, {
    fallback: (url2) => import_chalk.default.underline(url2)
  });
}
__name(link, "link");
__name2(link, "link");
function getGithubIssueUrl({
  title,
  user = "prisma",
  repo = "prisma",
  template = "bug_report.md",
  body
}) {
  return (0, import_new_github_issue_url.default)({
    user,
    repo,
    template,
    title,
    body
  });
}
__name(getGithubIssueUrl, "getGithubIssueUrl");
__name2(getGithubIssueUrl, "getGithubIssueUrl");
function getRandomString() {
  return import_crypto.default.randomBytes(12).toString("hex");
}
__name(getRandomString, "getRandomString");
__name2(getRandomString, "getRandomString");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fixBinaryTargets,
  getGithubIssueUrl,
  getRandomString,
  link,
  plusX
});
