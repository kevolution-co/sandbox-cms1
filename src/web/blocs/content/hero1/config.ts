import type { Block } from 'payload'

import { linkField } from '@/web/fields/link/config'

export const Hero1: Block = {
  admin: {
    group: {
      en: 'Hero Blocks',
      es: 'Bloques de Héroe',
    },
  },
  fields: [
    {
      label: {
        en: 'Badge Text',
        es: 'Texto de la Insignia',
      },
      localized: true,
      name: 'badge',
      type: 'text',
    },
    {
      label: {
        en: 'Heading',
        es: 'Encabezado',
      },
      localized: true,
      name: 'heading',
      type: 'text',
    },
    {
      label: {
        en: 'Description',
        es: 'Descripción',
      },
      localized: true,
      name: 'description',
      type: 'textarea',
    },
    {
      fields: [linkField()],
      label: {
        en: 'Buttons',
        es: 'Botones',
      },
      maxRows: 2,
      name: 'buttons',
      type: 'array',
    },
    {
      label: {
        en: 'Image',
        es: 'Imagen',
      },
      name: 'image',
      relationTo: 'cloud-photos',
      type: 'relationship',
    },
  ],
  imageAltText: 'Hero Section 01 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/hero1.jpg',
  labels: {
    plural: {
      en: 'Hero Sections 01',
      es: 'Secciones Héroe 01',
    },
    singular: {
      en: 'Hero Section 01',
      es: 'Sección Héroe 01',
    },
  },
  slug: 'block-hero-01',
}

