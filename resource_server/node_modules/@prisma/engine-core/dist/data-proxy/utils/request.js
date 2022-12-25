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
  request: () => request
});
var import_getJSRuntimeName = __toModule(require("./getJSRuntimeName"));
var __defProp = Object.defineProperty;
var __name = /* @__PURE__ */ __name2((target, value) => __defProp(target, "name", { value, configurable: true }), "__name");
async function request(url2, options2 = {}) {
  const jsRuntimeName = (0, import_getJSRuntimeName.getJSRuntimeName)();
  if (jsRuntimeName === "browser") {
    return fetch(url2, options2);
  } else {
    return nodeFetch(url2, options2);
  }
}
__name2(request, "request");
__name(request, "request");
function buildHeaders(options2) {
  return {
    ...JSON.parse(JSON.stringify(options2.headers)),
    "Content-Type": "application/json"
  };
}
__name2(buildHeaders, "buildHeaders");
__name(buildHeaders, "buildHeaders");
function buildOptions(options2) {
  return {
    method: options2.method,
    headers: buildHeaders(options2)
  };
}
__name2(buildOptions, "buildOptions");
__name(buildOptions, "buildOptions");
function buildResponse(incomingData2, response) {
  return {
    json: () => JSON.parse(Buffer.concat(incomingData2).toString()),
    ok: response.statusCode >= 200 && response.statusCode < 300,
    status: response.statusCode,
    url: response.url
  };
}
__name2(buildResponse, "buildResponse");
__name(buildResponse, "buildResponse");
function nodeFetch(url, options = {}) {
  const httpsOptions = buildOptions(options);
  const incomingData = [];
  return new Promise((resolve, reject) => {
    var _a;
    const https = eval(`require('https')`);
    const request = https.request(url, httpsOptions, (response) => {
      response.on("data", (chunk) => incomingData.push(chunk));
      response.on("end", () => resolve(buildResponse(incomingData, response)));
      response.on("error", reject);
    });
    request.on("error", reject);
    request.write((_a = options.body) != null ? _a : "");
    request.end();
  });
}
__name2(nodeFetch, "nodeFetch");
__name(nodeFetch, "nodeFetch");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  request
});
