<!-- Simple Lightbox implementation -->

<script>
    export let src
    export let id
    export let parentId = ""
    export let alt = ""
</script>

<a href="#{id}" class="image">
    <img {src} {alt}>
</a>

<a href="#{parentId}" class="lightbox" {id}>
    <img src={src} {alt} />
</a>

<style lang="scss">
  .image {
    img {
      max-width: 100%;
    }
  }

  .lightbox {
    display: none;

    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding: 2rem;
    background: rgba(0, 0, 0, .8);

    &:target {
      display: grid;
      place-content: center;
    }

    > img {
      display: inline-block;
      min-height: 50vh;
    }
  }
</style>
