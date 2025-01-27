<script>
  import RichTextEditor from '$components/miscellaneous/RichTextEditor.svelte';
</script>

<RichTextEditor
  customToolbarOptions={{
    modules: {
      toolbar: [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }]
    }
  }}
/>
