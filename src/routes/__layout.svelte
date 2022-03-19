<script>
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<aside>
	<Nav />
</aside>
<div class="main-panel">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
	:global(html, body) {
		font-family: 'Outfit', Arial, sans-serif;
		background: #fff8dd;
		padding-left: 0.25em;
		padding-top: 0;
		margin: 0;
		min-height: 100vh;
	}
	:global() {
		&::selection {
			background: #69517d;
			color: white;
		}
		&::-webkit-scrollbar {
			background: transparent;
			width: 0.75rem;
		}
		&::-webkit-scrollbar-thumb {
			background: #939ca8;
		}
	}
	aside {
		left: 1.5%;
		top: 2%;
		max-width: 7%;
		position: fixed;
	}
	.main-panel {
		min-height: 100vh;
		display: grid;
		grid-auto-rows: auto 1fr auto;
		padding: 0 20%;
	}
</style>
