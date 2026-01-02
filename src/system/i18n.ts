import { Language } from '@payloadcms/translations'
import { Config, Locale, LocalizationConfig } from 'payload'

export type LocalesConfig = Array<Locale & { language: Language }>

export const configI18n = (
  locales: LocalesConfig,
): Pick<Config, 'i18n' | 'localization'> => {
  if (!locales.length) {
    return {}
  }

  return locales.reduce(
    (config, { language, ...locale }) => {
      if (!config.i18n.fallbackLanguage) {
        config.i18n.fallbackLanguage =
          locale.code as Config['i18n']['fallbackLanguage']
      }
      if (!config.localization.defaultLocale) {
        config.localization.defaultLocale = locale.code
      }

      config.i18n.supportedLanguages = {
        ...config.i18n.supportedLanguages,
        [locale.code]: language,
      }

      config.localization.locales = [
        ...(config.localization.locales || []),
        locale,
      ] as Locale[]

      return config
    },
    {
      i18n: {},
      localization: {},
    } as Pick<Config, 'i18n' | 'localization'> & {
      localization: LocalizationConfig
    },
  )
}
