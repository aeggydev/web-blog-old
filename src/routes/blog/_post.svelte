<script>
    export let title
    export let date
</script>

<svelte:head>
    <link rel="stylesheet" href="/prism.css">
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
  }

  article :global(pre) {
    font-family: 'Fira Code', Menlo, Monaco, Consolas, Courier New, monospace;
    font-size: 13px;

    overflow-x: auto;
    padding: 1rem;

    border-radius: 0.75rem;
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
