import { CollectionConfig, slugField } from 'payload'

import { contentBlocks } from '../fields/content-blocks/config'

export const Pages: CollectionConfig = {
  access: {
    read: ({ req }) => {
      if (req.user && req.user.collection === 'users') return true

      return {
        or: [
          { _status: { equals: 'published' } },
          { _status: { exists: false } },
        ],
      }
    },
  },
  admin: {
    group: {
      en: 'Web',
      es: 'Página web',
    },
    livePreview: {
      url: ({ data }) => `/${data.slug}?livePreview=true`,
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      label: {
        en: 'Title',
        es: 'Título',
      },
      localized: true,
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      admin: {
        description: {
          en: 'A brief description of the page for SEO purposes. Max. 150 characters.',
          es: 'Una breve descripción de la página para fines de SEO. Máx. 150 caracteres.',
        },
        position: 'sidebar',
      },
      label: {
        en: 'Description',
        es: 'Descripción',
      },
      localized: true,
      maxLength: 150,
      name: 'description',
      type: 'textarea',
    },
    slugField({ useAsSlug: 'title' }),
    contentBlocks(),
  ],
  labels: {
    plural: {
      en: 'Pages',
      es: 'Páginas',
    },
    singular: {
      en: 'Page',
      es: 'Página',
    },
  },
  slug: 'web-pages',
  trash: true,
  versions: {
    drafts: {
      autosave: {
        interval: 100,
        showSaveDraftButton: true,
      },
      schedulePublish: false,
      validate: false,
    },
  },
}
