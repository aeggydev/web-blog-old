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
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :global(html, body) {
    font-family: 'Fira Sans', sans-serif;
    background: #fff8dd;
    padding-left: 0.25rem;
    padding-top: 0;
    margin: 0;
    min-height: 100vh;
  }

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
