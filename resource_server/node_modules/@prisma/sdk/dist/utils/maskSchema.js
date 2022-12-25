var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  mapScalarValues: () => mapScalarValues,
  maskSchema: () => maskSchema
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function maskSchema(schema) {
  const regex = /url\s*=\s*.+/;
  return schema.split("\n").map((line) => {
    const match = regex.exec(line);
    if (match) {
      return `${line.slice(0, match.index)}url = "***"`;
    }
    return line;
  }).join("\n");
}
__name(maskSchema, "maskSchema");
__name2(maskSchema, "maskSchema");
function mapScalarValues(obj, mapper) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = mapScalarValues(obj[key], mapper);
    } else {
      result[key] = mapper(obj[key]);
    }
  }
  return result;
}
__name(mapScalarValues, "mapScalarValues");
__name2(mapScalarValues, "mapScalarValues");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mapScalarValues,
  maskSchema
});
