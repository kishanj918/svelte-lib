<script lang="ts">
  import Cross from '$components/icons/Cross.svelte';
  import getComponentUUID from '$components/utils/getUUID';
  import { TagColors, activeColors, colors } from './colors';
  import { TagSizes, crossPad, sizes } from './sizes';
  export let size: TagSizes = TagSizes.SMALL;
  export let color: TagColors = TagColors.RED;
  export let removable = false;
  export let active = false;
  export let id = getComponentUUID('tag');
  export let buttonId = getComponentUUID('tag-remove-button');
</script>

<!--
@component
A Tag. Used to provide labels or other properties. Can be rendered in a number of sizes and colours

Properties:
- `color`: The Color of the tag, dictated by the `TagColors` enum
- `size`: The size of the tag, dictated by the `TagSizes` enum
- `removable`: A boolean indicating if the tag should show a "x" button to remove the tag. `on:click` will be bindable
if the tag is removable.
- `active`: A boolean indicating if active colours should work. e.g. hover and active states

  ```tsx
  <StarRating rating={4} on:click />
  ```
-->
<span
  class:text-xs={size === TagSizes.TINY}
  class="inline-flex items-center justify-center rounded-sm border-1 text-sm dark:text-white {sizes[
    size
  ]} {colors[color]} {active ? activeColors[color] : ''}"
  {id}
>
  <slot />
  {#if removable}
    <button
      on:click
      id={buttonId}
      class="text-grey-4 hover:text-grey-6 active:text-grey-7 {crossPad[size]}"
    >
      <Cross />
    </button>
  {/if}
</span>
