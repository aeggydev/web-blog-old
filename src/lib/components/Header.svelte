<div class="home">
    <div class="top">
        <a class="title" href="/">Tech blog</a>
    </div>
    <div class="bottom">
        <a href="/">Articles</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="https://github.com/aeggydev" target="_blank">Github</a>
    </div>
</div>

<style lang="scss">
  .home {
    padding: 1.5rem 0;

    display: grid;
    grid-template-rows: 3fr 2fr;
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

  .title {
    grid-column: 2;

    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: black;

    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
