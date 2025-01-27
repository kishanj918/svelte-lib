import type { QuillOptionsStatic } from 'quill';

export const defaultToolbarOptions: QuillOptionsStatic = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image']
    ]
  },
  theme: 'snow'
};
