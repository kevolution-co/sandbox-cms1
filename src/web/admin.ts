import { Config } from 'payload'

export const configAdmin = (
  incommingAdmin: Config['admin'],
): Config['admin'] => {
  const config = { ...incommingAdmin }

  if (!config.components) {
    config.components = {}
  }

  if (!config.components.graphics) {
    config.components.graphics = {}
  }

  config.components.graphics.Logo = '/web/components/graphics/logo.tsx#Logo'
  config.components.graphics.Icon = '/web/components/graphics/icon.tsx#Icon'

  return config
}
