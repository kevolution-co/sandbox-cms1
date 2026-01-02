import type { Block } from 'payload'

import { linkField } from '@/web/fields/link/config'

export const Footer6: Block = {
  fields: [
    {
      admin: { isSortable: true },
      fields: [
        {
          label: { en: 'Group', es: 'Grupo' },
          localized: true,
          name: 'group',
          required: true,
          type: 'text',
        },
        {
          fields: [linkField()],
          label: { en: 'Links', es: 'Enlaces' },
          name: 'links',
          type: 'array',
        },
      ],
      label: { en: 'Navigation Links', es: 'Enlaces de navegación' },
      name: 'navLinks',
      type: 'array',
    },
  ],
  labels: {
    plural: {
      en: 'Footers #6',
      es: 'Pies de página #6',
    },
    singular: {
      en: 'Footer #6',
      es: 'Pie de página #6',
    },
  },
  slug: 'web-footer-6',
}
