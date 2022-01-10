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
  default: () => Slow
});
var import_index_13c0de55 = __toModule(require("../../chunks/index-13c0de55.js"));
const Slow = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let arr = [];
  let timeTaken, completed = false, elWidth = 1;
  let screenWidth = window.innerWidth - 50;
  function shuffle() {
    completed = false;
    arr = [];
    for (let i = 1; i < screenWidth; i++) {
      let num = i / 12;
      arr.push(num);
    }
    console.log(arr, Math.max(...arr), screenWidth / 100);
    let currentIndex = arr.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
  }
  shuffle();
  return `<main><button id="${"shuffle"}">Refresh</button>
    <button id="${"shuffle"}">Shuffle</button>
    <button>Bubble Sort</button>
    <button>Insertion Sort</button>
    <button>Gnome Sort</button>
    <button>Selection Sort</button>
    <button>Shell Sort</button>
    <button>Flash Sort</button></main>
<br>

${(0, import_index_13c0de55.b)(arr, (el, i) => `${completed ? `<div${(0, import_index_13c0de55.a)("id", i, 0)} style="${"position: relative;height: " + (0, import_index_13c0de55.e)(el * 5) + "px; width: " + (0, import_index_13c0de55.e)(elWidth) + "px; background: #52D452;"}"></div>` : `<div${(0, import_index_13c0de55.a)("id", i, 0)} style="${"position: relative;height: " + (0, import_index_13c0de55.e)(el * 5) + "px; width: " + (0, import_index_13c0de55.e)(elWidth) + "px; background: #eeeeee;"}"></div>`}`)}
<br>

<input type="${"number"}" placeholder="${"Number of elements"}"${(0, import_index_13c0de55.a)("value", screenWidth, 0)}>
<input type="${"number"}" placeholder="${"Width of elements"}"${(0, import_index_13c0de55.a)("value", elWidth, 0)}>

<h2>It took: ${(0, import_index_13c0de55.e)(timeTaken)} seconds to sort ${(0, import_index_13c0de55.e)(screenWidth)} elements</h2>`;
});
