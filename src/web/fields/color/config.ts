import { TextField } from 'payload'

export const colorField = (config: Partial<TextField> = {}): TextField =>
  ({
    ...config,
    admin: {
      ...config.admin,
      components: {
        Field: '/web/fields/color/field.tsx',
      },
    },
    type: 'text',
  }) as TextField
