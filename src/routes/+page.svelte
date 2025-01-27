<script>
  import { Icons } from '$components';
  import Button from '$components/buttons/Button.svelte';
  import Link from '$components/buttons/Link.svelte';
  import { ActionSizes } from '$components/buttons/sizes';
  import { ActionColors } from '$components/buttons/styles';
</script>

<div class="h-screen w-screen overflow-x-hidden">
  <div class="flex h-[30vh] w-full flex-col items-center justify-center">
    <h1 class="font-lato-bold text-3xl">App Svelte UI Library V2</h1>
    <div class="flex">
      <div class="dark mr-2">
        <h2>Dark Mode</h2>
        <div class="flex">
          <Button leftIcon={Icons.CARET_LEFT} size={ActionSizes.LARGE} color={ActionColors.RED} />
          <Button
            leftIcon={Icons.CARET_LEFT}
            disabled
            size={ActionSizes.LARGE}
            color={ActionColors.RED}
          />
        </div>
      </div>
      <div>
        <h2>Light Mode</h2>
        <div class="flex">
          <Button size={ActionSizes.LARGE} color={ActionColors.RED}>Button</Button>
          <Button disabled size={ActionSizes.LARGE} color={ActionColors.RED}>Button</Button>
        </div>
      </div>
    </div>
  </div>
</div>
