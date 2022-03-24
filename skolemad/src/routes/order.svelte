<script>
	// @ts-nocheck

	import Header from '../lib/header/Header-2.svelte';
	import { page } from '$app/stores';
</script>

<Header />

<section id="section-1">
	<div class="sti text-sm breadcrumbs center">
		<ul>
			<li class="aktiv"><a href="*">Bestilling</a></li>
			<li><a href="*">Betaling</a></li>
			<li><a href="*">Bestilling udført</a></li>
		</ul>
	</div>

	<h1>Bestillingsoversigt</h1>
	<p>
		Følg de 3 trin for at aflægge din ordre. <br />
		<span>Obs!</span> Bestilling skal aflægges senest d. 20. i måneden, hvis dit barn skal modtage
		<br /> mad i efterfølgende måned.
	</p>
</section>

<section id="section-2">
	<div class="parent grid gap-8 col-span-2">
		<div class="container">
			<div class="grid gap-8 ">
				<h3>1. Abonnementstype <span>*</span></h3>
				<h4>Mikka Grage</h4>
				<div class="flex gap-4 ">
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2  my-4">Fast månedligt abonnoment <span>*</span></div>
							<input type="checkbox" class="checkbox" />
						</label>
					</div>
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label cursor-pointer">
							<div class="mx-2">Køb mdr. <span>**</span></div>
							<div class="dropdown">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label
									tabindex="0"
									id="knap "
									class="btn m-2 bg-[#80b103] hover:bg-[#648807] hover:decoration-solid border-0 rounded-3xl "
									>Vælg
								</label>
								<ul
									tabindex="0"
									class="dropdown-content menu  shadow bg-base-100 rounded-box w-96 grid grid-cols-2"
								>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Marts</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">April</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Maj</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Juni</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Juli</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
								</ul>
							</div>
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2  my-4">ingen</div>
							<input type="checkbox" checked="checked" class="checkbox" />
						</label>
					</div>
				</div>
				<h4>Felix Grage</h4>
				<div class="flex gap-4 ">
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2  my-4">Fast månedligt abonnoment <span>*</span></div>
							<input type="checkbox" class="checkbox" />
						</label>
					</div>
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label cursor-pointer">
							<div class="mx-2">Køb mdr. <span>**</span></div>
							<div class="dropdown">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label
									tabindex="0"
									class="btn m-1 bg-[#80b103] hover:bg-[#648807] hover:decoration-solid border-0 rounded-3xl "
									>Vælg
								</label>
								<ul
									tabindex="0"
									class="dropdown-content menu  shadow bg-base-100 rounded-box w-96 grid grid-cols-2"
								>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Marts</div>
												<input type="checkbox" checked="checked" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">April</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Maj</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Juni</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
									<li>
										<div class="form-control">
											<label class="label cursor-pointer">
												<div class="mx-2">Juli</div>
												<input type="checkbox" class="checkbox" />
											</label>
										</div>
									</li>
								</ul>
							</div>
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2  my-4">ingen</div>
							<input type="checkbox" class="checkbox" />
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="grid gap-8">
				<h3>2. Vælg menu<span>*</span></h3>
				<h4>Mikka Grage</h4>
				<div class="flex gap-4">
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2">Almindelig</div>
							<input type="checkbox" checked="checked " class="checkbox text-green-800 " />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2">Vegetar</div>
							<input type="checkbox" class="checkbox" />
						</label>
					</div>
				</div>
				<h4>Felix Grage</h4>
				<div class="flex gap-4">
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2">Almindelig</div>
							<input type="checkbox" class="checkbox" />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="mx-2">Vegetar</div>
							<input type="checkbox" checked="checked" class="checkbox" />
						</label>
					</div>
				</div>
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
			<a href="*">+ Tilføj flere ordre</a>
			<p class="italic pt-4 pb-6">Eller</p>
			<div id="betaling" class:active={$page.url.pathname === '/betaling'}>
				<a id="knap" sveltekit:prefetch href="/betaling">Gå til betaling</a>
			</div>
		</div>
	</div>
</section>

<style>
	.sti {
		text-transform: uppercase;
		font-weight: 500;
		padding-bottom: 4rem;
	}

	#section-1 p {
		text-align: center;
	}

	span {
		color: red;
	}

	#section-2 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	h4 {
		font-weight: 500;
	}

	.container {
		text-align: left;
		gap: 20px;
		background-color: #ededed;
		border-radius: 12px;
		padding-inline: 6rem;
		padding-block: 2rem;
	}

	.container-right {
		height: 100%;
		text-align: left;
		gap: 20px;
		background-color: #ededed;
		border-radius: 12px;
		padding-inline: 6rem;
		padding-block: 2rem;
	}

	.aktiv a {
		text-decoration: underline;
		color: #648807;
	}

	.form-control {
		color: black;
	}
</style>
