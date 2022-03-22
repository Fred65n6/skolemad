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
</script>

<svelte:head>
	<title>SkoleMad.dk</title>
</svelte:head>

<section id="heading">
	<h1>Velkommen til Stefan</h1>
</section>

<section id="section-1">
	<h2>Se din profil</h2>
	<div id="parent">
		<div class="container-1">
			<div class="">
				<div class="børn">
					<h3>Børn</h3>
					<h4>Mikka Grage</h4>
					<h4>Felix Grage</h4>
				</div>
			</div>

			<div class="abonnomenter">
				<h3>Abonnomenter</h3>
				<a class="aktiv" href="*">Aktiv</a>
				<a class="inaktiv" href="*">Inaktiv</a>
			</div>
			<!-- <a id="knap" href="*">+ Tilføj barn</a> -->
		</div>

		<div class="container-2">
			<div class="grid place-items-center">
				<div class="flex">
					<h3>Se eller rediger din profil her</h3>
					<img class="pil pt-9	" src="./pil.svg" alt="pil" />
				</div>
				<a id="knap" href="*">Gå til profiloversigt</a>
			</div>
		</div>
	</div>
</section>

<section id="section-2">
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
	#section-1 {
		padding-top: 6rem;
		padding-bottom: 12rem;
		color: white;
		width: 100%;
		background-image: url(./green-bg.svg);
		background-size: cover;
	}
	#parent {
		margin: 0 auto;
		padding-top: 2rem;
		display: flex;
		gap: 20rem;
	}

	.container-1 {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.container-1 #knap {
		font-size: 1rem;
		position: relative;
		left: 3rem;
		top: 2rem;
	}

	.abonnomenter {
		gap: 30px;
		display: grid;
	}
	.børn {
		gap: 30px;
		display: grid;
	}

	.aktiv {
		color: green;
		font-size: 1.2rem;
	}

	.inaktiv {
		color: red;
		font-size: 1.2rem;
	}

	a:hover {
		text-decoration: underline;
	}

	#section-2 .container {
		margin: 0 auto;
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
	}

	#section-2 img {
		width: auto;
		height: 500px;
		transform: rotate(90deg);
		/* box-shadow: -3px 3px 4px rgb(59, 59, 59); */
	}

	#section-2 p {
		max-width: 500px;
	}
</style>
