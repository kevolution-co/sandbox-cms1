import { GroupField, NumberField } from 'payload'

export const borderRadiusField = (config: Partial<NumberField> = {}) =>
  ({
    fields: [
      {
        ...config,
        admin: {
          ...config.admin,
          components: {
            Field: '/web/fields/border-radius/field.tsx',
          },
        },
        defaultValue: 10,
        label: false,
        max: 14,
        min: 0,
        name: 'radius',
        type: 'number',
      } as NumberField,
    ],
    label: {
      en: 'Border Radius',
      es: 'Bordes Redondeados',
    },
    type: 'group',
  }) as GroupField
