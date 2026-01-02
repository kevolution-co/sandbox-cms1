import { GlobalConfig } from 'payload'

import { Footer6 } from '../blocs/footers/06/config'
import { globalConfig } from '../utils/globals'

export const Footer: GlobalConfig = globalConfig({
  fields: [
    {
      blocks: [Footer6],
      label: {
        en: 'Footer Layout',
        es: 'Diseño del pie de página',
      },
      maxRows: 1,
      minRows: 1,
      name: 'block',
      required: true,
      type: 'blocks',
    },
  ],
  label: {
    en: 'Footer',
    es: 'Pie de página',
  },
  slug: 'footer',
})
