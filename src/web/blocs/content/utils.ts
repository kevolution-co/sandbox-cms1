import { Block } from 'payload'

export const contentBlock = (config: Block): Block => ({
  ...config,
  slug: `block-${config.slug || 'unnamed'}`,
})

export const ctaBlock = (config: Block): Block =>
  contentBlock({
    ...config,
    admin: {
      ...config.admin,
      group: {
        en: 'Call To Action Blocks',
        es: 'Bloques de Llamado a la Acción',
      },
    },
  })
