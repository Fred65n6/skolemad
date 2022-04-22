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
  default: () => User_page,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var import_Header_2_64a5d276 = require("../../chunks/Header-2-64a5d276.js");
var import_Kontooversigt_svelte = __toESM(require("./Kontooversigt.svelte.js"));
var import_Madplan_svelte = __toESM(require("./Madplan.svelte.js"));
const browser = false;
const dev = false;
var userPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "#section-1.svelte-p6687s .container.svelte-p6687s{display:flex;align-items:center;justify-content:center;gap:50px}#section-2.svelte-p6687s .container.svelte-p6687s{margin:0 auto;display:grid;place-items:center;grid-template-columns:1fr 1fr}#section-2.svelte-p6687s p.svelte-p6687s{max-width:500px}span.svelte-p6687s.svelte-p6687s{font-weight:500;font-size:1.5rem}#section-2.svelte-p6687s img.svelte-p6687s{width:auto;height:500px;transform:rotate(90deg)}#section-3.svelte-p6687s.svelte-p6687s{display:grid;place-items:center;padding-bottom:4rem}#section-3.svelte-p6687s .container.svelte-p6687s{margin:0 auto;display:grid;place-items:center}.ikoner.svelte-p6687s.svelte-p6687s{display:flex;gap:50px;margin-block:0rem}#section-4.svelte-p6687s .container.svelte-p6687s{margin:0 auto;display:grid;place-items:center;grid-template-columns:1fr 1fr}#section-4.svelte-p6687s img.svelte-p6687s{width:auto;height:500px;transform:rotate(90deg)}#section-4.svelte-p6687s p.svelte-p6687s{max-width:500px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const User_page = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>SkoleMad.dk</title>`, ""}`, ""}
${(0, import_index_e03aaaec.v)(import_Header_2_64a5d276.H, "Header").$$render($$result, {}, {}, {})}
<section id="${"heading"}"><h1>Velkommen Stefan</h1></section>

<section id="${"section-1"}" class="${"svelte-p6687s"}">${(0, import_index_e03aaaec.v)(import_Kontooversigt_svelte.default, "Kontooversigt").$$render($$result, {}, {}, {})}
	<div class="${"container svelte-p6687s"}"><a href="${"/"}">Afbestilling af ordre</a>
		<div id="${"order"}"${(0, import_index_e03aaaec.b)(($page.url.pathname === "/order" ? "active" : "").trim())}><a id="${"knap"}" sveltekit:prefetch href="${"/order"}">+ Tilf\xF8j ordre</a></div></div></section>
<section id="${"section-2"}" class="${"svelte-p6687s"}"><div class="${"container svelte-p6687s"}"><div class="${""}"><h2>Bestilling og abonnement</h2>
			<br>
			<p class="${"svelte-p6687s"}">Hos os har du to forskellige muligheder for bestilling af madpakke til dit barn: <br>
				<span class="${"svelte-p6687s"}">1. Fast abonnement</span> Ved k\xF8b af fast abonnement, vil dit barn helt automatisk f\xE5
				leveret skolemad hver m\xE5ned. Du kan altid afbestille abonnementet i din ordrehistorik.
				<br>
				<span class="${"svelte-p6687s"}">2. M\xE5nedlig bestilling </span>V\xE6lg \xE9n eller flere specifikke m\xE5neder, hvor dit barn
				skal have leveret skolemad.
			</p></div>

		<div class="${""}"><img src="${"mad.jpg"}" alt="${"mad"}" class="${"svelte-p6687s"}"></div></div></section>

<section id="${"section-3"}" class="${"svelte-p6687s"}"><h2>Denne m\xE5neds madplan</h2>
	${(0, import_index_e03aaaec.v)(import_Madplan_svelte.default, "Madplan").$$render($$result, {}, {}, {})}
	<div class="${"container svelte-p6687s"}"><div class="${"flex"}"><h4>Har dit barn allergener eller bestemte kostvaner?</h4>
			<img src="${"pil-madplan.svg"}" alt="${"pil"}"></div>
		<br>
		<div class="${"ikoner svelte-p6687s"}"><div class="${"flex"}"><img src="${"glutenikon.svg"}" alt="${"glutenfri"}">
				<p>- Glutenfri</p></div>
			<div class="${"flex"}"><img src="${"vegetarikon.svg"}" alt="${"glutenfri"}">
				<p>- Vegetarisk</p></div>
			<div class="${"flex"}"><img src="${"m\xE6lkikon.svg"}" alt="${"glutenfri"}">
				<p>- Laktosefri</p></div>
			<div class="${"flex"}"><img src="${"n\xF8dikon.svg"}" alt="${"glutenfri"}">
				<p>- N\xF8ddefri</p></div></div></div></section>

<section id="${"section-4"}" class="${"svelte-p6687s"}"><div class="${"container svelte-p6687s"}"><div class="${""}"><h2>Leverand\xF8r til Kalvebod F\xE6lled Skole</h2>
			<br>
			<h3>Madskolen SMAG</h3>
			<p class="${"svelte-p6687s"}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dicta vel quos! Quidem
				deleniti dolorum quo debitis enim, at id eius autem, sed omnis et ullam a molestias voluptas
				numquam, eveniet culpa rerum recusandae maiores laborum dignissimos nihil! Itaque, repellat
				ducimus minus reiciendis architecto non eum quis quas porro blanditiis?
			</p></div>

		<div class="${""}"><img src="${"mad.jpg"}" alt="${"mad"}" class="${"svelte-p6687s"}"></div></div>
</section>`;
});
