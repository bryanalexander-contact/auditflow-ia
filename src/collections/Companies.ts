import type { CollectionConfig } from 'payload'

export const Companies: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'taxId', 'status'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre de la Empresa',
    },
    {
      name: 'taxId',
      type: 'text',
      unique: true,
      required: true,
      label: 'ID Fiscal / RUT / NIT',
    },
    {
      type: 'row', // Organiza los selectores de archivos en una sola fila
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media', // Conectado a Supabase S3 via Media
          required: false,
          admin: {
            description: 'Sube el logo corporativo (PNG o JPG)',
          },
        },
        {
          name: 'taxCertificate',
          type: 'upload',
          relationTo: 'documents', // Conectado a Supabase S3 via Documents (Solo PDF/Word)
          required: true,
          admin: {
            description: 'Certificado tributario oficial (Solo PDF)',
          },
        },
      ],
    },
    {
      name: 'website',
      type: 'text',
      label: 'Sitio Web Corporativo',
      admin: {
        placeholder: 'https://www.empresa.com',
        // Esta es la forma segura en v3 de poner un mensaje dinámico/estático
        description: 'Asegúrese de incluir el protocolo https://',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Activo', value: 'active' },
        { label: 'En Auditoría', value: 'audit' },
        { label: 'Inactivo', value: 'inactive' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'employees',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      label: 'Empleados Autorizados',
      admin: {
        position: 'sidebar',
      }
    },
  ],
}