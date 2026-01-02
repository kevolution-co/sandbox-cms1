import type { Block } from 'payload'

export const Awards1: Block = {
  admin: {
    group: {
      en: 'Award Blocks',
      es: 'Bloques de Premios',
    },
  },
  fields: [
    {
      fields: [
        {
          fields: [
            {
              label: {
                en: 'Award Name',
                es: 'Nombre del Premio',
              },
              localized: true,
              name: 'name',
              type: 'text',
            },
            {
              admin: {
                date: {
                  displayFormat: 'YYYY',
                },
              },
              label: {
                en: 'Award Year',
                es: 'Año del Premio',
              },
              name: 'year',
              type: 'date',
            },
          ],
          type: 'row',
        },
        {
          label: {
            en: 'Award Description',
            es: 'Descripción del Premio',
          },
          localized: true,
          name: 'description',
          type: 'textarea',
        },
      ],
      label: {
        en: 'Awards',
        es: 'Premios',
      },
      minRows: 1,
      name: 'awards',
      type: 'array',
    },
  ],
  imageAltText: 'Award Section 01 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/awards1.jpg',
  labels: {
    plural: {
      en: 'Award Sections 01',
      es: 'Secciones Premio 01',
    },
    singular: {
      en: 'Award Section 01',
      es: 'Sección Premio 01',
    },
  },
  slug: 'block-award-01',
}
