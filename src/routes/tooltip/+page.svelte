<script>
  import { Tooltip } from '$components';
  const darkMode = [false, true];
</script>

<div class="flex h-screen w-screen">
  {#each darkMode as dark}
    <div class:dark class:bg-black-4={dark} class="grid w-1/2 grid-cols-2">
      {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as v}
        <div class="p-16">
          <Tooltip>Some inner content that goes inside the tooltip and makes it visible.</Tooltip>
        </div>
      {/each}
    </div>
  {/each}
</div>
