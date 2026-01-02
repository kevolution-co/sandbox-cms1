import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  admin: {
    group: {
      en: 'Access Control',
      es: 'Control de Acceso',
    },
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  labels: {
    plural: {
      en: 'Users',
      es: 'Usuarios',
    },
    singular: {
      en: 'User',
      es: 'Usuario',
    },
  },
  slug: 'users',
}
