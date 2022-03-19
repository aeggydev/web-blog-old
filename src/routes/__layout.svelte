<script>
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="grid">
	<aside>
		<Nav />
	</aside>
	<div class="main-panel">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
	:global(html, body) {
		font-family: 'Outfit', sans-serif;
		background: #fff8dd;
        padding-left: 0.25em;
        padding-top: 0;
        margin: 0;
	}
    aside {
        left: 1.5%;
        top: 2%;
        max-width: 7%;
        position: fixed;
    }
    .main-panel {
        padding-top: 2em;
    }
</style>
