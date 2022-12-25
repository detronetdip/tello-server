var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  ClientEngineType: () => ClientEngineType,
  DEFAULT_CLIENT_ENGINE_TYPE: () => DEFAULT_CLIENT_ENGINE_TYPE,
  getClientEngineType: () => getClientEngineType
});
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var ClientEngineType;
(function(ClientEngineType2) {
  ClientEngineType2["Library"] = "library";
  ClientEngineType2["Binary"] = "binary";
  ClientEngineType2["DataProxy"] = "dataproxy";
})(ClientEngineType || (ClientEngineType = {}));
const DEFAULT_CLIENT_ENGINE_TYPE = ClientEngineType.Library;
function getClientEngineType(generatorConfig) {
  const engineTypeFromEnvVar = getEngineTypeFromEnvVar();
  if (engineTypeFromEnvVar)
    return engineTypeFromEnvVar;
  if ((generatorConfig == null ? void 0 : generatorConfig.config.engineType) === ClientEngineType.Library) {
    return ClientEngineType.Library;
  } else if ((generatorConfig == null ? void 0 : generatorConfig.config.engineType) === ClientEngineType.Binary) {
    return ClientEngineType.Binary;
  } else if ((generatorConfig == null ? void 0 : generatorConfig.config.engineType) === ClientEngineType.DataProxy) {
    return ClientEngineType.DataProxy;
  } else {
    return DEFAULT_CLIENT_ENGINE_TYPE;
  }
}
__name(getClientEngineType, "getClientEngineType");
__name2(getClientEngineType, "getClientEngineType");
function getEngineTypeFromEnvVar() {
  const engineType = process.env.PRISMA_CLIENT_ENGINE_TYPE;
  if (engineType === ClientEngineType.Library) {
    return ClientEngineType.Library;
  } else if (engineType === ClientEngineType.Binary) {
    return ClientEngineType.Binary;
  } else if (engineType === ClientEngineType.DataProxy) {
    return ClientEngineType.DataProxy;
  } else {
    return void 0;
  }
}
__name(getEngineTypeFromEnvVar, "getEngineTypeFromEnvVar");
__name2(getEngineTypeFromEnvVar, "getEngineTypeFromEnvVar");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClientEngineType,
  DEFAULT_CLIENT_ENGINE_TYPE,
  getClientEngineType
});
