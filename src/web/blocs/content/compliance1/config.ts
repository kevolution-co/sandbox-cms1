import type { Block } from 'payload'

export const Compliance1: Block = {
  admin: {
    group: {
      en: 'Compliance Blocks',
      es: 'Bloques de Cumplimiento',
    },
  },
  fields: [
    {
      label: {
        en: 'Badge Text',
        es: 'Texto del Distintivo',
      },
      localized: true,
      name: 'badge',
      type: 'text',
    },
    {
      label: {
        en: 'Title',
        es: 'Título',
      },
      localized: true,
      name: 'title',
      type: 'text',
    },
    {
      label: {
        en: 'Description',
        es: 'Descripción',
      },
      localized: true,
      name: 'description',
      type: 'textarea',
    },
    {
      hasMany: true,
      label: {
        en: 'Certifications',
        es: 'Certificaciones',
      },
      name: 'certifications',
      relationTo: 'cloud-photos',
      type: 'relationship',
    },
    {
      fields: [
        {
          label: {
            en: 'Title',
            es: 'Título',
          },
          localized: true,
          name: 'title',
          type: 'text',
        },
        {
          label: {
            en: 'Description',
            es: 'Descripción',
          },
          localized: true,
          name: 'description',
          type: 'textarea',
        },
        {
          label: {
            en: 'Icon',
            es: 'Icono',
          },
          name: 'icon',
          relationTo: 'cloud-photos',
          type: 'relationship',
        },
      ],
      label: {
        en: 'Highlights',
        es: 'Aspectos Destacados',
      },
      name: 'highlights',
      type: 'array',
    },
  ],
  imageAltText: 'Compliance Section 01 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/compliance1.jpg',
  labels: {
    plural: {
      en: 'Compliance Sections 01',
      es: 'Secciones Cumplimiento 01',
    },
    singular: {
      en: 'Compliance Section 01',
      es: 'Sección Cumplimiento 01',
    },
  },
  slug: 'block-compliance-01',
}

