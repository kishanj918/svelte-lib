<script lang="ts">
  import type { AppTextColors, AppTextDarkColors } from '$components/colors';
  import { IconMap, Icons } from './icons';

  export let icon: Icons;
  export let color: AppTextColors = 'text-grey-4';
  export let darkColor: AppTextDarkColors = 'dark:text-grey-4';
</script>

<span class="flex h-3.5 w-3.5 items-center justify-center {color} {darkColor}">
  <svelte:component this={IconMap[icon]} />
</span>
