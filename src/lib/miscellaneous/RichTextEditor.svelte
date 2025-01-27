<script lang="ts">
  import MarkdownIt from 'markdown-it';
  import type Quill from 'quill';
  import 'quill/dist/quill.snow.css';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { defaultToolbarOptions } from './toolbarConfig';
  import type { QuillOptionsStatic } from 'quill';

  export let content = '';
  export let customToolbarOptions: QuillOptionsStatic = {};

  const md = new MarkdownIt();
  const mergeToolbarOptions = () => {
    return {
      ...defaultToolbarOptions,
      ...customToolbarOptions,
      modules: {
        ...defaultToolbarOptions.modules,
        toolbar: customToolbarOptions.modules?.toolbar || defaultToolbarOptions.modules?.toolbar
      }
    };
  };
  let editor: HTMLDivElement;
  let quill: Quill;
  onMount(async () => {
    const { default: Quill } = await import('quill');
    const { default: Turndown } = await import('turndown');
    const turndownService = new Turndown();
    if (browser && editor && !quill) {
      const options = mergeToolbarOptions();

      quill = new Quill(editor, options);
      if (content.length > 0) quill.clipboard.dangerouslyPasteHTML(md.render(content));
      quill.on('text-change', () => {
        content = turndownService.turndown(quill.container.firstChild.innerHTML);
      });
    }
  });
</script>

<div class="quill w-full" bind:this={editor} />

<style>
  :global(.ql-toolbar) {
    @apply bg-blue-grey-2;
    @apply border-y-1;
    @apply border-x-0;
  }
  .quill {
    @apply border-0;
  }
  :global(.quill > .ql-editor > p) {
    @apply font-lato-regular;
    @apply text-xs;
  }
  :global(.quill > .ql-editor > p, h1, h2, h3, ul, li, ol) {
    @apply my-2;
  }
  :global(.quill > .ql-editor > h1, h2, h3) {
    @apply font-lato-bold;
  }
</style>
