var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Hero
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-1ohhaec{display:grid;grid-template-columns:1fr 1fr;height:95vh;width:100%;background:linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)),\r\n			url('./hero.jpg');background-size:cover}.container.svelte-1ohhaec{padding-block:8rem;text-align:center;display:grid;place-items:center}h1.svelte-1ohhaec{text-align:center;font-family:Patrick Hand;font-style:italic;color:white;font-size:5rem}a.svelte-1ohhaec{color:white}.form.svelte-1ohhaec{padding:1rem;margin-top:2rem;background-color:#ededed;width:auto;border-radius:12px;display:grid;place-items:center;width:25rem}.not-user.svelte-1ohhaec{color:#648807;padding-block:0.5rem}input.svelte-1ohhaec{width:20rem;margin:0.5rem;padding:1rem;border-radius:12px}",
  map: null
};
const Hero = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"hero svelte-1ohhaec"}"><div class="${"container svelte-1ohhaec"}"><h1 class="${"svelte-1ohhaec"}">Slut med kedelige <br> madpakker</h1>
		<div class="${"form svelte-1ohhaec"}"><input type="${"username"}" id="${"username"}" name="${"phone"}" placeholder="${"Brugernavn"}" class="${"svelte-1ohhaec"}">
			<input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"Password"}" class="${"svelte-1ohhaec"}">
			<a class="${"not-user svelte-1ohhaec"}" href="${"/"}">Endnu ikke bruger?</a>
			<div id="${"knap"}"${(0, import_index_e03aaaec.b)(($page.url.pathname === "/user-page" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/user-page"}" class="${"svelte-1ohhaec"}">Login</a></div></div></div>
</div>`;
});
