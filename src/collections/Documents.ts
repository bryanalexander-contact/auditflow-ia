// collections/Documents.ts
import { CollectionConfig } from 'payload';

export const Documents: CollectionConfig = {
  slug: 'documents',
  // Configuración de subida de archivos
  upload: {
    staticDir: 'documents',
    // Filtro de seguridad para que solo suban PDFs o Word
    mimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
  },
  // Habilitamos versiones y borradores (Drafts)
  versions: {
    drafts: true,
  },
  access: {
    // Control de acceso: Admin ve todo, Usuario solo lo suyo
    read: ({ req }) => {
      const user = req.user as any; // Usamos 'as any' para evitar el error del campo 'role'
      
      if (!user) return false; // Si no está logueado, no ve nada
      
      if (user.role === 'admin') return true; // Si es admin, tiene permiso total
      
      // Si es usuario normal, aplicamos el filtro por dueño
      return {
        owner: {
          equals: user.id,
        },
      };
    },
    // Es recomendable añadir permisos de creación también
    create: ({ req }) => !!req.user,
    update: ({ req }) => {
      const user = req.user as any;
      if (user?.role === 'admin') return true;
      return { owner: { equals: user?.id } };
    },
  },
  fields: [
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Demanda', value: 'Demanda' },
        { label: 'Sentencia', value: 'Sentencia' },
        { label: 'Prueba', value: 'Prueba' },
      ],
      required: true,
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      // Se rellena automáticamente con el ID del usuario que sube el archivo
      defaultValue: ({ user }: { user: any }) => user?.id,
      admin: {
        position: 'sidebar', // Lo ponemos a un lado para que no estorbe
      }
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Notas adicionales',
    }
  ],
};