import { CollectionConfig } from 'payload'

export const Sessions: CollectionConfig = {
  slug: 'sessions',
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
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true, // Permite subida masiva (Bulk)
      required: true,
      admin: {
        description: 'Selecciona o sube múltiples imágenes para esta galería.',
      },
    },
  ],
}