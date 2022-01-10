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
  default: () => Routes
});
var import_index_13c0de55 = __toModule(require("../../chunks/index-13c0de55.js"));
var app = "";
var IconBase_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}",
  map: null
};
const IconBase = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { viewBox } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_13c0de55.a)("viewBox", viewBox, 0)} class="${"svelte-c8tyih"}">${title ? `<title>${(0, import_index_13c0de55.e)(title)}</title>` : ``}${slots.default ? slots.default({}) : ``}</svg>`;
});
const FaSortAlphaDown = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_13c0de55.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 448 512" }, $$props), {}, {
    default: () => `<path d="${"M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"}"></path>`
  })}`;
});
const IoIosCheckboxOutline = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_13c0de55.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => `<path d="${"M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z"}"></path>
<path d="${"M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"}"></path>`
  })}`;
});
const GiMaze = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_13c0de55.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => `<path d="${"M212.125 20.156V59.72H39.53V188.56H69.846V293H39.623V483.03H204.687v-12.936H382v-45.5h95.281V264.53h-25.655V74.813H384.03V20.157H212.126zm18.688 18.688h134.53l-.03 35.968H297V153.938H378.28v46.625h18.69V135.25h-81.283V93.5h117.25v171.03H342V201.47H224.656v9.343l-.03 70.187v9.344h75.467v-18.688h-56.75v-51.5h79.97l-.002 126.78-185.937-.03V252.72h41.656v53.686h18.72V174.062h66.875v-18.687h-85.563v78.654h-60.375V293H88.53V188.562h57.44v-18.687H58.22v-91.47h153.905v30.94H111.437v18.686h119.375V38.845zM342 283.22h116.594v122.686H301.97v18.688h61.31v26.812H204.69v-48.812H110v18.687h76v43.064H58.312V311.72h60.376v53.874h9.343l114.782.03v65H261.5v-65H342v-31.529h66.75v33.844h18.688V315.406H342V283.22z"}"></path>`
  })}`;
});
const Routes = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex -z-10"}"><div class="${"fixed top-0 left-0 h-screen w-20 flex flex-col bg-slate-800 text-white shadow-lg items-center"}"><button class="${"w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear"}">about</button>
        <button class="${"w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear"}">${(0, import_index_13c0de55.v)(IoIosCheckboxOutline, "IoIosCheckboxOutline").$$render($$result, {}, {}, {})}</button>
        <button class="${"w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear"}">${(0, import_index_13c0de55.v)(FaSortAlphaDown, "FaSortAlphaDown").$$render($$result, {}, {}, {})}</button>
        <button class="${"w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear"}">${(0, import_index_13c0de55.v)(GiMaze, "GiMaze").$$render($$result, {}, {}, {})}</button></div></div>

<h1 class="${"m-30 text-yellow-900"}">asdas</h1>

<div class="${"ml-30 text-gray-500"}">${`${`${`${``}`}`}`}</div>`;
});
