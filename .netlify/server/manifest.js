var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["apple-icon.svg", "apple.png", "bestik-icon.svg", "bestik.png", "bg-green-2.svg", "blue-bg.svg", "favicon.png", "glutenikon.png", "glutenikon.svg", "green-bg.svg", "hero.jpg", "logo.png", "mad-collage-1.jpg", "mad-collage-2.jpg", "mad-collage-3.jpg", "mad-collage-4.jpg", "mad.jpg", "madplan.png", "mail-icon.svg", "mail.png", "m\xE6lkikon.svg", "n\xF8dikon.svg", "orange-bg.svg.svg", "pil-madplan.svg", "pil.png", "pil.svg", "right-arrow.svg", "school-icon.svg", "skole.png", "svelte-welcome.png", "svelte-welcome.webp", "telefon.png", "telephone-icon.svg", "users-icon.svg", "users.png", "vegetarikon.svg"]),
  mimeTypes: { ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp" },
  _: {
    entry: { "file": "start-b22a3330.js", "js": ["start-b22a3330.js", "chunks/vendor-d4864bdc.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "Kontooversigt",
        pattern: /^\/Kontooversigt\/?$/,
        names: [],
        types: [],
        path: "/Kontooversigt",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "user-page",
        pattern: /^\/user-page\/?$/,
        names: [],
        types: [],
        path: "/user-page",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "betaling",
        pattern: /^\/betaling\/?$/,
        names: [],
        types: [],
        path: "/betaling",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "complete",
        pattern: /^\/complete\/?$/,
        names: [],
        types: [],
        path: "/complete",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "Madplan",
        pattern: /^\/Madplan\/?$/,
        names: [],
        types: [],
        path: "/Madplan",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "Footer",
        pattern: /^\/Footer\/?$/,
        names: [],
        types: [],
        path: "/Footer",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "order",
        pattern: /^\/order\/?$/,
        names: [],
        types: [],
        path: "/order",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "Hero",
        pattern: /^\/Hero\/?$/,
        names: [],
        types: [],
        path: "/Hero",
        shadow: null,
        a: [0, 10],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
