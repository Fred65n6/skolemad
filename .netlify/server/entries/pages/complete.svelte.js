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
  default: () => Complete
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_64a5d276 = require("../../chunks/Header-2-64a5d276.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var complete_svelte_svelte_type_style_lang = "";
const css = {
  code: "#section-2.svelte-1d3fgmz.svelte-1d3fgmz{display:grid;grid-template-columns:1fr 1fr;gap:3rem}.container-left.svelte-1d3fgmz.svelte-1d3fgmz,.container-right.svelte-1d3fgmz.svelte-1d3fgmz{width:100%;align-self:start}.form.svelte-1d3fgmz.svelte-1d3fgmz{width:100%;padding:3rem;margin-bottom:3rem;background-color:#ededed;width:auto;border-radius:12px;display:grid;gap:20px}p.svelte-1d3fgmz.svelte-1d3fgmz{background-color:white;color:black;border-radius:12px;text-align:left;padding:0.5rem}h4.svelte-1d3fgmz.svelte-1d3fgmz{text-align:left;font-weight:500}p.svelte-1d3fgmz.svelte-1d3fgmz{max-width:700px}.sti.svelte-1d3fgmz.svelte-1d3fgmz{text-transform:uppercase;font-weight:500;padding-bottom:4rem}.aktiv.svelte-1d3fgmz a.svelte-1d3fgmz{text-decoration:underline;color:#648807}",
  map: null
};
const Complete = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_e03aaaec.v)(import_Header_2_64a5d276.H, "Header").$$render($$result, {}, {}, {})}

<section id="${"section-1"}"><div class="${"sti text-sm breadcrumbs center svelte-1d3fgmz"}"><ul><li><a href="${"/"}">Bestilling</a></li>
			<li><a href="${"/"}">Betaling</a></li>
			<li class="${"aktiv svelte-1d3fgmz"}"><a href="${"/"}" class="${"svelte-1d3fgmz"}">Bestilling udf\xF8rt</a></li></ul></div>

	<section id="${"section-0"}"><h1>Tak for din bestilling</h1>

		<p class="${"svelte-1d3fgmz"}">Tak for at bestille dine b\xF8rns madpakker her hos SkoleMad.dk. Vi har modtaget din ordre og
			madpakkerne vil blive leveret til Kalvebod F\xE6lled Skole pr. 1. februar. Vi h\xE5ber dine b\xF8rn
			bliver glade for deres madpakker, God dag, SkoleMad.dk
		</p></section></section>

<section id="${"section-2"}" class="${"svelte-1d3fgmz"}"><div class="${"container-left  svelte-1d3fgmz"}"><div class="${"form svelte-1d3fgmz"}"><h3 class="${"text-center"}">Dine Kontooplysninger</h3>
			<div class="${""}"><h4 class="${"svelte-1d3fgmz"}">Ordernummer</h4>
				<p class="${"svelte-1d3fgmz"}">578023524</p></div>
			<div class="${""}"><h4 class="${"svelte-1d3fgmz"}">Orderdato</h4>
				<p class="${"svelte-1d3fgmz"}">15. februar 2022</p></div>
			<div class="${""}"><h4 class="${"svelte-1d3fgmz"}">Navn</h4>
				<p class="${"svelte-1d3fgmz"}">Stefan Grage</p></div>
			<div class="${""}"><h4 class="${"svelte-1d3fgmz"}">Email</h4>
				<p class="${"svelte-1d3fgmz"}">Stefan@gmail.com</p></div></div></div>

	<div class="${"container-right svelte-1d3fgmz"}"><div class="${"form svelte-1d3fgmz"}"><h3 class="${"text-center"}">Dine Kontooplysninger</h3>
			<div class="${""}"><h4 class="${"svelte-1d3fgmz"}">Hjemmeadresse</h4>
				<p class="${"svelte-1d3fgmz"}">Stefan Grage <br> N\xF8rrebrogade 66C, 2.3 <br> 2200 K\xF8benhavn N <br>
					Danmark
				</p></div>
			<div class="${""}"><h4 class="${"svelte-1d3fgmz"}">Leveringsadresse</h4>
				<p class="${"svelte-1d3fgmz"}">Kalvebod F\xE6lled Skole <br>
					Else Alfelts Vej 2 <br>
					2300 K\xF8benhavn S <br>
					Danmark
				</p></div>
			<div class="${""}"><h4 class="${"svelte-1d3fgmz"}">Modtager</h4>
				<p class="${"svelte-1d3fgmz"}">Mikka Grage <br>
					Felix Grage
				</p></div></div></div>
</section>`;
});
