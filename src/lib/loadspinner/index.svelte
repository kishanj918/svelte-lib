<script lang="ts">
  import Loading from '$components/icons/Loading.svelte';

  export let loading = false;
</script>

{#if loading}
  <div
    class="fixed left-0 top-0 z-[60] flex h-screen w-screen items-center justify-center bg-grey-2/50 text-black"
  >
    <Loading classes="w-20 h-20" />
  </div>
  <style>
    body {
      overflow: hidden;
      width: 100%;
    }
  </style>
{/if}
