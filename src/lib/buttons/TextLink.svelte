<script lang="ts">
  import { Icon, Icons } from '$components/icons';
  import getComponentUUID from '$components/utils/getUUID';
  import { Sizes, type ActionSizes, leftIconPad, rightIconPad, TextSizes } from './sizes';
  import {
    DisabledStyle,
    Styles,
    ActionColors,
    IconStyle,
    IconDarkStyle,
    TextStyles,
    TextIconStyle,
    TextIconDarkStyle,
    DisabledTextStyle
  } from './styles';

  export let href = '#';
  export let color: ActionColors;
  export let size: ActionSizes;
  export let leftIcon: Icons | undefined = undefined;
  export let rightIcon: Icons | undefined = undefined;
  export let id = getComponentUUID('text-link');
  export let leftIconId = getComponentUUID('text-link-left-icon');
  export let rightIconId = getComponentUUID('text-link-right-icon');
  export let fullWidth = false;
  export let openInNewTab = false;
</script>

<!--
@component
Standard Text Link. Links should be used in favour of buttons when moving between pages. 
If the pages have side-effects then a button is appropriate. A Text Link has no background
color, but rather a foreground text color
 
Properties:
- `href`: Set the link destination of the IconLink
- `size`: Set the size using `ActionSizes` enum
- `color`: Set the color using `ActionColors` enum
- `leftIcon`: Set the left icon using `Icons` enum (Optional)
- `rightIcon`: Set the right icon using `Icons` enum (Optional)
- `fullWidth`: Extends the button's width to occupy the full width of its parent container.
- `openInNewTab`: Opens the link in a new browser tab when set to true


  ```tsx
  <TextLink href="/example-page" size={ActionSizes.SMALL} color={ActionColors.BLUE} icon={Icons.ADD}>Go To Example Page</TextLink>
  ```
-->
<a
  target={openInNewTab ? '_blank' : '_self'}
  {href}
  class="items-center justify-center hover:bg-light-grey-1 active:bg-light-grey-2 dark:hover:bg-black-2 dark:active:bg-black-1 {TextSizes[
    size
  ]} {TextStyles[color]} {DisabledTextStyle} inline-flex"
  {id}
  class:w-full={fullWidth}
>
  <span class="flex h-full items-center justify-center">
    {#if leftIcon}
      <span class={$$slots.default ? leftIconPad[size] : ''} id={leftIconId}>
        <Icon icon={leftIcon} color={TextIconStyle[color]} darkColor={TextIconDarkStyle[color]} />
      </span>
    {/if}
    <slot />
    {#if rightIcon}
      <span class={$$slots.default ? rightIconPad[size] : ''} id={rightIconId}>
        <Icon icon={rightIcon} color={TextIconStyle[color]} darkColor={TextIconDarkStyle[color]} />
      </span>
    {/if}
  </span>
</a>
