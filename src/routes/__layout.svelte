<script lang="ts">
    import {page} from "$app/stores"

    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'

    // Dependency needed to subscribe to url changes
    function makeTitle(dependency: unknown): string {
        let title: string
        console.log(`lol "${$page.url.pathname}"`)
        if ($page.url.pathname === "/") {
            title = "~"
        } else {
            let split = $page.url.pathname
                .split("/")
                .reverse()
                .filter(x => x.length > 0)
                .concat(["~"])
            title = split.join(" / ").trim()
        }

        return title
    }

    $: title = makeTitle($page)
</script>

<svelte:head>
    <title>{title}</title>
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
