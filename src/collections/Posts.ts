// collections/Posts.ts
export const Posts = {
  slug: 'posts',
  fields: [
    { name: 'title', type: 'text' },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Sube la portada aquí' }
    },
    {
      name: 'downloadableFiles',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      filterOptions: {
        mimeType: { contains: 'application/pdf' }, // Solo permite PDFs
      },
    },
  ],
};

// En payload.config.ts añade:
// sharp.webp() se encarga de la conversión si lo configuras en los hooks.