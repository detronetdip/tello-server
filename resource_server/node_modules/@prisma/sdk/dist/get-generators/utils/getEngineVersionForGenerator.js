var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  getEngineVersionForGenerator: () => getEngineVersionForGenerator
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function getEngineVersionForGenerator(manifest, defaultVersion) {
  let neededVersion = manifest == null ? void 0 : manifest.requiresEngineVersion;
  neededVersion = neededVersion != null ? neededVersion : defaultVersion;
  return neededVersion != null ? neededVersion : "latest";
}
__name(getEngineVersionForGenerator, "getEngineVersionForGenerator");
__name2(getEngineVersionForGenerator, "getEngineVersionForGenerator");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getEngineVersionForGenerator
});
