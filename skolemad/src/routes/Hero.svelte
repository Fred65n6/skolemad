<script>
	import { page } from '$app/stores';
</script>

<div class="hero">
	<div class="container">
		<h1>Slut med kedelige <br /> madpakker</h1>
		<div class="form">
			<input type="username" id="username" name="phone" placeholder="Brugernavn" />
			<input type="password" id="kodeord" name="kodeord" placeholder="Password" />
			<a class="not-user" href="*">Endnu ikke bruger?</a>
			<div id="knap" class:active={$page.url.pathname === '/user-page'}>
				<a sveltekit:prefetch href="/user-page">Login</a>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: 95vh;
		width: 100%;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)),
			url('./hero.jpg');
		background-size: cover;
	}

	.container {
		padding-block: 8rem;
		text-align: center;
		display: grid;
		place-items: center;
	}

	h1 {
		/* -webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black; */
		text-align: center;
		font-family: Patrick Hand;
		font-style: italic;
		color: white;
		font-size: 5rem;
	}

	.form {
		padding: 1rem;
		margin-top: 2rem;
		/* box-shadow: 4px 4px 4px rgb(94, 94, 94); */
		background-color: #ededed;
		width: auto;
		border-radius: 12px;
		display: grid;
		place-items: center;
		width: 25rem;
	}

	.not-user {
		color: #648807;
		padding-block: 0.5rem;
	}

	input {
		width: 20rem;
		margin: 0.5rem;
		padding: 1rem;
		border-radius: 12px;
	}
</style>
