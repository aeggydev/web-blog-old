<script>
    import {page} from '$app/stores'
    import Breadcrumbs from "./Breadcrumbs.svelte"
    import DarkModeToggle from "./DarkModeToggle.svelte"
    import Feed from './Feed.svelte'

    export let theme

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
        <div class="top_links">
            <Feed />
            <DarkModeToggle bind:theme />
        </div>
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
    grid-gap: .5rem;
    background: var(--secondary-bg);
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top_links {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 0.75rem;
  }

  .bottom {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
    font-weight: 500;

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
