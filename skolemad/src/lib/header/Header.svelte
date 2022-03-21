<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src="./logo 1.png" alt="logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">For forældre</a>
			</li>
			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">For skoler</a>
			</li>
			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">For leverandøre</a>
			</li>
			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">Priser</a>
			</li>
			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">Kontakt</a>
			</li>

			<li id="user-page" class:active={$page.url.pathname === '/user-page'}>
				<a sveltekit:prefetch href="/user-page">Opret bruger</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		padding-inline: 2rem;
		padding-block: 0.5rem;
		display: flex;
		justify-content: space-between;
		background-color: #93c0204e;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	#login {
		background-color: #87ae24;
		padding: 0.5rem;
		border-radius: 12px;
		box-shadow: 3px 3px 4px rgb(59, 59, 59);
	}

	.corner img {
		width: auto;
		height: 2rem;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: white;
		font-weight: 500;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	li a:hover {
		color: black;
		text-decoration: underline;
	}
</style>
