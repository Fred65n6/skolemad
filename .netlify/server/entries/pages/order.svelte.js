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
  default: () => Order
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_64a5d276 = require("../../chunks/Header-2-64a5d276.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var order_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sti.svelte-g770wa.svelte-g770wa{text-transform:uppercase;font-weight:500;padding-bottom:4rem}#section-1.svelte-g770wa p.svelte-g770wa{text-align:center}span.svelte-g770wa.svelte-g770wa{color:red}#section-2.svelte-g770wa.svelte-g770wa{display:grid;grid-template-columns:1fr 1fr 1fr}h4.svelte-g770wa.svelte-g770wa{font-weight:500}.container.svelte-g770wa.svelte-g770wa{text-align:left;gap:20px;background-color:#ededed;border-radius:12px;padding-inline:6rem;padding-block:2rem}.container-right.svelte-g770wa.svelte-g770wa{height:100%;text-align:left;gap:20px;background-color:#ededed;border-radius:12px;padding-inline:6rem;padding-block:2rem}.aktiv.svelte-g770wa a.svelte-g770wa{text-decoration:underline;color:#648807}.form-control.svelte-g770wa.svelte-g770wa{color:black}",
  map: null
};
const Order = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${(0, import_index_e03aaaec.v)(import_Header_2_64a5d276.H, "Header").$$render($$result, {}, {}, {})}

<section id="${"section-1"}" class="${"svelte-g770wa"}"><div class="${"sti text-sm breadcrumbs center svelte-g770wa"}"><ul><li class="${"aktiv svelte-g770wa"}"><a href="${"/"}" class="${"svelte-g770wa"}">Bestilling</a></li>
			<li><a href="${"/"}">Betaling</a></li>
			<li><a href="${"/"}">Bestilling udf\xF8rt</a></li></ul></div>

	<h1>Bestillingsoversigt</h1>
	<p class="${"svelte-g770wa"}">F\xF8lg de 3 trin for at afl\xE6gge din ordre. <br>
		<span class="${"svelte-g770wa"}">Obs!</span> Bestilling skal afl\xE6gges senest d. 20. i m\xE5neden, hvis dit barn skal modtage
		<br> mad i efterf\xF8lgende m\xE5ned.
	</p></section>

<section id="${"section-2"}" class="${"svelte-g770wa"}"><div class="${"parent grid gap-8 col-span-2"}"><div class="${"container svelte-g770wa"}"><div class="${"grid gap-8 "}"><h3>1. Abonnementstype <span class="${"svelte-g770wa"}">*</span></h3>
				<h4 class="${"svelte-g770wa"}">Mikka Grage</h4>
				<div class="${"flex gap-4 "}"><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2 my-4"}">Fast m\xE5nedligt abonnoment <span class="${"svelte-g770wa"}">*</span></div>
							<input type="${"checkbox"}" class="${"checkbox"}"></label></div>
					<div class="${"form-control svelte-g770wa"}">
						<label class="${"label cursor-pointer"}"><div class="${"mx-2"}">K\xF8b mdr. <span class="${"svelte-g770wa"}">**</span></div>
							<div class="${"dropdown"}">
								<label tabindex="${"0"}" id="${"knap "}" class="${"btn m-2 bg-[#80b103] hover:bg-[#648807] hover:decoration-solid border-0 rounded-3xl "}">V\xE6lg
								</label>
								<ul tabindex="${"0"}" class="${"dropdown-content menu shadow bg-base-100 rounded-box w-96 grid grid-cols-2"}"><li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Marts</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">April</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Maj</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Juni</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Juli</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li></ul></div></label></div>
					<div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2 my-4"}">ingen</div>
							<input type="${"checkbox"}" checked="${"checked"}" class="${"checkbox"}"></label></div></div>
				<h4 class="${"svelte-g770wa"}">Felix Grage</h4>
				<div class="${"flex gap-4 "}"><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2 my-4"}">Fast m\xE5nedligt abonnoment <span class="${"svelte-g770wa"}">*</span></div>
							<input type="${"checkbox"}" class="${"checkbox"}"></label></div>
					<div class="${"form-control svelte-g770wa"}">
						<label class="${"label cursor-pointer"}"><div class="${"mx-2"}">K\xF8b mdr. <span class="${"svelte-g770wa"}">**</span></div>
							<div class="${"dropdown"}">
								<label tabindex="${"0"}" class="${"btn m-1 bg-[#80b103] hover:bg-[#648807] hover:decoration-solid border-0 rounded-3xl "}">V\xE6lg
								</label>
								<ul tabindex="${"0"}" class="${"dropdown-content menu shadow bg-base-100 rounded-box w-96 grid grid-cols-2"}"><li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Marts</div>
												<input type="${"checkbox"}" checked="${"checked"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">April</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Maj</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Juni</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li>
									<li><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Juli</div>
												<input type="${"checkbox"}" class="${"checkbox"}"></label></div></li></ul></div></label></div>
					<div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2 my-4"}">ingen</div>
							<input type="${"checkbox"}" class="${"checkbox"}"></label></div></div></div></div>
		<div class="${"container svelte-g770wa"}"><div class="${"grid gap-8"}"><h3>2. V\xE6lg menu<span class="${"svelte-g770wa"}">*</span></h3>
				<h4 class="${"svelte-g770wa"}">Mikka Grage</h4>
				<div class="${"flex gap-4"}"><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Almindelig</div>
							<input type="${"checkbox"}" checked="${"checked "}" class="${"checkbox text-green-800 "}"></label></div>
					<div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Vegetar</div>
							<input type="${"checkbox"}" class="${"checkbox"}"></label></div></div>
				<h4 class="${"svelte-g770wa"}">Felix Grage</h4>
				<div class="${"flex gap-4"}"><div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Almindelig</div>
							<input type="${"checkbox"}" class="${"checkbox"}"></label></div>
					<div class="${"form-control svelte-g770wa"}"><label class="${"label cursor-pointer"}"><div class="${"mx-2"}">Vegetar</div>
							<input type="${"checkbox"}" checked="${"checked"}" class="${"checkbox"}"></label></div></div></div></div></div>

	<div class="${"container-right svelte-g770wa"}"><div class="${"pb-96"}"><h3>Din ordre</h3>
			<br>
			<p class="${"font-bold"}">Alle konti</p>

			<p>M\xE5ned (MARTS)</p>
			<p>Fast Abonnoment</p>
			<hr>
			<div class="${"flex space-x-36"}"><p class="${"font-semibold"}">TOTAL</p>
				<p>696kr ,-</p></div></div>
		<div class="${"text-center"}"><a href="${"/"}">+ Tilf\xF8j flere ordre</a>
			<p class="${"italic pt-4 pb-6"}">Eller</p>
			<div id="${"betaling"}"${(0, import_index_e03aaaec.b)(($page.url.pathname === "/betaling" ? "active" : "").trim())}><a id="${"knap"}" sveltekit:prefetch href="${"/betaling"}">G\xE5 til betaling</a></div></div></div>
</section>`;
});
