<script lang="ts">
  import { ActionColors, ActionSizes } from '$components/buttons';
  import IconButton from '$components/buttons/IconButton.svelte';
  import { Icons } from '$components/icons';
  import { createEventDispatcher } from 'svelte';
  export let open = false;
  export let zIndex = 50;
  const dispatcher = createEventDispatcher<{ close: void }>();
</script>

<div
  class:pointer-events-none={!open}
  class:opacity-0={!open}
  on:click={() => {
    open = false;
    dispatcher('close');
  }}
  on:keyup={(ev) => {
    if (ev.key === 'Escape') {
      open = false;
      dispatcher('close');
    }
  }}
  style="z-index: {zIndex}"
  class:surface-container-overlay-background={zIndex === 50}
  class:bg-transparent={zIndex !== 50}
  class="fixed left-0 top-0 h-screen w-screen transition-opacity duration-300 ease-in-out"
>
  <div
    on:click={(ev) => ev.stopPropagation()}
    on:keyup={(ev) => {
      if (ev.key === 'Escape') {
        open = false;
        dispatcher('close');
      }
    }}
    class="surface-container-primary fixed top-0 flex h-full w-[648px] flex-col overflow-scroll duration-300 ease-in-out {open
      ? 'right-0 '
      : '-right-[648px]'}"
  >
    <div class="flex w-full items-start justify-between p-6">
      <slot name="head" />
      <div class="flex items-center">
        <slot name="actions" />
        <IconButton
          borderless
          color={ActionColors.NEUTRAL}
          size={ActionSizes.SMALL}
          icon={Icons.CROSS}
          on:click={() => {
            open = false;
            dispatcher('close');
          }}
        />
      </div>
    </div>
    <slot />
  </div>
</div>
