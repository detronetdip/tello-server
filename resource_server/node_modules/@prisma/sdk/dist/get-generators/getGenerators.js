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
  getGenerator: () => getGenerator,
  getGenerators: () => getGenerators,
  knownBinaryTargets: () => knownBinaryTargets,
  skipIndex: () => skipIndex
});
var import_debug = __toModule(require("@prisma/debug"));
var import_engine_core = __toModule(require("@prisma/engine-core"));
var import_engines = __toModule(require("@prisma/engines"));
var import_fetch_engine = __toModule(require("@prisma/fetch-engine"));
var import_get_platform = __toModule(require("@prisma/get-platform"));
var import_chalk = __toModule(require("chalk"));
var import_fs = __toModule(require("fs"));
var import_p_map = __toModule(require("p-map"));
var import_path = __toModule(require("path"));
var import__ = __toModule(require(".."));
var import_Generator = __toModule(require("../Generator"));
var import_predefinedGeneratorResolvers = __toModule(require("../predefinedGeneratorResolvers"));
var import_resolveOutput = __toModule(require("../resolveOutput"));
var import_extractPreviewFeatures = __toModule(require("../utils/extractPreviewFeatures"));
var import_mapPreviewFeatures = __toModule(require("../utils/mapPreviewFeatures"));
var import_missingDatasource = __toModule(require("../utils/missingDatasource"));
var import_missingGeneratorMessage = __toModule(require("../utils/missingGeneratorMessage"));
var import_parseEnvValue = __toModule(require("../utils/parseEnvValue"));
var import_pick = __toModule(require("../utils/pick"));
var import_printConfigWarnings = __toModule(require("../utils/printConfigWarnings"));
var import_binaryTypeToEngineType = __toModule(require("./utils/binaryTypeToEngineType"));
var import_checkFeatureFlags = __toModule(require("./utils/check-feature-flags/checkFeatureFlags"));
var import_getBinaryPathsByVersion = __toModule(require("./utils/getBinaryPathsByVersion"));
var import_getEngineVersionForGenerator = __toModule(require("./utils/getEngineVersionForGenerator"));
var __defProp = Object.defineProperty;
var __name = /* @__PURE__ */ __name2((target, value) => __defProp(target, "name", { value, configurable: true }), "__name");
const debug = (0, import_debug.default)("prisma:getGenerators");
async function getGenerators({
  schemaPath,
  providerAliases: aliases,
  version,
  cliVersion,
  printDownloadProgress,
  baseDir = import_path.default.dirname(schemaPath),
  overrideGenerators,
  skipDownload,
  binaryPathsOverride
}) {
  var _a, _b, _c, _d;
  if (!schemaPath) {
    throw new Error(`schemaPath for getGenerators got invalid value ${schemaPath}`);
  }
  if (!import_fs.default.existsSync(schemaPath)) {
    throw new Error(`${schemaPath} does not exist`);
  }
  const platform = await (0, import_get_platform.getPlatform)();
  const queryEngineBinaryType = (0, import_engines.getCliQueryEngineBinaryType)();
  const queryEngineType = (0, import_binaryTypeToEngineType.binaryTypeToEngineType)(queryEngineBinaryType);
  let prismaPath = binaryPathsOverride == null ? void 0 : binaryPathsOverride[queryEngineType];
  if (version && !prismaPath) {
    const potentialPath = eval(`require('path').join(__dirname, '..')`);
    if (!potentialPath.startsWith("/snapshot/")) {
      const downloadParams = {
        binaries: {
          [queryEngineBinaryType]: potentialPath
        },
        binaryTargets: [platform],
        showProgress: false,
        version,
        skipDownload
      };
      const binaryPathsWithEngineType = await (0, import_fetch_engine.download)(downloadParams);
      prismaPath = binaryPathsWithEngineType[queryEngineBinaryType][platform];
    }
  }
  const datamodel = import_fs.default.readFileSync(schemaPath, "utf-8");
  const config = await (0, import__.getConfig)({
    datamodel,
    datamodelPath: schemaPath,
    prismaPath,
    ignoreEnvVarErrors: true
  });
  if (config.datasources.length === 0) {
    throw new Error(import_missingDatasource.missingDatasource);
  }
  (0, import_printConfigWarnings.printConfigWarnings)(config.warnings);
  const previewFeatures = (0, import_mapPreviewFeatures.mapPreviewFeatures)((0, import_extractPreviewFeatures.extractPreviewFeatures)(config));
  const dmmf = await (0, import__.getDMMF)({
    datamodel,
    datamodelPath: schemaPath,
    prismaPath,
    previewFeatures
  });
  if (dmmf.datamodel.models.length === 0) {
    if (config.datasources.some((d) => d.provider === "mongodb")) {
      throw new Error(import_missingGeneratorMessage.missingModelMessageMongoDB);
    }
    throw new Error(import_missingGeneratorMessage.missingModelMessage);
  }
  (0, import_checkFeatureFlags.checkFeatureFlags)(config);
  const generatorConfigs = overrideGenerators || config.generators;
  await validateGenerators(generatorConfigs);
  const runningGenerators = [];
  try {
    const generators = await (0, import_p_map.default)(generatorConfigs, async (generator, index) => {
      let generatorPath = (0, import_parseEnvValue.parseEnvValue)(generator.provider);
      let paths;
      const providerValue = (0, import_parseEnvValue.parseEnvValue)(generator.provider);
      if (aliases && aliases[providerValue]) {
        generatorPath = aliases[providerValue].generatorPath;
        paths = aliases[providerValue];
      } else if (import_predefinedGeneratorResolvers.predefinedGeneratorResolvers[providerValue]) {
        paths = await import_predefinedGeneratorResolvers.predefinedGeneratorResolvers[providerValue](baseDir, cliVersion);
        generatorPath = paths.generatorPath;
      }
      const generatorInstance = new import_Generator.Generator(generatorPath, generator, paths == null ? void 0 : paths.isNode);
      await generatorInstance.init();
      if (generator.output) {
        generator.output = {
          value: import_path.default.resolve(baseDir, (0, import_parseEnvValue.parseEnvValue)(generator.output)),
          fromEnvVar: null
        };
        generator.isCustomOutput = true;
      } else if (paths) {
        generator.output = {
          value: paths.outputPath,
          fromEnvVar: null
        };
      } else {
        if (!generatorInstance.manifest || !generatorInstance.manifest.defaultOutput) {
          throw new Error(`Can't resolve output dir for generator ${import_chalk.default.bold(generator.name)} with provider ${import_chalk.default.bold(generator.provider)}.
The generator needs to either define the \`defaultOutput\` path in the manifest or you need to define \`output\` in the datamodel.prisma file.`);
        }
        generator.output = {
          value: await (0, import_resolveOutput.resolveOutput)({
            defaultOutput: generatorInstance.manifest.defaultOutput,
            baseDir
          }),
          fromEnvVar: "null"
        };
      }
      const options = {
        datamodel,
        datasources: config.datasources,
        generator,
        dmmf,
        otherGenerators: skipIndex(generatorConfigs, index),
        schemaPath,
        version: version || import_engines.enginesVersion
      };
      generatorInstance.setOptions(options);
      runningGenerators.push(generatorInstance);
      return generatorInstance;
    }, {
      stopOnError: false
    });
    const generatorProviders = generatorConfigs.map((g) => (0, import_parseEnvValue.parseEnvValue)(g.provider));
    for (const g of generators) {
      if (g.manifest && g.manifest.requiresGenerators && g.manifest.requiresGenerators.length > 0) {
        for (const neededGenerator of g.manifest.requiresGenerators) {
          if (!generatorProviders.includes(neededGenerator)) {
            throw new Error(`Generator "${g.manifest.prettyName}" requires generator "${neededGenerator}", but it is missing in your schema.prisma.
Please add it to your schema.prisma:

generator gen {
  provider = "${neededGenerator}"
}
`);
          }
        }
      }
    }
    const neededVersions = Object.create(null);
    for (const g of generators) {
      if (g.manifest && g.manifest.requiresEngines && Array.isArray(g.manifest.requiresEngines) && g.manifest.requiresEngines.length > 0) {
        const neededVersion = (0, import_getEngineVersionForGenerator.getEngineVersionForGenerator)(g.manifest, version);
        if (!neededVersions[neededVersion]) {
          neededVersions[neededVersion] = { engines: [], binaryTargets: [] };
        }
        for (const engine of g.manifest.requiresEngines) {
          if (!neededVersions[neededVersion].engines.includes(engine)) {
            neededVersions[neededVersion].engines.push(engine);
          }
        }
        const generatorBinaryTargets = (_b = (_a = g.options) == null ? void 0 : _a.generator) == null ? void 0 : _b.binaryTargets;
        if (generatorBinaryTargets && generatorBinaryTargets.length > 0) {
          const binaryTarget0 = generatorBinaryTargets[0];
          if (binaryTarget0.fromEnvVar !== null) {
            const parsedBinaryTargetsEnvValue = (0, import_parseEnvValue.parseBinaryTargetsEnvValue)(binaryTarget0);
            generatorBinaryTargets.shift();
            if (Array.isArray(parsedBinaryTargetsEnvValue)) {
              for (const platformName of parsedBinaryTargetsEnvValue) {
                generatorBinaryTargets.push({
                  fromEnvVar: binaryTarget0.fromEnvVar,
                  value: platformName
                });
              }
            } else {
              generatorBinaryTargets.push({
                fromEnvVar: binaryTarget0.fromEnvVar,
                value: parsedBinaryTargetsEnvValue
              });
            }
          }
          for (const binaryTarget of generatorBinaryTargets) {
            if (binaryTarget.value === "native") {
              binaryTarget.value = platform;
            }
            if (!neededVersions[neededVersion].binaryTargets.find((object) => object.value === binaryTarget.value)) {
              neededVersions[neededVersion].binaryTargets.push(binaryTarget);
            }
          }
        }
      }
    }
    debug("neededVersions", JSON.stringify(neededVersions, null, 2));
    const binaryPathsByVersion = await (0, import_getBinaryPathsByVersion.getBinaryPathsByVersion)({
      neededVersions,
      platform,
      version,
      printDownloadProgress,
      skipDownload,
      binaryPathsOverride
    });
    for (const generator of generators) {
      if (generator.manifest && generator.manifest.requiresEngines) {
        const engineVersion = (0, import_getEngineVersionForGenerator.getEngineVersionForGenerator)(generator.manifest, version);
        const binaryPaths = binaryPathsByVersion[engineVersion];
        const generatorBinaryPaths = (0, import_pick.pick)(binaryPaths, generator.manifest.requiresEngines);
        debug({ generatorBinaryPaths });
        generator.setBinaryPaths(generatorBinaryPaths);
        if (engineVersion !== version && generator.options && generator.manifest.requiresEngines.includes(queryEngineType) && generatorBinaryPaths[queryEngineType] && ((_c = generatorBinaryPaths[queryEngineType]) == null ? void 0 : _c[platform])) {
          const customDmmf = await (0, import__.getDMMF)({
            datamodel,
            datamodelPath: schemaPath,
            prismaPath: (_d = generatorBinaryPaths[queryEngineType]) == null ? void 0 : _d[platform],
            previewFeatures
          });
          const options = { ...generator.options, dmmf: customDmmf };
          debug("generator.manifest.prettyName", generator.manifest.prettyName);
          debug("options", options);
          debug("options.generator.binaryTargets", options.generator.binaryTargets);
          generator.setOptions(options);
        }
      }
    }
    return generators;
  } catch (e) {
    runningGenerators.forEach((g) => g.stop());
    throw e;
  }
}
__name2(getGenerators, "getGenerators");
__name(getGenerators, "getGenerators");
async function getGenerator(options) {
  const generators = await getGenerators(options);
  return generators[0];
}
__name2(getGenerator, "getGenerator");
__name(getGenerator, "getGenerator");
function skipIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
__name2(skipIndex, "skipIndex");
__name(skipIndex, "skipIndex");
const knownBinaryTargets = [...import_get_platform.platforms, "native"];
const oldToNewBinaryTargetsMapping = {
  "linux-glibc-libssl1.0.1": "debian-openssl-1.0.x",
  "linux-glibc-libssl1.0.2": "debian-openssl-1.0.x",
  "linux-glibc-libssl1.1.0": "debian-openssl1.1.x"
};
async function validateGenerators(generators) {
  const platform2 = await (0, import_get_platform.getPlatform)();
  for (const generator of generators) {
    if ((0, import_parseEnvValue.parseEnvValue)(generator.provider) === "photonjs") {
      throw new Error(`Oops! Photon has been renamed to Prisma Client. Please make the following adjustments:
  1. Rename ${import_chalk.default.red('provider = "photonjs"')} to ${import_chalk.default.green('provider = "prisma-client-js"')} in your ${import_chalk.default.bold("schema.prisma")} file.
  2. Replace your ${import_chalk.default.bold("package.json")}'s ${import_chalk.default.red("@prisma/photon")} dependency to ${import_chalk.default.green("@prisma/client")}
  3. Replace ${import_chalk.default.red("import { Photon } from '@prisma/photon'")} with ${import_chalk.default.green("import { PrismaClient } from '@prisma/client'")} in your code.
  4. Run ${import_chalk.default.green("prisma generate")} again.
      `);
    }
    if (generator.config.platforms) {
      throw new Error(`The \`platforms\` field on the generator definition is deprecated. Please rename it to \`binaryTargets\`.`);
    }
    if (generator.config.pinnedBinaryTargets) {
      throw new Error(`The \`pinnedBinaryTargets\` field on the generator definition is deprecated.
Please use the PRISMA_QUERY_ENGINE_BINARY env var instead to pin the binary target.`);
    }
    if (generator.binaryTargets) {
      const binaryTargets = generator.binaryTargets && generator.binaryTargets.length > 0 ? generator.binaryTargets : [{ fromEnvVar: null, value: "native" }];
      const resolvedBinaryTargets = binaryTargets.flatMap((object) => (0, import_parseEnvValue.parseBinaryTargetsEnvValue)(object)).map((p) => p === "native" ? platform2 : p);
      for (const resolvedBinaryTarget of resolvedBinaryTargets) {
        if (oldToNewBinaryTargetsMapping[resolvedBinaryTarget]) {
          throw new Error(`Binary target ${import_chalk.default.red.bold(resolvedBinaryTarget)} is deprecated. Please use ${import_chalk.default.green.bold(oldToNewBinaryTargetsMapping[resolvedBinaryTarget])} instead.`);
        }
        if (!knownBinaryTargets.includes(resolvedBinaryTarget)) {
          throw new Error(`Unknown binary target ${import_chalk.default.red(resolvedBinaryTarget)} in generator ${import_chalk.default.bold(generator.name)}.
Possible binaryTargets: ${import_chalk.default.greenBright(knownBinaryTargets.join(", "))}`);
        }
      }
      if (!resolvedBinaryTargets.includes(platform2)) {
        const originalBinaryTargetsConfig = (0, import_engine_core.getOriginalBinaryTargetsValue)(generator.binaryTargets);
        if (generator) {
          console.log(`${import_chalk.default.yellow("Warning:")} Your current platform \`${import_chalk.default.bold(platform2)}\` is not included in your generator's \`binaryTargets\` configuration ${JSON.stringify(originalBinaryTargetsConfig)}.
To fix it, use this generator config in your ${import_chalk.default.bold("schema.prisma")}:
${import_chalk.default.greenBright((0, import_engine_core.printGeneratorConfig)({
            ...generator,
            binaryTargets: (0, import_engine_core.fixBinaryTargets)(generator.binaryTargets, platform2)
          }))}
${import_chalk.default.gray(`Note, that by providing \`native\`, Prisma Client automatically resolves \`${platform2}\`.
Read more about deploying Prisma Client: ${import_chalk.default.underline("https://github.com/prisma/prisma/blob/main/docs/core/generators/prisma-client-js.md")}`)}
`);
        } else {
          console.log(`${import_chalk.default.yellow("Warning")} The binaryTargets ${JSON.stringify(originalBinaryTargetsConfig)} don't include your local platform ${platform2}, which you can also point to with \`native\`.
In case you want to fix this, you can provide ${import_chalk.default.greenBright(`binaryTargets: ${JSON.stringify(["native", ...binaryTargets || []])}`)} in the schema.prisma file.`);
        }
      }
    }
  }
}
__name2(validateGenerators, "validateGenerators");
__name(validateGenerators, "validateGenerators");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getGenerator,
  getGenerators,
  knownBinaryTargets,
  skipIndex
});
