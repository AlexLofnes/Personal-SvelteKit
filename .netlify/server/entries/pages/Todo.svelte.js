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
var import_index_b4c8b494 = __toModule(require("../../chunks/index-b4c8b494.js"));
var import_IconBase_62a9c6f1 = __toModule(require("../../chunks/IconBase-62a9c6f1.js"));
var import_app = __toModule(require("firebase/app"));
var import_database = __toModule(require("firebase/database"));
const MdAddCircleOutline = (0, import_index_b4c8b494.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_b4c8b494.v)(import_IconBase_62a9c6f1.I, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => `<path d="${"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}"></path>`
  })}`;
});
const FaRegTrashAlt = (0, import_index_b4c8b494.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_b4c8b494.v)(import_IconBase_62a9c6f1.I, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 448 512" }, $$props), {}, {
    default: () => `<path d="${"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}"></path>`
  })}`;
});
const Todo = (0, import_index_b4c8b494.c)(($$result, $$props, $$bindings, slots) => {
  let todos = [];
  const firebaseConfig = {
    apiKey: "AIzaSyDsn0p9Al9BEOPtQ7C7Cy-bVVWWuAx-Rog",
    authDomain: "personal-ad7a9.firebaseapp.com",
    projectId: "personal-ad7a9",
    storageBucket: "personal-ad7a9.appspot.com",
    messagingSenderId: "556252150942",
    appId: "1:556252150942:web:bd819f82c4ce6059aecf8f"
  };
  let { userId } = $$props;
  const app = (0, import_app.initializeApp)(firebaseConfig);
  (0, import_database.getDatabase)(app);
  if ($$props.userId === void 0 && $$bindings.userId && userId !== void 0)
    $$bindings.userId(userId);
  return `${`<ul class="${""}">${(0, import_index_b4c8b494.d)(todos, (item) => `<li class="${"pr-6 mt-4 text-5xl"}">${(0, import_index_b4c8b494.e)(item.name)}</li>
		<div class="${"sidebarIcon m-0 h-16"}">${(0, import_index_b4c8b494.v)(FaRegTrashAlt, "FaRegTrashAlt").$$render($$result, {}, {}, {})}</div>`)}</ul>

<button class="${"sidebarIcon mt-4"}">${(0, import_index_b4c8b494.v)(MdAddCircleOutline, "MdAddCircleOutline").$$render($$result, {}, {}, {})}</button>`}`;
});
