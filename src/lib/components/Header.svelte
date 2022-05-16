<script>
    import {page} from '$app/stores'
    import Breadcrumbs from "./Breadcrumbs.svelte"

    function isPathname(path) {
        return $page.url.pathname === path
    }

    $: homeDecoration = isPathname("/", $page) ? "text-decoration: underline" : ""
    $: articleDecoration = isPathname("/blog", $page) ? "text-decoration: underline" : ""
    $: projectsDecoration = isPathname("/projects", $page) ? "text-decoration: underline" : ""
</script>

<div class="home">
    <div class="top">
        <Breadcrumbs />
    </div>
    <div class="bottom">
        <a href="/blog" style="{articleDecoration}">Blog</a>
        <a href="/projects" style="{projectsDecoration}">Projects</a>
        <a href="/" style="{homeDecoration}">About</a>
        <a href="https://github.com/aeggydev" target="_blank">Github</a>
    </div>
</div>

<style lang="scss">
  .home {
    display: grid;
    grid-template-rows: 3fr 2fr;
    background: var(--secondary-bg);
  }

  .bottom {
    display: flex;
    justify-content: end;
    gap: 0.5rem;

    a {
      font-size: 1.1rem;
      color: var(--accent-text-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
