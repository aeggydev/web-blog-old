<div id="about_info">
    <h1>About</h1>
    <p>
        I'm a developer from Brno, Czech Republic<img class="icon emacs" src="/czech.png" alt="Czech flags"> who likes
        to
        <a href="/blog">blog</a> about my experiences with software, primarily <b>web development</b>, <b>.NET</b>,
        <b>Lisp</b> and <b>functional programming</b>.
    </p>
    <p>
        Started with programming in middle school and have always tried to learn as much as possible. I'm a big fan of
        open source and GPL software and <a href="https://github.com/aeggydev" target="_blank">
        publish my projects as open source</a>.
        You can see some of them <a href="/projects">here</a>.
    </p>
    <p>
        My favorite editor is Emacs<img class="icon" src="/emacs.svg" alt="Emacs icon"> with
        <a href="https://github.com/emacs-evil/evil" target="_blank">the good parts of Vim</a>.
        You can read my config <a href="https://github.com/aeggydev/emacs-config" target="_blank">here</a>.
    </p>
</div>

<style lang="scss">
  p {
    line-height: 1.5;
    font-size: 1.05rem;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .icon {
    height: 1.5ex;
    padding: 0 .3em;
    object-position: center;
  }

  #about_info :global(a) {
    color: var(--link-color);
    text-decoration-thickness: 2.5px;
  }

  #about_info :global(a):hover {
    background: var(--link-color);
    color: var(--link-hover-color)
  }
</style>
