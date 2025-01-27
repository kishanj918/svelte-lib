<script lang="ts">
  import getComponentUUID from '$components/utils/getUUID';

  type T = $$Generic;
  export let options: {
    label: string;
    value: T;
  }[] = [];
  export let selected: T;
  export let id = getComponentUUID('segmented-control');
</script>

<!--
@component
Segmented control, is a type of tab control that allows you specify a set of labels
and values. The control itself will update it's `selected` value when an option is 
clicked

Properties:
- `options`: An array of label/value pairs: `[{ label: 'Page 1', value: 'page_1' }, { label: 'Page 2', value: 'page_2' }]`
- `selected`: The currently selected value e.g. `'page_1'`

  ```tsx
  <SegmentedControl options={[{ label: 'Page 1', value: 'page_1' }, { label: 'Page 2', value: 'page_2' }]} selected='page_1' />
  ```
-->
<div class="flex h-10 w-full border-b-1 px-5" {id}>
  {#each options as option}
    <button
      on:click={() => (selected = option.value)}
      class:border-b-1={selected === option.value}
      class:text-main-tertiary={selected !== option.value}
      class:text-main-primary={selected === option.value}
      class="mr-6 h-10 border-black-1 text-sm"
    >
      {option.label}
    </button>
  {/each}
</div>
