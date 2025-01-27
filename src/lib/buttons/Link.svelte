<script lang="ts">
  import { Icon, Icons } from '$components/icons';
  import getComponentUUID from '$components/utils/getUUID';
  import { Sizes, type ActionSizes, leftIconPad, rightIconPad } from './sizes';
  import { Styles, ActionColors, IconStyle, IconDarkStyle } from './styles';

  export let href = '#';
  export let color: ActionColors;
  export let size: ActionSizes;
  export let leftIcon: Icons | undefined = undefined;
  export let rightIcon: Icons | undefined = undefined;
  export let id = getComponentUUID('link');
  export let rightIconId = getComponentUUID('link-right-icon');
  export let leftIconId = getComponentUUID('link-left-icon');
  export let fullWidth = false;
</script>

<!--
@component
Standard Link. Links should be used in favour of buttons when moving between pages. 
If the pages have side-effects then a button is appropriate
 
Properties:
- `href`: Set the link destination of the IconLink
- `size`: Set the size using `ActionSizes` enum
- `color`: Set the color using `ActionColors` enum
- `leftIcon`: Set the left icon using `Icons` enum (Optional)
- `rightIcon`: Set the right icon using `Icons` enum (Optional)
- `fullWidth`: Extends the button's width to occupy the full width of its parent container.


  ```tsx
  <Link href="/example-page" size={ActionSizes.SMALL} color={ActionColors.BLUE} icon={Icons.ADD}>Go To Example Page</Link>
  ```
-->
<a {href} class="inline-block border-1 {Sizes[size]} {Styles[color]}" {id} class:w-full={fullWidth}>
  <span class="flex h-full items-center justify-center">
    {#if leftIcon}
      <span class={$$slots ? leftIconPad[size] : ''} id={leftIconId}>
        <Icon icon={leftIcon} color={IconStyle[color]} darkColor={IconDarkStyle[color]} />
      </span>
    {/if}
    <slot />
    {#if rightIcon}
      <span class={$$slots.default ? rightIconPad[size] : ''} id={rightIconId}>
        <Icon icon={rightIcon} color={IconStyle[color]} darkColor={IconDarkStyle[color]} />
      </span>
    {/if}
  </span>
</a>
