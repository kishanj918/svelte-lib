<script lang="ts">
  import Star from '$components/icons/Star.svelte';
  import getComponentUUID from '$components/utils/getUUID';
  export let rating = 0;
  export let id = getComponentUUID('star-rating');
</script>

<!--
@component
A Star Rating component. Uses a range from 0 to 5, with each increment filling a star

Properties:
- `rating`: The numeric value of the current rating (0-5)

  ```tsx
  <StarRating rating={4} />
  ```
-->
<div class="inline-flex" {id}>
  {#each [1, 2, 3, 4, 5] as star}
    <span
      class="text-grey-1 dark:text-grey-7"
      class:pr-1.5={star < 5}
      class:!text-rainbow-yellow-4={star <= rating}
    >
      <Star />
    </span>
  {/each}
</div>
