var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  trimBlocksFromSchema: () => trimBlocksFromSchema,
  trimNewLine: () => trimNewLine
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function trimNewLine(str) {
  if (str === "") {
    return str;
  }
  let newStr = str;
  if (/\r?\n|\r/.exec(newStr[0])) {
    newStr = newStr.slice(1);
  }
  if (newStr.length > 0 && /\r?\n|\r/.exec(newStr[newStr.length - 1])) {
    newStr = newStr.slice(0, newStr.length - 1);
  }
  return newStr;
}
__name(trimNewLine, "trimNewLine");
__name2(trimNewLine, "trimNewLine");
function trimBlocksFromSchema(str, blocks = ["model", "enum", "datasource", "generator"]) {
  const lines = str.split("\n");
  if (lines.length <= 2) {
    return str;
  }
  const modelPositions = [];
  let blockOpen = false;
  let currentStart = -1;
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (blocks.some((b) => line.startsWith(b)) && line.endsWith("{")) {
      blockOpen = true;
      currentStart = index;
    }
    if (trimmed.endsWith("}") && currentStart > -1 && blockOpen) {
      modelPositions.push({
        start: currentStart,
        end: index
      });
      blockOpen = false;
      currentStart = -1;
    }
  });
  if (modelPositions.length === 0) {
    return str;
  }
  return trimNewLine(modelPositions.reduceRight((acc, position) => {
    acc.splice(position.start, position.end - position.start + 1);
    return acc;
  }, lines).join("\n"));
}
__name(trimBlocksFromSchema, "trimBlocksFromSchema");
__name2(trimBlocksFromSchema, "trimBlocksFromSchema");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  trimBlocksFromSchema,
  trimNewLine
});
