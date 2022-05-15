<script lang="ts">
    import {page} from "$app/stores"

    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import {getTheme} from "../lib/colorscheme";

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
    $: theme = getTheme()
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="theme-color" content="#913de6">
</svelte:head>
<!--suppress HtmlUnknownAttribute -->
<div class="content"
     style:--text-color="{theme.textColor}"
     style:--sub-text-color="{theme.subTextColor}"
     style:--accent-text-color="{theme.accentTextColor}"

     style:--link-color="{theme.linkColor}"
     style:--link-hover-color="{theme.linkHoverColor}"

     style:--selection-color="{theme.selectionColor}"
     style:--selection-bg="{theme.selectionBackground}"

     style:--bg="{theme.background}"
     style:--secondary-bg="{theme.secondaryBackground}"

     style:--padding-x-desktop="22.5vw"
>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style lang="scss">
  :global(html, body) {
    margin: 0;
    padding: 0;
  }

  :global(body) {
    overflow-y: scroll;
  }
  main {
    overflow-x: hidden;
  }

  :global {
    &::selection {
      background: var(--selection-bg);
      color: var(--selection-color);
    }
  }

  .content {
    grid-column: 2;

    display: grid;
    grid-template-rows: auto 1fr auto;

    min-height: 100vh;
    padding: 0;

    background: var(--bg);
    :global {
      color: var(--text-color);
    }

    > :global(:first-child) {
      padding-top: 1.5rem;
    }
    > :global(:last-child) {
      padding-bottom: 1.5rem;
    }
    > :global(*) {
      padding: 0.75rem 1.25rem;
      @media (min-width: 768px) {
        padding: 0.75rem var(--padding-x-desktop);
      }
    }
  }
</style>
