<script>
    import {page} from '$app/stores'
    import Breadcrumbs from "./Breadcrumbs.svelte"

    function isPathname(path) {
        return $page.url.pathname === path
    }

    $: articleDecoration = isPathname("/", $page) ? "text-decoration: underline" : ""
    $: projectsDecoration = isPathname("/projects", $page) ? "text-decoration: underline" : ""
    $: contactDecoration = isPathname("/contact", $page) ? "text-decoration: underline" : ""
</script>

<div class="home">
    <div class="top">
        <Breadcrumbs />
    </div>
    <div class="bottom">
        <a href="/" style="{articleDecoration}">Articles</a>
        <a href="/projects" style="{projectsDecoration}">Projects</a>
        <a href="/contact" style="{contactDecoration}">Contact</a>
        <a href="https://github.com/aeggydev" target="_blank">Github</a>
    </div>
</div>

<style lang="scss">
  .home {
    display: grid;
    grid-template-rows: 3fr 2fr;

    padding: 1.5rem 1.25rem;
    @media (min-width: 768px) {
      padding: 1.5rem 20vw;
    }
  }

  .bottom {
    display: flex;
    justify-content: end;
    gap: 0.5rem;

    a {
      font-size: 1.1rem;
      color: #632626;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
