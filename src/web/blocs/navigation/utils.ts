import { Field } from 'payload'

import { linkField } from '@/web/fields/link/config'

export const navItemFields = (fields: Field[] = []): Field[] => [
  {
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        fields: [
          {
            label: {
              en: 'Web Page',
              es: 'Página Web',
            },
            name: 'page',
            relationTo: 'web-pages',
            required: true,
            type: 'relationship',
          },
          {
            admin: {
              style: {
                alignSelf: 'center',
                flex: '0 0 auto',
              },
            },
            defaultValue: false,
            label: {
              en: 'Show Description',
              es: 'Mostrar descripción',
            },
            name: 'showDescription',
            type: 'checkbox',
          },
        ],
        type: 'row',
      },
      ...fields,
    ],
    name: 'items',
    required: true,
    type: 'array',
  },
]
