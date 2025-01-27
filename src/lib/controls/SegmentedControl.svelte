<script lang="ts">
  import getComponentUUID from '$components/utils/getUUID';
  import { createEventDispatcher } from 'svelte';
  import SegmentOption from './SegmentOption.svelte';
  type T = $$Generic;
  export let options: {
    label: string;
    value: T;
  }[] = [];
  export let selected: T;
  export let id = getComponentUUID('segmented-control');
  const dispatch = createEventDispatcher<{ select: T }>();
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
<div class="surface-main-quarternary inline-block h-10 rounded-md p-1" {id}>
  {#each options as option}
    <SegmentOption
      on:click={() => {
        selected = option.value;
        dispatch('select', option.value);
      }}
      selected={selected === option.value}>{option.label}</SegmentOption
    >
  {/each}
</div>
