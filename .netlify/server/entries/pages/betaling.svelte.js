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
  default: () => Betaling
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var import_Header_2_64a5d276 = require("../../chunks/Header-2-64a5d276.js");
var betaling_svelte_svelte_type_style_lang = "";
const css = {
  code: "#section-2.svelte-yah0j5.svelte-yah0j5{display:grid;grid-template-columns:1fr 1fr}.container-left.svelte-yah0j5.svelte-yah0j5{width:100%}.form.svelte-yah0j5.svelte-yah0j5{width:100%;padding:3rem;margin-bottom:3rem;background-color:#ededed;width:auto;border-radius:12px;display:grid;gap:20px}input.svelte-yah0j5.svelte-yah0j5{width:100%;margin:0.5rem;padding-inline:2rem;padding-block:1rem;border-radius:12px}.sti.svelte-yah0j5.svelte-yah0j5{text-transform:uppercase;font-weight:500;padding-bottom:4rem}.aktiv.svelte-yah0j5 a.svelte-yah0j5{text-decoration:underline;color:#648807}.container-right.svelte-yah0j5.svelte-yah0j5{align-self:start;text-align:left;gap:20px;background-color:#ededed;border-radius:12px;padding-inline:6rem;padding-block:2rem}",
  map: null
};
const Betaling = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${(0, import_index_e03aaaec.v)(import_Header_2_64a5d276.H, "Header").$$render($$result, {}, {}, {})}

<section id="${"section-1"}"><div class="${"sti text-sm breadcrumbs center svelte-yah0j5"}"><ul><li><a href="${"*"}">Bestilling</a></li>
			<li class="${"aktiv svelte-yah0j5"}"><a href="${"*"}" class="${"svelte-yah0j5"}">Betaling</a></li>
			<li><a href="${"*"}">Bestilling udf\xF8rt</a></li></ul></div>

	<h1>Bestillingsoversigt</h1></section>
<section id="${"section-2"}" class="${"svelte-yah0j5"}"><div class="${"container-left  svelte-yah0j5"}"><div class="${"form svelte-yah0j5"}"><h3 class="${"text-center"}">Kontooplysninger</h3>
			<input type="${"username"}" id="${"username"}" name="${"phone"}" placeholder="${"Navn"}" class="${"svelte-yah0j5"}">
			<input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"Efternavn"}" class="${"svelte-yah0j5"}">
			<input type="${"username"}" id="${"username"}" name="${"phone"}" placeholder="${"Adresse"}" class="${"svelte-yah0j5"}">
			<div class="${"flex"}"><input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"Postnummer"}" class="${"svelte-yah0j5"}">
				<input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"By"}" class="${"svelte-yah0j5"}"></div>
			<input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"Land"}" class="${"svelte-yah0j5"}">
			<input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"Email"}" class="${"svelte-yah0j5"}"></div>
		<div class="${"form svelte-yah0j5"}"><h3 class="${"text-center"}">Dine kortoplysninger</h3>
			<input type="${"username"}" id="${"username"}" name="${"phone"}" placeholder="${"Kortnummer"}" class="${"svelte-yah0j5"}">
			<div class="${"flex"}"><input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"MM/YY"}" class="${"svelte-yah0j5"}">
				<input type="${"password"}" id="${"kodeord"}" name="${"kodeord"}" placeholder="${"CVC"}" class="${"svelte-yah0j5"}"></div></div></div>

	<div class="${"container-right svelte-yah0j5"}"><div class="${"pb-96"}"><h3>Din ordre</h3>
			<br>
			<p class="${"font-bold"}">Alle konti</p>

			<p>M\xE5ned (MARTS)</p>
			<p>Fast Abonnoment</p>
			<hr>
			<div class="${"flex space-x-36"}"><p class="${"font-semibold"}">TOTAL</p>
				<p>696kr ,-</p></div></div>
		<div class="${"text-center"}"><a href="${"/"}">+ Tilf\xF8j flere ordre</a>
			<p class="${"italic pt-4 pb-6"}">Eller</p>
			<div id="${"complete"}"${(0, import_index_e03aaaec.b)(($page.url.pathname === "/complete" ? "active" : "").trim())}><a id="${"knap"}" sveltekit:prefetch href="${"/complete"}">Fuldf\xF8r ordre</a></div></div></div>
</section>`;
});
