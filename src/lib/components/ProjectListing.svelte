<script>
    export let title = ""
    export let bubbles = []
    export let id = ""
</script>

<div class="listing" class:has-preview={$$slots.preview} {id}>
    {#if $$slots.preview}
        <slot name="preview" />
    {/if}
    <div class="info">
        <h1>{title}</h1>
        <div class="bubbles">
            {#each bubbles as bubble}
                <div class="bubble" style="background:{bubble[1]}">{bubble[0]}</div>
            {/each}
        </div>
        <div class="description">
            <slot name="description" />
        </div>
        <div class="links_box">
            <svg width="19" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 18.3334V15.1084C13.3646 14.711 13.3109 14.3115 13.1758 13.9365C13.0408 13.5615 12.8274 13.2195 12.55 12.9334C15.1667 12.6417 17.9167 11.65 17.9167 7.10003C17.9164 5.93655 17.4689 4.81769 16.6667 3.97503C17.0465 2.95712 17.0197 1.83199 16.5917 0.833363C16.5917 0.833363 15.6083 0.541696 13.3333 2.0667C11.4233 1.54905 9.40998 1.54905 7.49999 2.0667C5.22499 0.541696 4.24166 0.833363 4.24166 0.833363C3.81364 1.83199 3.78678 2.95712 4.16666 3.97503C3.35843 4.82395 2.91043 5.95291 2.91666 7.12503C2.91666 11.6417 5.66666 12.6334 8.28332 12.9584C8.00915 13.2417 7.79771 13.5795 7.66275 13.95C7.52778 14.3204 7.47233 14.7151 7.49999 15.1084V18.3334M7.49999 15.8334C3.33332 17.0834 3.33332 13.75 1.66666 13.3334L7.49999 15.8334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <slot name="links" />
        </div>
    </div>
</div>

<style lang="scss">
  h1 {
    font-size: 1.25rem;
    margin: 0;
    font-weight: 500;
    color: var(--accent-text-color);
  }

  :global([slot="preview"]) {
    display: grid;
    place-content: center;
    gap: 1rem;
    @media (min-width: 768px) {
      max-width: 50%;
    }

    :global(img) {
      object-fit: scale-down;
      max-height: 50vh;
      max-width: 80vw;
      @media (min-width: 768px) {
        max-width: 100%;
        max-height: fit-content;
      }
    }

    :global(> iframe) {
      height: 100%;
      border: solid white 1px;
    }
  }

  :global([slot="links"]) {
    display: flex;
    gap: inherit;

    :global(> *) {
      border-radius: 3px;
      text-decoration: none;
      color: white;

      display: grid;
      place-content: center;
      padding: 1rem;
    }
  }

  .links_box {
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    margin-top: auto;

    gap: 0.625rem;
    padding: 0 0.625rem;
    height: 2rem;

    > svg {
      align-self: center;
      height: 100%;
      width: 1.5rem;

      > path {
        stroke: var(--text-color, darkgrey);
      }
    }

  }

  .bubbles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 0.4rem;
    padding: 0 0.4rem;

    color: white;
    font-size: 1.1rem;

    > * {
      display: grid;
      padding: 1px 0.5rem;
      place-content: center;
      border-radius: 0.5rem;
      white-space: nowrap;
    }
  }

  .description {
    white-space: pre-line;
    line-height: 145%;
  }

  .info {
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    gap: 0.3rem;
  }

  .listing {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    align-items: stretch;
    padding: 1rem;
    gap: 0.625rem;

    scroll-margin-top: 1.5rem;

    border: 1px solid #474747;
    border-radius: 3px;

    &.has-preview {
      @media (min-width: 768px) {
        grid-column: span 2;
      }
    }
  }
</style>
