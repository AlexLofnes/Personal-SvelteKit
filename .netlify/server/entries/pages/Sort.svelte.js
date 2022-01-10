var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Sort
});
var import_index_13c0de55 = __toModule(require("../../chunks/index-13c0de55.js"));
var import_Fast_svelte = __toModule(require("./Fast.svelte.js"));
var import_Slow_svelte = __toModule(require("./Slow.svelte.js"));
const Sort = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1>Faster and more accurate to the algorithm&#39;s speed</h1>
${(0, import_index_13c0de55.v)(import_Fast_svelte.default, "Fast").$$render($$result, {}, {}, {})}
<h1>Slower but easier to see what is happening and the differences between each algorithm</h1>
${(0, import_index_13c0de55.v)(import_Slow_svelte.default, "Slow").$$render($$result, {}, {}, {})}`;
});
