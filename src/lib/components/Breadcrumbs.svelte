<script>
    import {page} from "$app/stores"

    let secondBreadcrumb
    $: {
        const value = $page.url.pathname.split("/")[1]
        switch (value) {
            case "":
                secondBreadcrumb = "About"
                break
            default:
                secondBreadcrumb = value
        }
    }
</script>

<div class="breadcrumbs">
    <a class="breadcrumb tilde" href="/">~</a>
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

  .tilde {
    &:hover {
      background: #913de6;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
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
