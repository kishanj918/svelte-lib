<script>
  import { Tag, TagColors, TagSizes } from '$components';

  const darkMode = [false, true];
  const sizes = [TagSizes.SMALL, TagSizes.MEDIUM, TagSizes.LARGE];
  const removableState = [false, true];
  const colors = [
    TagColors.RED,
    TagColors.ORANGE,
    TagColors.YELLOW,
    TagColors.GREEN,
    TagColors.BLUE,
    TagColors.PURPLE,
    TagColors.PINK,
    TagColors.GREY
  ];
</script>

<div class="flex h-screen w-screen">
  {#each darkMode as dark}
    <div class:dark class:bg-black-4={dark} class="grid w-1/2 grid-cols-3">
      {#each colors as color}
        {#each removableState as removable}
          {#each sizes as size}
            <div>
              <Tag {removable} {size} {color}>Example</Tag>
            </div>
          {/each}
        {/each}
      {/each}
    </div>
  {/each}
</div>
