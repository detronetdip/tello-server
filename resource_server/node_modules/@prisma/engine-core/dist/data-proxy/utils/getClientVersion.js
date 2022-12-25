var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  getClientVersion: () => getClientVersion
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function getClientVersion(config) {
  var _a, _b;
  const [version, suffix] = (_b = (_a = config.clientVersion) == null ? void 0 : _a.split("-")) != null ? _b : [];
  if (!suffix && /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/.test(version)) {
    return version;
  }
  return "3.4.1";
}
__name(getClientVersion, "getClientVersion");
__name2(getClientVersion, "getClientVersion");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getClientVersion
});
