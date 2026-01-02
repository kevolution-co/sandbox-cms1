import { GlobalConfig } from 'payload'

import { NavSubItemDefault } from '../blocs/navigation/default/config'
import { NavSubItemExpanded } from '../blocs/navigation/expanded/config'
import { globalConfig } from '../utils/globals'

export const Navigation: GlobalConfig = globalConfig({
  fields: [
    {
      admin: {
        position: 'sidebar',
      },
      defaultValue: 'center',
      name: 'position',
      options: [
        {
          label: {
            en: 'Left',
            es: 'Alineado a la izquierda',
          },
          value: 'left',
        },
        {
          label: {
            en: 'Center',
            es: 'Centrado',
          },
          value: 'center',
        },
        {
          label: {
            en: 'Right',
            es: 'Alineado a la derecha',
          },
          value: 'right',
        },
      ],
      type: 'select',
    },
    {
      fields: [
        {
          fields: [
            {
              label: {
                en: 'Label',
                es: 'Etiqueta',
              },
              localized: true,
              name: 'label',
              required: true,
              type: 'text',
            },
            {
              admin: {
                condition: (_, siblingData) =>
                  (siblingData.subItems || []).length === 0,
              },
              filterOptions: {
                _status: { equals: 'published' },
              },
              hooks: {
                beforeValidate: [
                  ({ siblingData }) => {
                    if ((siblingData.subItems || []).length > 0) {
                      return null
                    }
                  },
                ],
              },
              label: {
                en: 'Web Page',
                es: 'Página Web',
              },
              name: 'page',
              relationTo: 'web-pages',
              required: true,
              type: 'relationship',
            },
          ],
          type: 'row',
        },
        {
          blocks: [NavSubItemDefault, NavSubItemExpanded],
          label: {
            en: 'Sub Items',
            es: 'Subelementos',
          },
          maxRows: 1,
          name: 'subItems',
          type: 'blocks',
        },
      ],
      label: {
        en: 'Navigation Items',
        es: 'Elementos de navegación',
      },
      name: 'navItems',
      type: 'array',
    },
  ],
  label: {
    en: 'Navigation Menu',
    es: 'Menú de Navegación',
  },
  slug: 'navigation',
})
