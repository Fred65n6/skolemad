<footer>
	<div class="section-1">
		<h3>Kontakt</h3>
		<div class="container flex">
			<img src="telefon.png" alt="telefon" />
			<p>2290 1244</p>
		</div>
		<div class="container flex">
			<img src="mail.png" alt="mail" />
			<p>skolemad@kk.dk</p>
		</div>
	</div>
	<div class="section-2">
		<h3>Links</h3>
		<div class="container flex">
			<img src="pil.png" alt="telefon" />
			<a href="*">Vilkår</a>
		</div>
		<div class="container flex">
			<img src="pil.png" alt="telefon" />
			<a href="*">Privatlivspolitik</a>
		</div>
		<div class="container flex">
			<img src="pil.png" alt="telefon" />
			<a href="*">FAQ</a>
		</div>
	</div>
	<div class="logo">
		<img src="skolemad_logo.png" alt="logo" />
	</div>
</footer>

<style>
	Footer {
		margin-top: 2rem;
		padding-block: 5rem;
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: #f0f0f0;
		gap: 20px;
	}

	.container {
		place-items: center;
		display: flex;
		gap: 20px;
		margin-block: 1rem;
	}

	.section-1 img {
		width: auto;
		height: 20px;
	}

	.logo {
		width: 50%;
	}
</style>
