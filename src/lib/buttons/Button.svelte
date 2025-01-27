<script lang="ts">
  import { Icon, Icons } from '$components/icons';
  import Loading from '$components/icons/Loading.svelte';
  import getComponentUUID from '$components/utils/getUUID';
  import { Sizes, leftIconPad, rightIconPad, ActionSizes } from './sizes';
  import { DisabledStyle, Styles, IconStyle, IconDarkStyle, ActionColors } from './styles';
  export let id = getComponentUUID('button');
  export let rightIconId = getComponentUUID('button-right-icon');
  export let leftIconId = getComponentUUID('button-left-icon');
  export let loaderId = getComponentUUID('button-loader');
  export let disabled = false;
  export let loading = false;
  export let color: ActionColors;
  export let size: ActionSizes;
  export let leftIcon: Icons | undefined = undefined;
  export let rightIcon: Icons | undefined = undefined;
  export let fullWidth = false;
</script>

<!--
@component
Standard action button.

Slot: Text of the button

Properties:
- `color`: Set the color using `ActionColors` enum
- `size`: Set the size using `ActionSizes` enum
- `disabled`: Disable the button (click events will not trigger)
- `loading`: Disable the button and show a loading spinner over the button
- `leftIcon`: Set the left icon using `Icons` enum (Optional)
- `rightIcon`: Set the right icon using `Icons` enum (Optional)
- `fullWidth`: Extends the button's width to occupy the full width of its parent container.

  ```tsx
  <Button size={ActionSizes.SMALL} color={ActionColors.BLUE} icon={Icons.ADD}>Some Text</Button>
  ```
-->
<button
  {id}
  disabled={disabled || loading}
  on:click
  class:relative={loading}
  class="items-center justify-center border-1 {Sizes[size]} {Styles[
    color
  ]} {DisabledStyle} inline-flex"
  class:w-full={fullWidth}
>
  {#if loading}
    <span
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center"
      id={loaderId}
    >
      <Loading />
    </span>
  {/if}
  {#if leftIcon}
    <span class={$$slots.default ? leftIconPad[size] : ''} id={leftIconId}>
      <Icon
        icon={leftIcon}
        color={disabled || loading ? 'text-grey-2' : IconStyle[color]}
        darkColor={disabled || loading ? 'dark:text-grey-6' : IconDarkStyle[color]}
      />
    </span>
  {/if}
  <slot />
  {#if rightIcon}
    <span class={$$slots.default ? rightIconPad[size] : ''} id={rightIconId}>
      <Icon
        icon={rightIcon}
        color={disabled || loading ? 'text-grey-2' : IconStyle[color]}
        darkColor={disabled || loading ? 'dark:text-grey-6' : IconDarkStyle[color]}
      />
    </span>
  {/if}
</button>
