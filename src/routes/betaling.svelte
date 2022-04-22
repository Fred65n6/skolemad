<script>
	import { page } from '$app/stores';
	import Header from '../lib/header/Header-2.svelte';
</script>

<Header />

<section id="section-1">
	<div class="sti text-sm breadcrumbs center">
		<ul>
			<li><a href="*">Bestilling</a></li>
			<li class="aktiv"><a href="*">Betaling</a></li>
			<li><a href="*">Bestilling udført</a></li>
		</ul>
	</div>

	<h1>Bestillingsoversigt</h1>
</section>
<section id="section-2">
	<div class="container-left ">
		<div class="form">
			<h3 class="text-center">Kontooplysninger</h3>
			<input type="username" id="username" name="phone" placeholder="Navn" />
			<input type="password" id="kodeord" name="kodeord" placeholder="Efternavn" />
			<input type="username" id="username" name="phone" placeholder="Adresse" />
			<div class="flex">
				<input type="password" id="kodeord" name="kodeord" placeholder="Postnummer" />
				<input type="password" id="kodeord" name="kodeord" placeholder="By" />
			</div>
			<input type="password" id="kodeord" name="kodeord" placeholder="Land" />
			<input type="password" id="kodeord" name="kodeord" placeholder="Email" />
		</div>
		<div class="form">
			<h3 class="text-center">Dine kortoplysninger</h3>
			<input type="username" id="username" name="phone" placeholder="Kortnummer" />
			<div class="flex">
				<input type="password" id="kodeord" name="kodeord" placeholder="MM/YY" />
				<input type="password" id="kodeord" name="kodeord" placeholder="CVC" />
			</div>
		</div>
	</div>

	<div class="container-right">
		<div class="pb-96">
			<h3>Din ordre</h3>
			<br />
			<p class="font-bold">Alle konti</p>

			<p>Måned (MARTS)</p>
			<p>Fast Abonnoment</p>
			<hr />
			<div class="flex space-x-36">
				<p class="font-semibold">TOTAL</p>
				<p>696kr ,-</p>
			</div>
		</div>
		<div class="text-center">
			<a href="/">+ Tilføj flere ordre</a>
			<p class="italic pt-4 pb-6">Eller</p>
			<div id="complete" class:active={$page.url.pathname === '/complete'}>
				<a id="knap" sveltekit:prefetch href="/complete">Fuldfør ordre</a>
			</div>
		</div>
	</div>
</section>

<style>
	#section-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.container-left {
		width: 100%;
	}

	.form {
		width: 100%;
		padding: 3rem;
		margin-bottom: 3rem;
		/* box-shadow: 4px 4px 4px rgb(94, 94, 94); */
		background-color: #ededed;
		width: auto;
		border-radius: 12px;
		display: grid;
		gap: 20px;
	}

	input {
		width: 100%;
		margin: 0.5rem;
		padding-inline: 2rem;
		padding-block: 1rem;
		border-radius: 12px;
	}

	.sti {
		text-transform: uppercase;
		font-weight: 500;
		padding-bottom: 4rem;
	}

	.aktiv a {
		text-decoration: underline;
		color: #648807;
	}
	.container-right {
		align-self: start;
		text-align: left;
		gap: 20px;
		background-color: #ededed;
		border-radius: 12px;
		padding-inline: 6rem;
		padding-block: 2rem;
	}
</style>
