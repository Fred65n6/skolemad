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
  H: () => Header_2
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("./index-e03aaaec.js");
var import_stores_5fe3ad3b = require("./stores-5fe3ad3b.js");
var Header2_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1oc4zqo.svelte-1oc4zqo.svelte-1oc4zqo{position:fixed;z-index:2;width:100%;padding-inline:2rem;padding-block:0.5rem;display:flex;justify-content:space-between;background-color:rgba(255, 255, 255, 0.728)}.corner.svelte-1oc4zqo a.svelte-1oc4zqo.svelte-1oc4zqo{display:flex;align-items:center;justify-content:center;width:100%;height:100%}#knap.svelte-1oc4zqo.svelte-1oc4zqo.svelte-1oc4zqo{font-size:0.8rem}.corner.svelte-1oc4zqo img.svelte-1oc4zqo.svelte-1oc4zqo{width:auto;height:2rem;object-fit:contain}nav.svelte-1oc4zqo.svelte-1oc4zqo.svelte-1oc4zqo{display:flex;justify-content:center}ul.svelte-1oc4zqo.svelte-1oc4zqo.svelte-1oc4zqo{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none}nav.svelte-1oc4zqo a.svelte-1oc4zqo.svelte-1oc4zqo{display:flex;height:100%;align-items:center;padding:0 1em;color:black;font-weight:500;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}li.svelte-1oc4zqo a.svelte-1oc4zqo.svelte-1oc4zqo:hover{color:black;text-decoration:underline}nav.svelte-1oc4zqo ul ul.svelte-1oc4zqo.svelte-1oc4zqo{display:none;position:absolute;top:60px}nav.svelte-1oc4zqo ul li.svelte-1oc4zqo:hover>ul.svelte-1oc4zqo{display:inherit}nav.svelte-1oc4zqo ul ul li.svelte-1oc4zqo.svelte-1oc4zqo{width:170px;float:none;display:list-item;position:relative}nav.svelte-1oc4zqo ul ul ul li.svelte-1oc4zqo.svelte-1oc4zqo{position:relative;top:-60px;left:170px}li.svelte-1oc4zqo>a.svelte-1oc4zqo.svelte-1oc4zqo:after{content:' +'}li.svelte-1oc4zqo>a.svelte-1oc4zqo.svelte-1oc4zqo:only-child:after{content:''}",
  map: null
};
const Header_2 = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"svelte-1oc4zqo"}"><div class="${"corner svelte-1oc4zqo"}"><a href="${"/"}" class="${"svelte-1oc4zqo"}"><img src="${"logo.png"}" alt="${"logo"}" class="${"svelte-1oc4zqo"}"></a></div>

	<nav class="${"svelte-1oc4zqo"}"><ul class="${"svelte-1oc4zqo"}"><li class="${"dropdown dropdown-hover svelte-1oc4zqo"}"><div tabindex="${"0"}" id="${"knap"}" class="${"btn border-none m-1 svelte-1oc4zqo"}">PROFIL +</div>
				<ul tabindex="${"0"}" class="${"dropdown-content menu p-8 text-center shadow bg-base-100 rounded-box w-52 svelte-1oc4zqo"}"><li class="${"svelte-1oc4zqo"}"><a href="${"/"}" class="${"svelte-1oc4zqo"}">Item 1</a></li>
					<li class="${"svelte-1oc4zqo"}"><a href="${"/"}" class="${"svelte-1oc4zqo"}">Item 2</a></li></ul></li>
			<li class="${["svelte-1oc4zqo", $page.url.pathname === "*" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1oc4zqo"}">Bestil</a></li>

			<li class="${["svelte-1oc4zqo", $page.url.pathname === "*" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1oc4zqo"}">FAQ</a></li>
			<li class="${["svelte-1oc4zqo", $page.url.pathname === "*" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1oc4zqo"}">Kontakt</a></li></ul></nav>
</header>`;
});
