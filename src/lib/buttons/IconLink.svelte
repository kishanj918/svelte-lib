<script lang="ts">
  import { Icon, Icons } from '$components/icons';
  import getComponentUUID from '$components/utils/getUUID';
  import { type ActionSizes, IconSizes } from './sizes';
  import { Styles, ActionColors, IconStyle, IconDarkStyle } from './styles';

  export let href = '#';
  export let color: ActionColors;
  export let size: ActionSizes;
  export let icon: Icons;
  export let id = getComponentUUID('icon-link');
  export let fullWidth = false;
</script>

<!--
@component
Standard Icon Link. Links should be used in favour of buttons when moving between pages. 
If the pages have side-effects then a button is appropriate
 
Properties:
- `href`: Set the link destination of the IconLink
- `icon`: Set the icon using `Icons` enum
- `size`: Set the size using `ActionSizes` enum
- `color`: Set the color using `ActionColors` enum
- `fullWidth`: Extends the button's width to occupy the full width of its parent container.


  ```tsx
  <IconLink href="/example-page" size={ActionSizes.SMALL} color={ActionColors.BLUE} icon={Icons.ADD} />
  ```
-->
<a
  {href}
  class="inline-block border-1 {IconSizes[size]} {Styles[color]}"
  {id}
  class:w-full={fullWidth}
>
  <span class="flex h-full items-center justify-center">
    <Icon {icon} color={IconStyle[color]} darkColor={IconDarkStyle[color]} />
  </span>
</a>
