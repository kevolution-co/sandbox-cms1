import { mediaCollection } from '../utils/collections'

export const Documents = mediaCollection({
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
      en: 'Documents',
      es: 'Documentos',
    },
    singular: {
      en: 'Document',
      es: 'Documento',
    },
  },
  slug: 'documents',
  upload: {
    mimeTypes: [
      'application/*',
      'audio/*',
      'chemical/*',
      'font/*',
      'gcode',
      'message/*',
      'model/*',
      'text/*',
      'x-conference/*',
    ],
  },
})
