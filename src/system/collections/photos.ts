import { mediaCollection } from '../utils/collections'

export const Photos = mediaCollection({
  access: {
    read: () => true,
  },
  fields: [
    {
      label: {
        en: 'Alt Text',
        es: 'Texto Alternativo',
      },
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  labels: {
    plural: {
      en: 'Photos',
      es: 'Fotos',
    },
    singular: {
      en: 'Photo',
      es: 'Foto',
    },
  },
  slug: 'photos',
  upload: { mimeTypes: ['image/*', 'video/*'] },
})
