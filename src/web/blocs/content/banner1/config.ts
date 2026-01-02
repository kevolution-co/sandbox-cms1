import type { Block } from 'payload'

import { linkField } from '@/web/fields/link/config'

export const Banner1: Block = {
  admin: {
    group: {
      en: 'Banner Blocks',
      es: 'Bloques de Banners',
    },
  },
  fields: [
    {
      fields: [
        {
          label: {
            en: 'Title',
            es: 'Título',
          },
          localized: true,
          name: 'title',
          type: 'text',
        },
        {
          defaultValue: true,
          label: {
            en: 'Default Visible',
            es: 'Visible por Defecto',
          },
          name: 'defaultVisible',
          type: 'checkbox',
        },
      ],
      type: 'row',
    },
    {
      label: {
        en: 'Description',
        es: 'Descripción',
      },
      localized: true,
      name: 'description',
      type: 'text',
    },
    {
      fields: [linkField()],
      label: false,
      name: 'link',
      type: 'group',
    },
  ],
  imageAltText: 'Banner Section 01 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/banner1.jpg',
  labels: {
    plural: {
      en: 'Banner Sections 01',
      es: 'Secciones Banner 01',
    },
    singular: {
      en: 'Banner Section 01',
      es: 'Sección Banner 01',
    },
  },
  slug: 'block-banner-01',
}

