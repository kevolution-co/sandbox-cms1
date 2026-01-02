import { Config } from 'payload'

import { Users } from './collections/users'

export const configAdmin = (
  incommingAdmin: Config['admin'],
): Config['admin'] => {
  const config = { ...incommingAdmin }

  config.user = Users.slug

  if (!config.meta) {
    config.meta = {}
  }

  if (!config.meta.icons) {
    config.meta.icons = []
  }

  if (Array.isArray(config.meta.icons)) {
    config.meta.icons.push({
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    })
  }

  if (!config.components) {
    config.components = {}
  }

  if (!config.components.graphics) {
    config.components.graphics = {}
  }

  config.components.graphics.Logo = '/system/components/graphics/logo.tsx#Logo'
  config.components.graphics.Icon = '/system/components/graphics/icon.tsx#Icon'

  return config
}
