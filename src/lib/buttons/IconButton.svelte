<script lang="ts">
  import { Icon, Icons } from '$components/icons';
  import Loading from '$components/icons/Loading.svelte';
  import getComponentUUID from '$components/utils/getUUID';
  import { type ActionSizes, IconSizes } from './sizes';
  import { DisabledStyle, Styles, ActionColors, IconStyle, IconDarkStyle } from './styles';

  export let disabled = false;
  export let loading = false;
  export let borderless = false;
  export let color: ActionColors;
  export let size: ActionSizes;
  export let icon: Icons;
  export let id = getComponentUUID('icon-button');
  export let fullWidth = false;
</script>

<!--
@component
Standard Icon button.
 
Properties:
- `icon`: Set the icon using `Icons` enum
- `size`: Set the size using `ActionSizes` enum
- `color`: Set the color using `ActionColors` enum
- `disabled`: Disable the button (click events will not trigger)
- `loading`: Disable the button and show a loading spinner over the button
- `borderless`: Hide the border around the button 
- `fullWidth`: Extends the button's width to occupy the full width of its parent container.


  ```tsx
  <IconButton size={ActionSizes.SMALL} color={ActionColors.BLUE} icon={Icons.ADD} />
  ```
-->
<button
  {id}
  disabled={disabled || loading}
  on:click
  class:border-1={!borderless}
  class="items-center justify-center {IconSizes[size]} {Styles[color]} {DisabledStyle} inline-flex"
  class:w-full={fullWidth}
>
  {#if loading}
    <Loading />
  {:else}
    <Icon
      {icon}
      color={disabled || loading ? 'text-grey-2' : IconStyle[color]}
      darkColor={disabled || loading ? 'dark:text-grey-6' : IconDarkStyle[color]}
    />
  {/if}
</button>
