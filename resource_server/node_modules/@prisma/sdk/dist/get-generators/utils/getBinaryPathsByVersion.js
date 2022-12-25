var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp2(target, "__esModule", { value: true });
var __name2 = (target, value) => __defProp2(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp2(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  getBinaryPathsByVersion: () => getBinaryPathsByVersion
});
var import_engines = __toModule(require("@prisma/engines"));
var import_fetch_engine = __toModule(require("@prisma/fetch-engine"));
var import_make_dir = __toModule(require("make-dir"));
var import_path = __toModule(require("path"));
var import_mapKeys = __toModule(require("../../utils/mapKeys"));
var import_binaryTypeToEngineType = __toModule(require("../utils/binaryTypeToEngineType"));
var import_engineTypeToBinaryType = __toModule(require("../utils/engineTypeToBinaryType"));
var __defProp = Object.defineProperty;
var __name = /* @__PURE__ */ __name2((target, value) => __defProp(target, "name", { value, configurable: true }), "__name");
async function getBinaryPathsByVersion({
  neededVersions,
  platform,
  version,
  printDownloadProgress,
  skipDownload,
  binaryPathsOverride
}) {
  const binaryPathsByVersion = Object.create(null);
  for (const currentVersion in neededVersions) {
    binaryPathsByVersion[currentVersion] = {};
    const neededVersion = neededVersions[currentVersion];
    if (neededVersion.binaryTargets.length === 0) {
      neededVersion.binaryTargets = [{ fromEnvVar: null, value: platform }];
    }
    if (process.env.NETLIFY && !neededVersion.binaryTargets.find((object) => object.value === "rhel-openssl-1.0.x")) {
      neededVersion.binaryTargets.push({
        fromEnvVar: null,
        value: "rhel-openssl-1.0.x"
      });
    }
    let binaryTargetBaseDir = eval(`require('path').join(__dirname, '..')`);
    if (version !== currentVersion) {
      binaryTargetBaseDir = import_path.default.join(binaryTargetBaseDir, `./engines/${currentVersion}/`);
      await (0, import_make_dir.default)(binaryTargetBaseDir).catch((e) => console.error(e));
    }
    const binariesConfig = neededVersion.engines.reduce((acc, curr) => {
      if (!(binaryPathsOverride == null ? void 0 : binaryPathsOverride[curr])) {
        acc[(0, import_engineTypeToBinaryType.engineTypeToBinaryType)(curr)] = binaryTargetBaseDir;
      }
      return acc;
    }, Object.create(null));
    if (Object.values(binariesConfig).length > 0) {
      const platforms = neededVersion.binaryTargets.map((binaryTarget) => binaryTarget.value);
      const downloadParams = {
        binaries: binariesConfig,
        binaryTargets: platforms,
        showProgress: typeof printDownloadProgress === "boolean" ? printDownloadProgress : true,
        version: currentVersion && currentVersion !== "latest" ? currentVersion : import_engines.enginesVersion,
        skipDownload
      };
      const binaryPathsWithEngineType = await (0, import_fetch_engine.download)(downloadParams);
      const binaryPaths = (0, import_mapKeys.mapKeys)(binaryPathsWithEngineType, import_binaryTypeToEngineType.binaryTypeToEngineType);
      binaryPathsByVersion[currentVersion] = binaryPaths;
    }
    if (binaryPathsOverride) {
      const overrideEngines = Object.keys(binaryPathsOverride);
      const enginesCoveredByOverride = neededVersion.engines.filter((engine) => overrideEngines.includes(engine));
      if (enginesCoveredByOverride.length > 0) {
        for (const engine of enginesCoveredByOverride) {
          const enginePath = binaryPathsOverride[engine];
          binaryPathsByVersion[currentVersion][engine] = {
            [platform]: enginePath
          };
        }
      }
    }
  }
  return binaryPathsByVersion;
}
__name2(getBinaryPathsByVersion, "getBinaryPathsByVersion");
__name(getBinaryPathsByVersion, "getBinaryPathsByVersion");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBinaryPathsByVersion
});
