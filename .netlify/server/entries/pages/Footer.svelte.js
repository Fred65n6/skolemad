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
  default: () => Footer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "Footer.svelte-13j1t4c.svelte-13j1t4c{margin-top:4rem;padding-block:5rem;display:grid;justify-items:center;grid-template-columns:1fr 1fr 1fr;background-color:#f0f0f0;gap:20px}.container.svelte-13j1t4c.svelte-13j1t4c{place-items:center;display:flex;gap:20px;margin-block:1rem}.section-1.svelte-13j1t4c img.svelte-13j1t4c{width:auto;height:20px}.logo.svelte-13j1t4c.svelte-13j1t4c{width:50%}",
  map: null
};
const Footer = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-13j1t4c"}"><div class="${"section-1 svelte-13j1t4c"}"><h3>Kontakt</h3>
		<div class="${"container flex svelte-13j1t4c"}"><img src="${"telefon.png"}" alt="${"telefon"}" class="${"svelte-13j1t4c"}">
			<p>2290 1244</p></div>
		<div class="${"container flex svelte-13j1t4c"}"><img src="${"mail.png"}" alt="${"mail"}" class="${"svelte-13j1t4c"}">
			<p>skolemad@kk.dk</p></div></div>
	<div class="${"section-2"}"><h3>Links</h3>
		<div class="${"container flex svelte-13j1t4c"}"><img src="${"pil.png"}" alt="${"telefon"}">
			<a href="${"/"}">Vilk\xE5r</a></div>
		<div class="${"container flex svelte-13j1t4c"}"><img src="${"pil.png"}" alt="${"telefon"}">
			<a href="${"/"}">Privatlivspolitik</a></div>
		<div class="${"container flex svelte-13j1t4c"}"><img src="${"pil.png"}" alt="${"telefon"}">
			<a href="${"/"}">FAQ</a></div></div>
	<div class="${"logo svelte-13j1t4c"}"><img src="${"logo.png"}" alt="${"logo"}"></div>
</footer>`;
});
