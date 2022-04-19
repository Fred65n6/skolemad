<script>
	import { page } from '$app/stores';
	import Header from '../lib/header/Header-2.svelte';
</script>

<Header />

<section id="section-1">
	<div class="sti text-sm breadcrumbs center">
		<ul>
			<li><a href="*">Bestilling</a></li>
			<li><a href="*">Betaling</a></li>
			<li class="aktiv"><a href="*">Bestilling udført</a></li>
		</ul>
	</div>

	<section id="section-0">
		<h1>Tak for din bestilling</h1>

		<p>
			Tak for at bestille dine børns madpakker her hos SkoleMad.dk. Vi har modtaget din ordre og
			madpakkerne vil blive leveret til Kalvebod Fælled Skole pr. 1. februar. Vi håber dine børn
			bliver glade for deres madpakker, God dag, SkoleMad.dk
		</p>
	</section>
</section>

<section id="section-2">
	<div class="container-left ">
		<div class="form">
			<h3 class="text-center">Dine Kontooplysninger</h3>
			<div class="">
				<h4>Ordernummer</h4>
				<p>578023524</p>
			</div>
			<div class="">
				<h4>Orderdato</h4>
				<p>15. februar 2022</p>
			</div>
			<div class="">
				<h4>Navn</h4>
				<p>Stefan Grage</p>
			</div>
			<div class="">
				<h4>Email</h4>
				<p>Stefan@gmail.com</p>
			</div>
		</div>
	</div>

	<div class="container-right">
		<div class="form">
			<h3 class="text-center">Dine Kontooplysninger</h3>
			<div class="">
				<h4>Hjemmeadresse</h4>
				<p>
					Stefan Grage <br /> Nørrebrogade 66C, 2.3 <br /> 2200 København N <br />
					Danmark
				</p>
			</div>
			<div class="">
				<h4>Leveringsadresse</h4>
				<p>
					Kalvebod Fælled Skole <br />
					Else Alfelts Vej 2 <br />
					2300 København S <br />
					Danmark
				</p>
			</div>
			<div class="">
				<h4>Modtager</h4>
				<p>
					Mikka Grage <br />
					Felix Grage
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	#section-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}

	.container-left,
	.container-right {
		width: 100%;
		align-self: start;
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

	p {
		background-color: white;
		color: black;
		border-radius: 12px;
		text-align: left;
		padding: 0.5rem;
	}

	h4 {
		text-align: left;
		font-weight: 500;
	}

	p {
		max-width: 700px;
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
</style>
