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
	<h1>Se din profil</h1>
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
		</div>

		<div class="container-2">
			<h3>Se eller rediger din profil her</h3>
			<a id="knap" href="*">Gå til profiloversigt</a>
		</div>
	</div>

	<a id="knap" href="*">+ Tilføj barn</a>
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
		padding-top: 5rem;
		padding-bottom: 5rem;
		color: white;
		width: 100%;
		background-image: url(./green-bg.svg);
		background-size: cover;
	}
	#parent {
		padding-top: 3.5rem;
		align-items: center;
		display: flex;
		place-content: center;
		gap: 20rem;
	}

	.container-1 a {
		font-size: 1.5rem;
	}

	.container-1 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
	}

	.container-2 {
		display: grid;
		gap: 50px;
	}

	.abonnomenter {
		gap: 50px;
		display: grid;
	}
	.børn {
		gap: 50px;
		display: grid;
	}

	.container-1 h3 {
		text-decoration: underline;
	}

	.aktiv {
		color: green;
	}

	.inaktiv {
		color: red;
	}

	a:hover {
		text-decoration: underline;
	}

	#section-2 .container {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
	}

	#section-2 img {
		width: auto;
		height: 500px;
		-webkit-transform: rotate(-90deg);
		-moz-transform: rotate(-90deg);
		-o-transform: rotate(-90deg);
		-ms-transform: rotate(-90deg);
		transform: rotate(-90deg);
		box-shadow: -3px -3px 4px rgb(59, 59, 59);
	}

	#section-2 p {
		max-width: 500px;
	}
</style>
