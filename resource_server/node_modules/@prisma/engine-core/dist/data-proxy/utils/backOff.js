var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  backOff: () => backOff
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const BACKOFF_INTERVAL = 50;
function backOff(n) {
  const baseDelay = Math.pow(2, n) * BACKOFF_INTERVAL;
  const jitter = Math.ceil(Math.random() * baseDelay) - Math.ceil(baseDelay / 2);
  const total = baseDelay + jitter;
  return new Promise((done) => setTimeout(() => done(total), total));
}
__name(backOff, "backOff");
__name2(backOff, "backOff");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  backOff
});
