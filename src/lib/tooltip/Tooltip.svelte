<script lang="ts">
  import { Icon, Icons } from '$components/icons';
  import getComponentUUID from '$components/utils/getUUID';
  export let hovered = false;
  export let defaultBehaviour = true;

  enum Quadrant {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT
  }
  export let id = getComponentUUID('tooltip');
  export let contentId = getComponentUUID('tooltip-content');
  let iconPosition = Quadrant.TOP_LEFT;
  let element: HTMLDivElement;
  let wScreen = 0;
  let hScreen = 0;
  let scrolledBy = 0;
  let hTip = 0;
  let clientY = 0;
  let clientX = 0;

  const showToolTip = (event: MouseEvent) => {
    clientY = event.clientY;
    clientX = event.clientX;
    if (defaultBehaviour) {
      if (clientY > hScreen / 2) {
        if (clientX > wScreen / 2) {
          iconPosition = Quadrant.BOTTOM_RIGHT;
        } else {
          iconPosition = Quadrant.BOTTOM_LEFT;
        }
      } else {
        if (clientX > wScreen / 2) {
          iconPosition = Quadrant.TOP_RIGHT;
        } else {
          iconPosition = Quadrant.TOP_LEFT;
        }
      }
      hovered = true;
    }
  };
</script>

<!--
@component
A Tooltip. A tooltip allows you to provide information that is shown on hover. Tooltips are not
considered good practice inn A11y standards, because if information is important enough to be 
on the page, it should be important enough to always see.

This tooltip component will automatically compute where it should render on screen, in order to be most visible

Slot: The text content of the tooltip, use `<svelte:fragment>` rather than a HTML component to wrap the slot

Properties:
- `hovered`: See if the element is currently hovered
- `defaultBehaviour`: Enables the default behaviour of the tooltip (hovered on mouse over)

  ```tsx
  <Tooltip>My very simple tooltip</Chip>
  ```
-->
{#if hovered && (iconPosition === Quadrant.BOTTOM_LEFT || iconPosition === Quadrant.BOTTOM_RIGHT)}
  <div
    id={contentId}
    style="left: {clientX - (iconPosition === Quadrant.BOTTOM_RIGHT ? 186 : 0)}px; top: {clientY -
      hTip -
      10}px;"
    bind:clientHeight={hTip}
    class="fixed z-50 inline-block w-[200px] rounded-md border-1 border-grey-1 bg-off-white p-3 text-sm shadow dark:border-grey-7 dark:bg-black-3"
  >
    <p class="text-sm text-black-2 dark:text-light-grey-1">
      <slot />
    </p>
  </div>
{/if}

<svelte:window bind:innerWidth={wScreen} bind:innerHeight={hScreen} bind:scrollY={scrolledBy} />
<div
  role="tooltip"
  bind:this={element}
  on:mouseenter={showToolTip}
  on:mouseleave={() => (defaultBehaviour ? (hovered = false) : null)}
  {id}
>
  <Icon icon={Icons.INFO} />
</div>
{#if hovered && (iconPosition === Quadrant.TOP_LEFT || iconPosition === Quadrant.TOP_RIGHT)}
  <div
    id={contentId}
    style="left: {clientX - (iconPosition === Quadrant.TOP_RIGHT ? 186 : 0)}px; top: {clientY +
      20}px;"
    bind:clientHeight={hTip}
    class="fixed z-[100] w-[200px] rounded-md border-1 border-grey-1 bg-off-white p-3 text-sm shadow dark:border-grey-7 dark:bg-black-3"
  >
    <p class="text-sm text-black-2 dark:text-light-grey-1">
      <slot />
    </p>
  </div>
{/if}
