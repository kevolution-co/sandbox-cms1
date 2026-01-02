import { Config } from 'payload'

import { configAdmin } from './admin'
import { Pages } from './collections/page'
import { colorPalette } from './endpoints/color-palette'
import { styles } from './endpoints/styles'
import { Footer } from './globals/footer'
import { Landing } from './globals/landing'
import { Navigation } from './globals/navigation'
import { Settings } from './globals/settings'

// TODO: include in the plugin options a way to disable it
type Options = {}

export const webBuilderPlugin =
  (opts: Options = {}) =>
  (incomingConfig: Config) => {
    const config = { ...incomingConfig }

    config.admin = configAdmin(config.admin || {})

    config.collections = [...(config.collections || []), Pages]

    config.endpoints = [...(config.endpoints || []), colorPalette, styles]

    config.globals = [
      ...(config.globals || []),
      Landing,
      Navigation,
      Footer,
      Settings,
    ]

    return config
  }
