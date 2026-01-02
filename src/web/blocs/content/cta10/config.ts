import type { Block } from 'payload'

import { linkField } from '@/web/fields/link/config'

import { ctaBlock } from '../utils'

export const Cta10: Block = ctaBlock({
  fields: [
    {
      label: { en: 'Heading', es: 'Encabezado' },
      localized: true,
      name: 'heading',
      type: 'text',
    },
    {
      label: { en: 'Description', es: 'Descripción' },
      localized: true,
      name: 'description',
      type: 'textarea',
    },
    {
      fields: [
        {
          fields: [linkField()],
          label: { en: 'Primary Button', es: 'Botón Primario' },
          name: 'primary',
          type: 'group',
        },
        {
          fields: [linkField()],
          label: { en: 'Secondary Button', es: 'Botón Secundario' },
          name: 'secondary',
          type: 'group',
        },
      ],
      label: { en: 'Buttons', es: 'Botones' },
      name: 'buttons',
      type: 'group',
    },
  ],
  imageAltText: 'Call To Action Section 10 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/cta10.jpg',
  labels: {
    plural: {
      en: 'Call To Action Sections 10',
      es: 'Secciones Llamado a la Acción 10',
    },
    singular: {
      en: 'Call To Action Section 10',
      es: 'Sección Llamado a la Acción 10',
    },
  },
  slug: 'cta-10',
})
