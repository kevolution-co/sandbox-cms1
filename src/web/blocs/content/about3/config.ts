import type { Block } from 'payload'

import { linkField } from '@/web/fields/link/config'

export const About3: Block = {
  admin: {
    group: {
      en: 'About Blocks',
      es: 'Bloques Acerca de',
    },
  },
  fields: [
    {
      fields: [
        {
          fields: [
            {
              hooks: {
                beforeValidate: [({ value }) => (value || '').trim()],
              },
              label: {
                en: 'Section Title',
                es: 'Título de la Sección',
              },
              localized: true,
              name: 'title',
              type: 'text',
            },
            {
              hooks: {
                beforeValidate: [({ value }) => (value || '').trim()],
              },
              label: {
                en: 'Section Description',
                es: 'Descripción de la Sección',
              },
              localized: true,
              name: 'description',
              type: 'textarea',
            },
          ],
          type: 'group',
        },
        {
          fields: [
            {
              label: {
                en: 'Main Image',
                es: 'Imagen Principal',
              },
              name: 'main',
              relationTo: 'cloud-photos',
              type: 'upload',
            },
            {
              label: {
                en: 'Secondary Image',
                es: 'Imagen Secundaria',
              },
              name: 'secondary',
              relationTo: 'cloud-photos',
              type: 'upload',
            },
          ],
          label: {
            en: 'Images',
            es: 'Imágenes',
          },
          name: 'images',
          type: 'group',
        },
      ],
      type: 'row',
    },
    {
      fields: [
        {
          admin: { initCollapsed: true },
          fields: [
            {
              hooks: {
                beforeValidate: [({ value }) => (value || '').trim()],
              },
              label: {
                en: 'Breakout Title',
                es: 'Título Destacado',
              },
              localized: true,
              name: 'title',
              type: 'text',
            },
            {
              hooks: {
                beforeValidate: [({ value }) => (value || '').trim()],
              },
              label: {
                en: 'Breakout Description',
                es: 'Descripción Destacada',
              },
              localized: true,
              name: 'description',
              type: 'textarea',
            },
            {
              label: {
                en: 'Breakout Image',
                es: 'Imagen Destacada',
              },
              name: 'image',
              relationTo: 'cloud-photos',
              type: 'upload',
            },
            {
              admin: {
                style: {
                  border: 0,
                  paddingLeft: 0,
                },
              },
              fields: [linkField()],
              label: false,
              name: 'button',
              type: 'group',
            },
          ],
          label: {
            en: 'Breakout Section',
            es: 'Sección Destacada',
          },
          type: 'collapsible',
        },
      ],
      label: false,
      name: 'breakout',
      type: 'group',
    },
    {
      fields: [
        {
          admin: { initCollapsed: true },
          fields: [
            {
              hooks: {
                beforeValidate: [({ value }) => (value || '').trim()],
              },
              label: {
                en: 'Companies Title',
                es: 'Título de Compañías',
              },
              localized: true,
              name: 'title',
              type: 'text',
            },
            {
              fields: [
                {
                  hasMany: true,
                  label: false,
                  name: 'logo',
                  relationTo: 'cloud-photos',
                  type: 'upload',
                },
              ],
              label: {
                en: 'Company Logos',
                es: 'Logos de Compañías',
              },
              type: 'collapsible',
            },
          ],
          label: {
            en: 'Companies Section',
            es: 'Sección de Compañías',
          },
          type: 'collapsible',
        },
      ],
      label: false,
      name: 'companies',
      type: 'group',
    },
    {
      fields: [
        {
          admin: { initCollapsed: true },
          fields: [
            {
              fields: [
                {
                  hooks: {
                    beforeValidate: [({ value }) => (value || '').trim()],
                  },
                  label: {
                    en: 'Achievements Title',
                    es: 'Título de Logros',
                  },
                  localized: true,
                  name: 'title',
                  type: 'text',
                },
                {
                  hooks: {
                    beforeValidate: [({ value }) => (value || '').trim()],
                  },
                  label: {
                    en: 'Achievements Description',
                    es: 'Descripción de Logros',
                  },
                  localized: true,
                  name: 'description',
                  type: 'textarea',
                },
              ],
              type: 'row',
            },
            {
              fields: [
                {
                  fields: [
                    {
                      hooks: {
                        beforeValidate: [({ value }) => (value || '').trim()],
                      },
                      label: {
                        en: 'Achievement item Label',
                        es: 'Etiqueta del ítem de Logro',
                      },
                      localized: true,
                      name: 'label',
                      type: 'text',
                    },
                    {
                      hooks: {
                        beforeValidate: [({ value }) => (value || '').trim()],
                      },
                      label: {
                        en: 'Achievement item Value',
                        es: 'Valor del ítem de Logro',
                      },
                      localized: true,
                      name: 'value',
                      type: 'text',
                    },
                  ],
                  type: 'row',
                },
              ],
              label: {
                en: 'Achievements Items',
                es: 'Ítems de Logros',
              },
              name: 'items',
              type: 'array',
            },
          ],
          label: {
            en: 'Achievements Section',
            es: 'Sección de Logros',
          },
          type: 'collapsible',
        },
      ],
      label: false,
      name: 'achievements',
      type: 'group',
    },
  ],
  imageAltText: 'About Section 03 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/about3.jpg',
  labels: {
    plural: {
      en: 'About Sections 03',
      es: 'Secciones Acerca de 03',
    },
    singular: {
      en: 'About Section 03',
      es: 'Sección Acerca de 03',
    },
  },
  slug: 'block-about-03',
}
