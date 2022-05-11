<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
    <link rel="stylesheet" href="/prism.css">
</svelte:head>
<div class="main-panel">
    <div class="content">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
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
    overflow-y: scroll;
  }

  :global {
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

  main {
    overflow-x: scroll;
  }

  .content {
    grid-column: 2;

    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .main-panel {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
</style>
