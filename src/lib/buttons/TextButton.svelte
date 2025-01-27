<script lang="ts">
  import { Icon, Icons } from '$components/icons';
  import Loading from '$components/icons/Loading.svelte';
  import getComponentUUID from '$components/utils/getUUID';
  import { type ActionSizes, leftIconPad, rightIconPad, TextSizes } from './sizes';
  import {
    ActionColors,
    TextStyles,
    TextIconStyle,
    TextIconDarkStyle,
    DisabledTextStyle
  } from './styles';

  export let disabled = false;
  export let loading = false;
  export let color: ActionColors;
  export let size: ActionSizes;
  export let leftIcon: Icons | undefined = undefined;
  export let rightIcon: Icons | undefined = undefined;
  export let id = getComponentUUID('text-button');
  export let loaderId = getComponentUUID('text-button-loader');
  export let leftIconId = getComponentUUID('text-button-left-icon');
  export let rightIconId = getComponentUUID('text-button-right-icon');
  export let fullWidth = false;
</script>

<!--
@component
Standard text button. A text button has no background, but does have a foreground text color

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
  <TextButton size={ActionSizes.SMALL} color={ActionColors.BLUE} icon={Icons.ADD}>Some Text</TextButton>
  ```
-->
<button
  disabled={disabled || loading}
  class:relative={loading}
  on:click
  class="items-center justify-center hover:bg-light-grey-1 active:bg-light-grey-2 dark:hover:bg-black-2 dark:active:bg-black-1 {TextSizes[
    size
  ]} {TextStyles[color]} {DisabledTextStyle} inline-flex"
  {id}
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
        color={disabled || loading ? 'text-grey-2' : TextIconStyle[color]}
        darkColor={disabled || loading ? 'dark:text-grey-6' : TextIconDarkStyle[color]}
      />
    </span>
  {/if}
  <slot />
  {#if rightIcon}
    <span class={$$slots.default ? rightIconPad[size] : ''} id={rightIconId}>
      <Icon
        icon={rightIcon}
        color={disabled || loading ? 'text-grey-2' : TextIconStyle[color]}
        darkColor={disabled || loading ? 'dark:text-grey-6' : TextIconDarkStyle[color]}
      />
    </span>
  {/if}
</button>
