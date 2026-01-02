import type { Block } from 'payload'

import { ctaBlock } from '../utils'

export const Cta11: Block = ctaBlock({
  fields: [
    {
      label: { en: 'Heading', es: 'Encabezado' },
      localized: true,
      name: 'heading',
      type: 'text',
    },
    {
      label: { en: 'Description', es: 'Descripción' },
      localized: true,
      name: 'description',
      type: 'textarea',
    },
    {
      label: { en: 'Image', es: 'Imagen' },
      name: 'image',
      relationTo: 'cloud-photos',
      type: 'upload',
    },
  ],
  imageAltText: 'Call To Action Section 11 Block Screenshot',
  imageURL:
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/block/cta11.jpg',
  labels: {
    plural: {
      en: 'Call To Action Sections 11',
      es: 'Secciones Llamado a la Acción 11',
    },
    singular: {
      en: 'Call To Action Section 11',
      es: 'Sección Llamado a la Acción 11',
    },
  },
  slug: 'cta-11',
})

