// collections/Media.ts
export const Media = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    // Solo permite imágenes de cualquier tipo
    mimeTypes: ['image/*'], 
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 768, height: 1024, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
};