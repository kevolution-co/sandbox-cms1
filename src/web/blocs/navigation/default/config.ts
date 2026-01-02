import { Block } from 'payload'

import { navItemFields } from '../utils'

export const NavSubItemDefault: Block = {
  fields: navItemFields(),
  labels: {
    plural: {
      en: 'Nav Simple Subitems',
      es: 'Subelementos de navegación simple',
    },
    singular: {
      en: 'Nav Simple Subitem',
      es: 'Subelemento de navegación simple',
    },
  },
  slug: 'subitem-default',
}
