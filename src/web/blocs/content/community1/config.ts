import { Block } from 'payload'

export const Community1: Block = {
  admin: {
    group: {
      en: 'Community Blocks',
      es: 'Bloques de Comunidad',
    },
  },
  fields: [
    {
      fields: [
        {
          label: { en: 'Title', es: 'Título' },
          localized: true,
          name: 'title',
          type: 'text',
        },
        {
          label: { en: 'Subtitle', es: 'Subtítulo' },
          localized: true,
          name: 'subtitle',
          type: 'text',
        },
      ],
      type: 'row',
    },
    {
      fields: [
        {
          label: { en: 'Network', es: 'Red Social' },
          name: 'network',
          options: [
            { label: 'X (Twitter)', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'WhatsApp', value: 'whatsapp' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Discord', value: 'discord' },
            { label: 'GitHub', value: 'github' },
          ],
          type: 'select',
        },
      ],
      label: { en: 'Social Links', es: 'Enlaces Sociales' },
      minRows: 0,
      name: 'social',
      type: 'array',
    },
  ],
  imageAltText: 'Community Section 01 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/community1.jpg',
  labels: {
    plural: {
      en: 'Community Sections 01',
      es: 'Secciones Comunidad 01',
    },
    singular: {
      en: 'Community Section 01',
      es: 'Sección Comunidad 01',
    },
  },
  slug: 'block-community-01',
}
