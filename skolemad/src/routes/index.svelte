<script context="module">
	export const prerender = true;
	// @ts-ignore
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>SkoleMad.dk</title>
</svelte:head>

<Hero />

<section id="section-1">
	<div class="container-left">
		<h2>Velkommen til SkoleMad.dk</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam expedita, dicta ipsum,
			facilis possimus adipisci saepe fuga voluptatum minima accusamus debitis placeat ullam dolorum
			excepturi quia error quod. Optio eaque dolorem tempora, recusandae cupiditate odit eum
			ratione! Autem provident aspernatur ipsam excepturi officia velit repudiandae perspiciatis?
			<br /> <br />
			Distinctio itaque quasi delectus! Ea, illum. Accusamus sequi voluptates natus ipsam debitis deleniti
			quaerat optio molestias magni eaque quidem quia, at provident sint animi id aliquid? Soluta, ea?
		</p>
		<a id="knap" href="*">Se prislisten</a>
	</div>

	<img src="./mad.jpg" alt="" />
</section>

<section id="section-2">
	<div class="container">
		<img src="skole.png" alt="" />
		<h3>397</h3>
		<p>Skoler, institioner og firmaer</p>
	</div>
	<div class="container">
		<img src="./bestik.png" alt="" />
		<h3>51</h3>
		<p>Køkkener</p>
	</div>
	<div class="container">
		<img src="./users.png" alt="" />
		<h3>141.796</h3>
		<p>Brugere</p>
	</div>
	<div class="container">
		<img src="apple.png" alt="" />
		<h3>65.209</h3>
		<p>Gennemsnitlige antal portioner dagligt</p>
	</div>
</section>
<section id="section-3">
	<div class="info-box"><h4>Stort udvalg af sunde og lækre retter</h4></div>
	<div class="collage">
		<img src="mad-collage-1.jpg" alt="" />
		<img src="mad-collage-2.jpg" alt="" />
		<img src="mad-collage-3.jpg" alt="" />
		<img src="mad-collage-4.jpg" alt="" />
	</div>
	<a id="knap" href="*">Kontakt os og hør mere</a>
</section>

<section id="section-4">
	<div class="container">
		<h3>Torben, Forældre</h3>
		<p>
			- "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at eveniet odit quaerat,
			fugiat animi, veritatis doloremque ea sit amet similique corporis veniam recusandae sint?"
		</p>
	</div>
	<div class="container">
		<h3>Sille, Elev</h3>
		<p>
			- "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at eveniet odit quaerat,
			fugiat animi, veritatis doloremque ea sit amet similique corporis veniam recusandae sint?"
		</p>
	</div>
	<div class="container">
		<h3>Birgitte, Kok</h3>
		<p>
			- "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at eveniet odit quaerat,
			fugiat animi, veritatis doloremque ea sit amet similique corporis veniam recusandae sint?"
		</p>
	</div>
</section>

<Footer />

<style>
	h2,
	h3,
	h4 {
		margin-block: 2rem;
	}
	#section-1 {
		justify-items: center;
		margin-inline: 5rem;
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
	}
	#section-1 img {
		width: 400px;
		box-shadow: 3px 3px 4px rgb(59, 59, 59);
	}
	.container-left {
		max-width: 600px;
		display: grid;
		place-items: center;
	}

	#section-2 {
		color: white;
		justify-items: center;
		place-items: center;
		display: flex;
		padding-top: 14rem;
		padding-bottom: 15.5rem;
		background-image: url(./green-bg.svg);
		background-repeat: no-repeat;
	}

	#section-2 .container {
		display: grid;
		place-items: center;
	}

	#section-2 img {
		width: 50px;
	}

	.collage {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	.collage img {
		height: 300px;
		width: 450px;
		object-fit: cover;
	}

	.info-box {
		margin-bottom: 6rem;
		top: 20;
		position: absolute;
		z-index: 1;
		text-align: center;
		padding: 1.5rem;
		color: white;
		width: 200px;
		height: auto;
		background-color: #87ae24;
	}

	#section-4 {
		color: white;
		justify-items: center;
		place-items: center;
		display: flex;
		padding-top: 14rem;
		padding-bottom: 14rem;
		background-image: url(./green-bg.svg);
		background-repeat: no-repeat;
	}

	#section-4 p {
		max-width: 400px;
	}
</style>
