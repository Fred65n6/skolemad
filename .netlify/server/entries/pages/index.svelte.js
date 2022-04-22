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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var import_Hero_svelte = __toESM(require("./Hero.svelte.js"));
const css$1 = {
  code: "header.svelte-1jgkg7r.svelte-1jgkg7r{position:fixed;z-index:2;width:100%;padding-inline:2rem;padding-block:0.5rem;display:flex;justify-content:space-between;background-color:rgba(255, 255, 255, 0.7)}.corner.svelte-1jgkg7r a.svelte-1jgkg7r{display:flex;align-items:center;justify-content:center;width:100%;height:100%}#knap.svelte-1jgkg7r.svelte-1jgkg7r{font-size:0.8rem}.corner.svelte-1jgkg7r img.svelte-1jgkg7r{width:auto;height:2rem;object-fit:contain}nav.svelte-1jgkg7r.svelte-1jgkg7r{display:flex;justify-content:center}ul.svelte-1jgkg7r.svelte-1jgkg7r{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none}nav.svelte-1jgkg7r a.svelte-1jgkg7r{display:flex;height:100%;align-items:center;padding:0 1em;color:black;font-weight:500;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}li.svelte-1jgkg7r a.svelte-1jgkg7r:hover{color:black;text-decoration:underline}",
  map: null
};
const Header = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-1jgkg7r"}"><div class="${"corner svelte-1jgkg7r"}"><a href="${"/"}" class="${"svelte-1jgkg7r"}"><img src="${"logo.png"}" alt="${"logo"}" class="${"svelte-1jgkg7r"}"></a></div>

	<nav class="${"svelte-1jgkg7r"}"><ul class="${"svelte-1jgkg7r"}"><li class="${["svelte-1jgkg7r", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1jgkg7r"}">For for\xE6ldre</a></li>
			<li class="${["svelte-1jgkg7r", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1jgkg7r"}">For skoler</a></li>
			<li class="${["svelte-1jgkg7r", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1jgkg7r"}">For leverand\xF8re</a></li>
			<li class="${["svelte-1jgkg7r", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1jgkg7r"}">Kontakt</a></li>

			<li id="${"user-page"}" class="${["svelte-1jgkg7r", $page.url.pathname === "/user-page" ? "active" : ""].join(" ").trim()}"><a id="${"knap"}" sveltekit:prefetch href="${"/user-page"}" class="${"svelte-1jgkg7r"}">Opret bruger</a></li></ul></nav>
</header>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-hi8q01.svelte-hi8q01,h3.svelte-hi8q01.svelte-hi8q01,h4.svelte-hi8q01.svelte-hi8q01{margin-block:2rem}#section-1.svelte-hi8q01.svelte-hi8q01{margin:0 auto;grid-template-columns:1fr 1fr;padding-bottom:4rem}#knap.svelte-hi8q01.svelte-hi8q01{margin-block:2rem}#section-1.svelte-hi8q01 img.svelte-hi8q01{width:400px}.container-left.svelte-hi8q01.svelte-hi8q01{max-width:600px;display:grid;place-items:center}#section-2.svelte-hi8q01.svelte-hi8q01{color:#007283;justify-items:center;place-items:center;display:flex;padding-top:14rem;padding-bottom:14rem;background-image:url(./blue-bg.svg);background-size:cover;width:100%}#section-2.svelte-hi8q01 .container.svelte-hi8q01{display:grid;place-items:center}#section-2.svelte-hi8q01 img.svelte-hi8q01{width:50px}.collage.svelte-hi8q01.svelte-hi8q01{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.collage.svelte-hi8q01 img.svelte-hi8q01{height:300px;width:450px;object-fit:cover}.info-box.svelte-hi8q01.svelte-hi8q01{margin-bottom:6rem;top:20;position:absolute;z-index:1;text-align:center;padding:1.5rem;color:#007283;width:200px;height:auto;background-color:#ededed;border-radius:12px}#section-4.svelte-hi8q01.svelte-hi8q01{color:#007283;display:flex;padding-top:14rem;padding-bottom:14rem;background-image:url(./blue-bg.svg);background-size:cover}#section-4.svelte-hi8q01 .container.svelte-hi8q01{margin:0 auto}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>SkoleMad.dk</title>`, ""}`, ""}

${(0, import_index_e03aaaec.v)(Header, "Header").$$render($$result, {}, {}, {})}

${(0, import_index_e03aaaec.v)(import_Hero_svelte.default, "Hero").$$render($$result, {}, {}, {})}

<section id="${"section-1"}" class="${"svelte-hi8q01"}"><div class="${"container-left svelte-hi8q01"}"><h2 class="${"svelte-hi8q01"}">Velkommen til SkoleMad.dk</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam expedita, dicta ipsum,
			facilis possimus adipisci saepe fuga voluptatum minima accusamus debitis placeat ullam dolorum
			excepturi quia error quod. Optio eaque dolorem tempora, recusandae cupiditate odit eum
			ratione! Autem provident aspernatur ipsam excepturi officia velit repudiandae perspiciatis?
			<br> <br>
			Distinctio itaque quasi delectus! Ea, illum. Accusamus sequi voluptates natus ipsam debitis deleniti
			quaerat optio molestias magni eaque quidem quia, at provident sint animi id aliquid? Soluta, ea?
		</p>
		</div>

	<img src="${"./mad.jpg"}" alt="${""}" class="${"svelte-hi8q01"}"></section>

<section id="${"section-2"}" class="${"svelte-hi8q01"}"><div class="${"container svelte-hi8q01"}"><img src="${"skole.png"}" alt="${""}" class="${"svelte-hi8q01"}">
		<h3 class="${"svelte-hi8q01"}">397</h3>
		<p>Skoler, institioner og firmaer</p></div>
	<div class="${"container svelte-hi8q01"}"><img src="${"./bestik.png"}" alt="${""}" class="${"svelte-hi8q01"}">
		<h3 class="${"svelte-hi8q01"}">51</h3>
		<p>K\xF8kkener</p></div>
	<div class="${"container svelte-hi8q01"}"><img src="${"./users.png"}" alt="${""}" class="${"svelte-hi8q01"}">
		<h3 class="${"svelte-hi8q01"}">141.796</h3>
		<p>Brugere</p></div>
	<div class="${"container svelte-hi8q01"}"><img src="${"apple.png"}" alt="${""}" class="${"svelte-hi8q01"}">
		<h3 class="${"svelte-hi8q01"}">65.209</h3>
		<p>Gennemsnitlige antal portioner dagligt</p></div></section>
<section id="${"section-3"}"><div class="${"info-box svelte-hi8q01"}"><h4 class="${"svelte-hi8q01"}">Stort udvalg af sunde og l\xE6kre retter</h4></div>
	<div class="${"collage svelte-hi8q01"}"><img src="${"mad-collage-1.jpg"}" alt="${""}" class="${"svelte-hi8q01"}">
		<img src="${"mad-collage-2.jpg"}" alt="${""}" class="${"svelte-hi8q01"}">
		<img src="${"mad-collage-3.jpg"}" alt="${""}" class="${"svelte-hi8q01"}">
		<img src="${"mad-collage-4.jpg"}" alt="${""}" class="${"svelte-hi8q01"}"></div>
	<a id="${"knap"}" href="${"/"}" class="${"svelte-hi8q01"}">Kontakt os og h\xF8r mere</a></section>

<section id="${"section-4"}" class="${"svelte-hi8q01"}"><div class="${"container svelte-hi8q01"}"><h3 class="${"svelte-hi8q01"}">Torben, For\xE6ldre</h3>
		<p>- &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at eveniet odit quaerat,
			fugiat animi, veritatis doloremque ea sit amet similique corporis veniam recusandae sint?&quot;
		</p></div>
	<div class="${"container svelte-hi8q01"}"><h3 class="${"svelte-hi8q01"}">Sille, Elev</h3>
		<p>- &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at eveniet odit quaerat,
			fugiat animi, veritatis doloremque ea sit amet similique corporis veniam recusandae sint?&quot;
		</p></div>
	<div class="${"container svelte-hi8q01"}"><h3 class="${"svelte-hi8q01"}">Birgitte, Kok</h3>
		<p>- &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at eveniet odit quaerat,
			fugiat animi, veritatis doloremque ea sit amet similique corporis veniam recusandae sint?&quot;
		</p></div>
</section>`;
});
