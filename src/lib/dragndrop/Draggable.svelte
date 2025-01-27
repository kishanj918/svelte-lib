<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatcher = createEventDispatcher<{
    dropped: {
      dragging: number;
      dropZone: string | number;
    };
  }>();
  import { mY, dragging, activeZone, mX } from './store';
  export let key = 0;
  const handleGrabStart = () => {
    $dragging = key;
    const end = () => {
      if ($activeZone)
        dispatcher('dropped', {
          dragging: key,
          dropZone: $activeZone
        });
      $dragging = null;
      document.removeEventListener('mouseup', end);
    };
    document.addEventListener('mouseup', end);
  };
  let originalWidth = 0;
</script>

<div
  draggable
  bind:clientWidth={originalWidth}
  class="select-none"
  class:hidden={$dragging === key}
  on:touchmove={(ev) => {
    if (ev.touches.length > 1) return;
    const [touch] = ev.touches;
    $mX = touch.pageX;
    $mY = touch.pageY;
  }}
>
  <div class="select-none">
    <slot name="dragElement" dragHandler={handleGrabStart} />
  </div>
</div>
{#if $dragging === key}
  <div
    class="fixed z-50 h-12 touch-pan-y select-auto"
    style="width: {originalWidth}px; top: {$mY - 30}px;"
  >
    <div class="select-none">
      <slot name="dragElement" dragHandler={() => null} />
    </div>
  </div>
  <style>
    body {
      overscroll-behavior-y: contain;
      overflow: hidden;
    }
  </style>
{/if}
