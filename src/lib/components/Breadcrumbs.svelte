<script>
    import {page} from "$app/stores"

    let secondBreadcrumb
    $: {
        const value = $page.url.pathname.split("/")[1]
        switch (value) {
            case "blog":
                secondBreadcrumb = "articles"
                break
            default:
                secondBreadcrumb = value
        }
    }
</script>

<div class="breadcrumbs">
    <a class="breadcrumb" href="/">~</a>
    {#if secondBreadcrumb}
        <a class="breadcrumb breadcrumb_second" href="/">{secondBreadcrumb}</a>
    {/if}
</div>

<style lang="scss">
  .breadcrumbs {
    font-size: 2rem;
    font-weight: 500;
    color: var(--text-color);

    display: flex;
    gap: 0.5rem;
  }

  .breadcrumb {
    font-size: 1.55rem;
    font-weight: 500;
    color: var(--text-color);
    text-transform: capitalize;

    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    &:last-of-type {
      &:after {
        display: none;
      }
    }

    &:after {
      display: inline-block;
      content: "/";
      margin-left: .5rem;
    }

  }
</style>
