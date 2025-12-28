import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media', // Directorio temporal
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'application/pdf'], // Solo imágenes y PDFs para auditoría
  },
  access: {
    read: () => true, // Por ahora público, luego lo protegeremos
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}