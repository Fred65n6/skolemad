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
  default: () => Kontooversigt
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var Kontooversigt_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-xn1ilo.svelte-xn1ilo{margin:3rem;width:85%;text-align:center}th.svelte-xn1ilo.svelte-xn1ilo{background-color:#ddebed;padding:2rem;margin:2rem;gap:20px}td.svelte-xn1ilo.svelte-xn1ilo{background-color:#ededed;padding:2rem;border-top:solid 2px #ddebed;border-right:solid 2px #ddebed}table.svelte-xn1ilo tr:first-child th.svelte-xn1ilo:first-child{border-top-left-radius:12px}table.svelte-xn1ilo tr:first-child th.svelte-xn1ilo:last-child{border-top-right-radius:12px}table.svelte-xn1ilo tr:last-child td.svelte-xn1ilo:first-child{border-bottom-left-radius:12px}table.svelte-xn1ilo tr:last-child td.svelte-xn1ilo:last-child{border-bottom-right-radius:12px}td.svelte-xn1ilo.svelte-xn1ilo:last-child{border-right:none}",
  map: null
};
const Kontooversigt = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<table class="${"svelte-xn1ilo"}"><tr><th class="${"svelte-xn1ilo"}">Barn</th>
		<th class="${"svelte-xn1ilo"}">L\xF8bende periode</th>
		<th class="${"svelte-xn1ilo"}">Menu</th>
		<th class="${"svelte-xn1ilo"}">Pris</th></tr>
	<tr><td class="${"svelte-xn1ilo"}">Felix Grage</td>
		<td class="${"svelte-xn1ilo"}">Februrar</td>
		<td class="${"svelte-xn1ilo"}">Vegetar</td>
		<td class="${"svelte-xn1ilo"}">348,-</td></tr>
	<tr><td class="${"svelte-xn1ilo"}">Mikka Grage</td>
		<td class="${"svelte-xn1ilo"}">Hver m\xE5ned</td>
		<td class="${"svelte-xn1ilo"}">Almindelig</td>
		<td class="${"svelte-xn1ilo"}">348,- mdl.</td></tr>
</table>`;
});
