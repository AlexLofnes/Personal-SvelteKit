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
  default: () => Todo
});
var import_index_13c0de55 = __toModule(require("../../chunks/index-13c0de55.js"));
const src = "https://findicons.com/files/icons/1681/siena/128/trash.png";
const Todo = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let todos = [];
  return `${`<ul>${(0, import_index_13c0de55.b)(todos, (item) => `<li>${(0, import_index_13c0de55.e)(item.name)}</li>
		<img${(0, import_index_13c0de55.a)("src", src, 0)} alt="${"Delte Item"}">`)}</ul>

<button>Add New Item</button>`}`;
});