<script>
    export let title
    export let date
    export let slug
    export let description
</script>

<svelte:head>
    <link rel="stylesheet" href="/prism.css">

    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://tilde.cz/blog/{slug}" />
</svelte:head>
<article>
    <div class="title">{title}</div>

    {#if date}
        <div class="published">{date}</div>
    {/if}

    <slot />
</article>

<style lang="scss">
  article {
    overflow-wrap: break-word;
    color: var(--text-color);
  }

  article :global(pre) {
    font-family: 'Fira Code', Menlo, Monaco, Consolas, Courier New, monospace;
    font-size: 13px;

    overflow-x: auto;
    padding: 1rem;

    border-radius: 0.75rem;
  }

  article :global(a) {
    color: var(--link-color);
    text-decoration-thickness: 2.5px;

  }
  article :global(a):hover {
    background: var(--link-color);
    color: var(--link-hover-color)
  }


  .title {
    font-size: 1.6rem;
    text-decoration: none;
    color: var(--text-color);
  }

  .published {
    color: var(--sub-text-color);
  }
</style>
