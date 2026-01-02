import { Field } from 'payload'

import { contentBlocksDef } from '@/web/blocs/content'

export const contentBlocks = (): Field => ({
  admin: {
    initCollapsed: true,
  },
  blocks: contentBlocksDef,
  label: {
    en: 'Content Blocks',
    es: 'Bloques de Contenido',
  },
  name: 'content',
  type: 'blocks',
})
