<script lang="ts">
  import { sizes, SegmentOptionSize } from './sizes';

  export let selected = false;
  export let size: SegmentOptionSize = SegmentOptionSize.LARGE;
  export let borderless = true;
</script>

<button
  on:click
  class:shadow-segment-option={selected}
  class:surface-main-quarternary={!selected}
  class:surface-element-primary={selected}
  class:text-main-tertiary={!selected}
  class:text-main-primary={selected}
  class:border-main-primary={!borderless}
  class:border={!borderless}
  class="rounded-md px-6 {sizes[size]}"
>
  <slot />
</button>
