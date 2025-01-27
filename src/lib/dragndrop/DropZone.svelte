<script>
  import { onMount, onDestroy } from 'svelte';
  import { zones, activeZone } from './store';
  /** @type {number|string} */
  export let key;
  /** @type {HTMLDivElement} */
  let zone;
  onMount(() => {
    const getX = () => zone.getBoundingClientRect().x;
    const getY = () => zone.getBoundingClientRect().y;
    if (zone && key !== null) {
      zones.update((v) => [...v, [key, getX, getY]]);
    }
  });
  onDestroy(() => {
    zones.update((v) => v.filter((x) => x[0] !== key));
  });
</script>

<div class="w-full" bind:this={zone} on:drop>
  {#if $activeZone === key}
    <div class="h-12 w-full bg-blue-200" />
  {/if}
</div>
