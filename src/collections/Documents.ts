import { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'updatedAt'],
  },
  // Esto activa el historial de cambios (Auditoría)
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Nombre del Documento',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Ambiental (CO2)', value: 'environmental' },
        { label: 'Legal / Contratos', value: 'legal' },
        { label: 'Seguridad Informática', value: 'security' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pendiente de Revisión', value: 'pending' },
        { label: 'Aprobado', value: 'approved' },
        { label: 'Rechazado', value: 'rejected' },
      ],
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media', // Se conecta con tu colección Media
      required: true,
    },
    {
        name: 'complianceNote',
        type: 'textarea',
        label: 'Notas de cumplimiento',
    }
  ],
}