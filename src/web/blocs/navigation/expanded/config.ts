import { Block } from 'payload'

import { navItemFields } from '../utils'

export const NavSubItemExpanded: Block = {
  fields: navItemFields([
    {
      fields: [
        {
          admin: {
            condition: (_, siblingData) => !siblingData.isExternal,
            style: {
              alignSelf: 'center',
              flex: '0 0 auto',
            },
          },
          defaultValue: false,
          label: {
            en: 'Highlight Item',
            es: 'Resaltar elemento',
          },
          name: 'isHighlighted',
          type: 'checkbox',
        },
        {
          admin: {
            condition: (_, data) => data.isHighlighted,
          },
          label: {
            en: 'Background Image',
            es: 'Imagen de fondo',
          },
          name: 'bgImage',
          relationTo: 'cloud-photos',
          type: 'upload',
        },
      ],
      type: 'row',
    },
  ]),
  labels: {
    plural: {
      en: 'Nav Expanded Subitems',
      es: 'Subelementos de navegación expandido',
    },
    singular: {
      en: 'Nav Expanded Subitem',
      es: 'Subelemento de navegación expandido',
    },
  },
  slug: 'subitem-expanded',
}
