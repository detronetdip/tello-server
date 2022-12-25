var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
class PrismaClientKnownRequestError extends Error {
  constructor(message, code, clientVersion, meta) {
    super(message);
    this.code = code;
    this.clientVersion = clientVersion;
    this.meta = meta;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
}
__name(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");
__name2(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrismaClientKnownRequestError
});
