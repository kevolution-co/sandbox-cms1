import { Config } from 'payload'

import { configAdmin } from './admin'
import { Documents } from './collections/docs'
import { Photos } from './collections/photos'
import { Users } from './collections/users'
import { configI18n, LocalesConfig } from './i18n'

// TODO: include in the plugin options a way to disable it
type Options = {
  locales?: LocalesConfig
}

export const systemPlugin =
  (opts: Options = {}) =>
  (incommingCongig: Config) => {
    const i18n = opts.locales ? configI18n(opts.locales) : {}
    const config = { ...incommingCongig, ...i18n }

    config.collections = [
      ...(config.collections || []),
      Users,
      Photos,
      Documents,
    ]

    // config.globals = [...(config.globals || [])]

    config.admin = configAdmin(config.admin || {})

    config.onInit = async (payload) => {
      if (incommingCongig.onInit) {
        await incommingCongig.onInit(payload)
      }
    }

    return config
  }
