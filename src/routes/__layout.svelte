<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
    <link rel="stylesheet" href="/prism.css">
</svelte:head>
    <div class="content">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>

<style lang="scss">
  :global(body) {
    overflow-y: scroll;
  }

  :global {
    &::selection {
      background: #69517d;
      color: white;
    }
  }

  main {
    overflow-x: hidden;
  }

  .content {
    grid-column: 2;

    display: grid;
    grid-template-rows: auto 1fr auto;

    min-height: 100vh;
    padding: 0 1.25rem;
    @media (min-width: 768px) {
      padding: 0 20vw;
    }
  }

</style>
