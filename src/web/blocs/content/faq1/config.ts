import type { Block } from 'payload'

export const Faq1: Block = {
  admin: {
    group: {
      en: 'FAQ Blocks',
      es: 'Bloques de Preguntas Frecuentes',
    },
  },
  fields: [
    {
      label: {
        en: 'Heading',
        es: 'Encabezado',
      },
      localized: true,
      name: 'heading',
      type: 'text',
    },
    {
      fields: [
        {
          label: {
            en: 'Question',
            es: 'Pregunta',
          },
          localized: true,
          name: 'question',
          type: 'text',
        },
        {
          label: {
            en: 'Answer',
            es: 'Respuesta',
          },
          localized: true,
          name: 'answer',
          type: 'textarea',
        },
      ],
      label: {
        en: 'FAQ Items',
        es: 'Elementos de Preguntas Frecuentes',
      },
      minRows: 1,
      name: 'items',
      type: 'array',
    },
  ],
  imageAltText: 'FAQ Section 01 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/faq1.jpg',
  labels: {
    plural: {
      en: 'FAQ Sections 01',
      es: 'Secciones Preguntas Frecuentes 01',
    },
    singular: {
      en: 'FAQ Section 01',
      es: 'Sección Preguntas Frecuentes 01',
    },
  },
  slug: 'block-faq-01',
}

