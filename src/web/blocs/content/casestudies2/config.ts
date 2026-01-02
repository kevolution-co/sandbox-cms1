import type { Block } from 'payload'

export const CaseStudies2: Block = {
  admin: {
    group: {
      en: 'Case Studies Blocks',
      es: 'Bloques de Estudios de Caso',
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
          fields: [
            {
              fields: [
                {
                  label: { en: 'Author', es: 'Autor' },
                  localized: true,
                  name: 'author',
                  type: 'text',
                },
                {
                  label: { en: 'Role in Company', es: 'Puesto en la compañía' },
                  localized: true,
                  name: 'role',
                  type: 'text',
                },
              ],
              type: 'row',
            },
            {
              fields: [
                {
                  label: { en: 'Company Logo', es: 'Logo de la compañía' },
                  name: 'logo',
                  relationTo: 'cloud-photos',
                  type: 'upload',
                },
                {
                  label: { en: 'Thumbnail Image', es: 'Imagen en miniatura' },
                  name: 'thumbnail',
                  relationTo: 'cloud-photos',
                  type: 'upload',
                },
              ],
              type: 'row',
            },
            {
              label: { en: 'Quote', es: 'Cita' },
              localized: true,
              name: 'quote',
              type: 'textarea',
            },
            {
              fields: [
                {
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
                        {
                          label: { en: 'Value', es: 'Valor' },
                          localized: true,
                          name: 'value',
                          type: 'text',
                        },
                      ],
                      type: 'row',
                    },
                  ],
                  label: false,
                  maxRows: 2,
                  name: 'items',
                  type: 'array',
                },
              ],
              label: { en: 'Statistics', es: 'Estadísticas' },
              name: 'stats',
              type: 'group',
            },
          ],
          label: false,
          name: 'items',
          type: 'array',
        },
      ],
      label: { en: 'Case Studies', es: 'Estudios de Casos' },
      type: 'collapsible',
    },
  ],
  imageAltText: 'Case Studies Section 02 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/casestudies2.jpg',
  labels: {
    plural: {
      en: 'Case Studies Sections 02',
      es: 'Secciones Estudios de Caso 02',
    },
    singular: {
      en: 'Case Studies Section 02',
      es: 'Sección Estudios de Caso 02',
    },
  },
  slug: 'block-case-studies-02',
}

