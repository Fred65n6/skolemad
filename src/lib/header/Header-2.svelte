<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src="./skolemad_logo.png" alt="logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li class="dropdown dropdown-hover">
				<label tabindex="0" id="knap" class="btn border-none m-1">PROFIL +</label>
				<ul
					tabindex="0"
					class="dropdown-content menu p-8 text-center shadow bg-base-100 rounded-box w-52"
				>
					<li><a>Item 1</a></li>
					<li><a>Item 2</a></li>
				</ul>
			</li>
			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">Bestil</a>
			</li>

			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">FAQ</a>
			</li>
			<li class:active={$page.url.pathname === '*'}>
				<a sveltekit:prefetch href="/">Kontakt</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		z-index: 2;
		width: 100%;
		padding-inline: 2rem;
		padding-block: 0.5rem;
		display: flex;
		justify-content: space-between;
		background-color: rgba(255, 255, 255, 0.728);
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	#knap {
		font-size: 0.8rem;
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
		color: black;
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

	nav ul ul {
		display: none;
		position: absolute;
		top: 60px; /* the height of the main nav */
	}

	/* Display Dropdowns on Hover */
	nav ul li:hover > ul {
		display: inherit;
	}

	/* Fisrt Tier Dropdown */
	nav ul ul li {
		width: 170px;
		float: none;
		display: list-item;
		position: relative;
	}

	/* Second, Third and more Tiers	*/
	nav ul ul ul li {
		position: relative;
		top: -60px;
		left: 170px;
	}

	/* Change this in order to change the Dropdown symbol */
	li > a:after {
		content: ' +';
	}
	li > a:only-child:after {
		content: '';
	}
</style>
