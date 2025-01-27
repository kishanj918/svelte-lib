<script lang="ts">
  export let isOpen = false;
  $: justOpened = isOpen;
  let tile: HTMLDivElement;
  function togglePopover() {
    isOpen = !isOpen;
  }
</script>

<svelte:window
  on:click={(ev) => {
    if (isOpen && justOpened) {
      justOpened = false;
      return;
    }
    if (!tile) return;
    if (!ev.target) {
      isOpen = false;
      return;
    }
    if (tile === ev.target) return;
    // @ts-ignore Because you can't force type in an inline svelte function
    if (tile.contains(ev.target)) return;
    isOpen = false;
  }}
/>

<div class="relative inline-flex">
  <button on:click={togglePopover}>
    <slot name="target" />
  </button>
  {#if isOpen}
    <div bind:this={tile} class="absolute z-10 w-max">
      <div class="relative top-4 rounded bg-white shadow-lg">
        <slot name="content" />
      </div>
    </div>
  {/if}
</div>
