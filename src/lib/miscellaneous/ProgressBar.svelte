<script lang="ts">
  export let progress: number;
</script>

<div class="surface-progress h-3 w-full rounded-3xl">
  <div class="surface-progress-primary h-3 rounded-3xl" style={`width: ${progress}%;`} />
</div>
