import { GroupField } from 'payload'

import { colorField } from '../color/config'

export const colorContrastPaletteField = (config: Partial<GroupField>) =>
  ({
    ...config,
    admin: {
      className: 'z-0',
    },
    fields: [
      {
        fields: [
          {
            admin: {
              components: {
                Field: '/web/fields/color-contrast-palette/field.tsx',
              },
            },
            label: {
              en: 'Main Color',
              es: 'Color Principal',
            },
            name: 'bg',
            type: 'text',
          },
          colorField({
            admin: {
              readOnly: true,
            },
            label: {
              en: 'Contrast Color',
              es: 'Color de Contraste',
            },
            name: 'fg',
          }),
          {
            fields: [
              {
                fields: [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9.5]
                  .map((s) => s * 100)
                  .map((shade) =>
                    colorField({
                      admin: {
                        readOnly: true,
                      },
                      label: {
                        en: `Shade ${shade}`,
                        es: `Tono ${shade}`,
                      },
                      name: `${shade}`,
                    }),
                  ),
                type: 'row',
              },
            ],
            label: false,
            name: 'palette',
            type: 'group',
          },
        ],
        type: 'row',
      },
    ],
    type: 'group',
  }) as GroupField
