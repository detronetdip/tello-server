var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  now: () => now,
  renderDate: () => renderDate,
  timestampToDate: () => timestampToDate
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const prefixZero = /* @__PURE__ */ __name2((value) => ("0" + value).slice(-2), "prefixZero");
function now() {
  const now2 = new Date();
  return `${now2.getFullYear()}${prefixZero(now2.getMonth() + 1)}${prefixZero(now2.getDate())}${prefixZero(now2.getHours())}${prefixZero(now2.getMinutes())}${prefixZero(now2.getSeconds())}`;
}
__name(now, "now");
__name2(now, "now");
function timestampToDate(timestamp) {
  if (!timestamp || timestamp.length !== 14) {
    return void 0;
  }
  const year = Number(timestamp.slice(0, 4));
  const month = Number(timestamp.slice(4, 6));
  const date = Number(timestamp.slice(6, 8));
  const hours = Number(timestamp.slice(8, 10));
  const minutes = Number(timestamp.slice(10, 12));
  const seconds = Number(timestamp.slice(12, 14));
  return new Date(year, month - 1, date, hours, minutes, seconds);
}
__name(timestampToDate, "timestampToDate");
__name2(timestampToDate, "timestampToDate");
function renderDate(date) {
  if (date.getDate() !== new Date().getDate()) {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  return date.toLocaleTimeString();
}
__name(renderDate, "renderDate");
__name2(renderDate, "renderDate");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  now,
  renderDate,
  timestampToDate
});
