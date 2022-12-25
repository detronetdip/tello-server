var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  mapPreviewFeatures: () => mapPreviewFeatures
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const featureFlagMap = {
  transactionApi: "transaction",
  aggregateApi: "aggregations"
};
function mapPreviewFeatures(features) {
  if (Array.isArray(features) && features.length > 0) {
    return features.map((f) => {
      var _a;
      return (_a = featureFlagMap[f]) != null ? _a : f;
    });
  }
  return [];
}
__name(mapPreviewFeatures, "mapPreviewFeatures");
__name2(mapPreviewFeatures, "mapPreviewFeatures");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mapPreviewFeatures
});
