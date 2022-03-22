<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	// @ts-ignore

	import Footer from './Footer.svelte';
	import Madplan from './Madplan.svelte';
	import Kontooversigt from './Kontooversigt.svelte';
</script>

<svelte:head>
	<title>SkoleMad.dk</title>
</svelte:head>
<section id="heading"><h1>Velkommen Stefan</h1></section>

<section id="section-1">
	<Kontooversigt />
	<div class="container">
		<a href="*">Afbestilling af ordre</a>
		<a id="knap" href="*">Tilføj ny ordre</a>
	</div>
</section>
<section id="section-2">
	<h2>Leverandør til Kalvebod Fælled Skole</h2>
	<div class="container">
		<div class="">
			<h3>Bestilling og abonnoment</h3>
			<p>
				Hos os har du to forskellige muligheder for bestilling af madpakke til dit barn: <br />
				<span>1. Fast abonnement</span> Ved køb af fast abonnement, vil dit barn helt automatisk få
				leveret skolemad hver måned. Du kan altid afbestille abonnementet i din ordrehistorik.
				<br />
				<span>2. Månedlig bestilling </span>Vælg én eller flere specifikke måneder, hvor dit barn
				skal have leveret skolemad.
			</p>
		</div>

		<div class="">
			<img src="mad.jpg" alt="mad" />
		</div>
	</div>
</section>

<section id="section-3">
	<h2>Denne måneds madplan</h2>
	<Madplan />
</section>

<section id="section-4">
	<h2>Leverandør til Kalvebod Fælled Skole</h2>
	<div class="container">
		<div class="">
			<h3>Madskolen SMAG</h3>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dicta vel quos! Quidem
				deleniti dolorum quo debitis enim, at id eius autem, sed omnis et ullam a molestias voluptas
				numquam, eveniet culpa rerum recusandae maiores laborum dignissimos nihil! Itaque, repellat
				ducimus minus reiciendis architecto non eum quis quas porro blanditiis?
			</p>
		</div>

		<div class="">
			<img src="mad.jpg" alt="mad" />
		</div>
	</div>
</section>

<Footer />

<style>
	#section-1 .container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 50px;
	}

	#section-2 .container {
		margin: 0 auto;
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
	}
	#section-2 p {
		max-width: 500px;
	}

	span {
		font-weight: 500;
		font-size: 1.5rem;
	}

	#section-2 img {
		width: auto;
		height: 500px;
		transform: rotate(90deg);
		/* box-shadow: -3px 3px 4px rgb(59, 59, 59); */
	}

	#section-3 .container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	#section-4 .container {
		margin: 0 auto;
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
	}

	#section-4 img {
		width: auto;
		height: 500px;
		transform: rotate(90deg);
		/* box-shadow: -3px 3px 4px rgb(59, 59, 59); */
	}

	#section-4 p {
		max-width: 500px;
	}
</style>
