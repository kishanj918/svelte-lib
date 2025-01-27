<script lang="ts">
  import { ModalStyles, overlayStyles } from './styles';
  export let style: ModalStyles = ModalStyles.STANDARD;
  export let show = false;
  export let noHide = false;
  $: justOpened = show;
  let overlay: HTMLElement;
  let content: HTMLDivElement;
  const listener = (ev: KeyboardEvent) => {
    if (noHide) return;
    if (ev.key === 'Escape') show = false;
  };
  const closeOnEscape = (node: HTMLElement) => {
    document.addEventListener('keydown', listener);
    return {
      destroy() {
        document.removeEventListener('keydown', listener);
      }
    };
  };
</script>

{#if show}
  <div
    class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden {overlayStyles[
      style
    ]}"
    use:closeOnEscape
    on:keydown={listener}
    bind:this={overlay}
    on:click={(ev) => {
      if (noHide) return;
      if (ev.target === overlay) show = false;
    }}
  >
    <div bind:this={content}>
      <slot />
    </div>
  </div>
  <style>
    body {
      overflow: hidden;
      width: 100%;
    }
  </style>
{/if}
