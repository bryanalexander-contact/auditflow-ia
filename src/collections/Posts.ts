import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { 
      name: 'title', 
      type: 'text',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: { 
        description: 'Sube la portada aquí' 
      },
    },
    {
      name: 'downloadableFiles',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      admin: {
        description: 'Solo se permiten PDFs en esta sección',
      },
      // En v3, filterOptions ayuda pero el control real es el mimeType en Media
    },
  ],
}