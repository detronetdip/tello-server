var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  flatMap: () => flatMap
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function flatten(array) {
  return Array.prototype.concat.apply([], array);
}
__name(flatten, "flatten");
__name2(flatten, "flatten");
function flatMap(array, callbackFn, thisArg) {
  return flatten(array.map(callbackFn, thisArg));
}
__name(flatMap, "flatMap");
__name2(flatMap, "flatMap");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  flatMap
});
