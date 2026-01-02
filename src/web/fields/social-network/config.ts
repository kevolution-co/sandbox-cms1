import { TextField } from 'payload'

type Args = Partial<TextField> & {
  name:
    | 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'tiktok'
    | 'twitter'
    | 'whatsapp'
    | 'youtube'
}

export const socialNetworkField = (config: Args) =>
  ({
    ...config,
    admin: {
      ...config.admin,
      components: {
        ...config.admin?.components,
        Field: '/web/fields/social-network/field.tsx',
      },
    },
    type: 'text',
  }) as TextField
