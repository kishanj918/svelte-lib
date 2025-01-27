<script lang="ts">
  import { ActionColors, ActionSizes, Icons } from "$components";
  import Tray from "$components/tray/Tray.svelte";
  let open = true;
  // setInterval(() => (open = !open), 1000);
</script>

<Tray bind:open>
  <div slot="head">
    <h1>Head</h1>
  </div>
  <h1>Hello World</h1>
</Tray>
