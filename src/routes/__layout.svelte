<script>
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";
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
        <Footer />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
	:global(html, body) {
		font-family: 'Outfit', Arial, sans-serif;
		background: #fff8dd;
        padding-left: 0.25em;
        padding-top: 0;
        margin: 0;
    }
    :global()::selection {
        background: #69517D;
        color: white;
    }
    :global()::-webkit-scrollbar {
        background: transparent;
        width: 0.75rem;
    }
    :global()::-webkit-scrollbar-thumb {
        background: #939CA8;
    }
    aside {
        left: 1.5%;
        top: 2%;
        max-width: 7%;
        position: fixed;
    }
    .main-panel {
        margin: 2em 20%;
    }
</style>
