import { contentBlocks } from '../fields/content-blocks/config'
import { globalConfig } from '../utils/globals'

export const Landing = globalConfig({
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
    livePreview: {
      url: () => `/?livePreview=true`,
    },
  },
  fields: [contentBlocks()],
  label: {
    en: 'Landing Page',
    es: 'Página de Inicio',
  },
  slug: 'landing',
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
})
