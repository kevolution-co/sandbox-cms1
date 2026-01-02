import { GroupField, SelectField, TextField } from 'payload'

export const fontFamilyField = (
  config: Partial<TextField> = {},
): GroupField => ({
  fields: [
    {
      ...config,
      admin: {
        components: {
          Field: '/web/fields/font-select/field.tsx',
        },
      },
      label: {
        en: 'Font Family',
        es: 'Fuente Tipográfica',
      },
      name: 'key',
      type: 'text',
    } as TextField,
    {
      admin: {
        hidden: true,
      },
      name: 'family',
      type: 'text',
    },
  ],
  label: false,
  name: 'font',
  type: 'group',
})
