var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  time: () => time
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
async function time(title, fn) {
  const timeStart = Date.now();
  const result = await fn();
  const timeEnd = Date.now();
  console.log(`${title}:`);
  console.log(timeEnd - timeStart);
  return result;
}
__name(time, "time");
__name2(time, "time");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  time
});
