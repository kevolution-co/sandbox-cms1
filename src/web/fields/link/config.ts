import { Condition, Field, FieldHook, PayloadRequest, Validate } from 'payload'
import * as z from 'zod'

const useZwithLocales = (locale: PayloadRequest['locale']) => {
  const localeMap = locale === 'all' ? z.locales.en : z.locales[locale]
  z.config(localeMap())
  return z
}

const cleanWhenExternalLink =
  (when = false, returnsNull = false): FieldHook =>
  ({ siblingData, value }) => {
    if (siblingData.isExternal === when) {
      return value
    }

    return returnsNull ? null : ''
  }

const displayWhenExternalLink =
  (when = false): Condition =>
  (_, siblingData) =>
    siblingData.isExternal === when

const validateRequired: Validate = (value, { req: { t } }) => {
  if (!value) return t('validation:required')
  return true
}

const ValidateLinkUrl: Validate = (value, { req: { locale } }) => {
  const urlSchema = useZwithLocales(locale).httpUrl()
  const validation = urlSchema.safeParse(value)

  if (validation.success) return true

  return validation.error.issues[0].message
}

export const linkField = (
  {
    required,
  }: {
    required?: boolean
  } = { required: false },
): Field => ({
  fields: [
    {
      admin: { width: 'auto' },
      defaultValue: false,
      label: { en: 'Is External Link', es: 'Es Enlace Externo' },
      name: 'isExternal',
      type: 'checkbox',
    },
    {
      admin: { className: 'grow' },
      fields: [
        {
          admin: {
            condition: displayWhenExternalLink(true),
          },
          hooks: {
            beforeValidate: [cleanWhenExternalLink(true)],
          },
          label: { en: 'Link Label', es: 'Etiqueta del Enlace' },
          name: 'linkLabel',
          type: 'text',
          validate: required ? validateRequired : undefined,
        },
        {
          admin: {
            condition: displayWhenExternalLink(true),
          },
          hooks: {
            beforeValidate: [cleanWhenExternalLink(true)],
          },
          label: { en: 'Link URL', es: 'URL del Enlace' },
          name: 'linkUrl',
          type: 'text',
          validate: required ? ValidateLinkUrl : undefined,
        },
      ],
      type: 'row',
    },
    {
      admin: {
        className: 'grow',
        condition: displayWhenExternalLink(false),
      },
      hooks: {
        beforeValidate: [cleanWhenExternalLink(false, true)],
      },
      label: {
        en: 'Web Page',
        es: 'Página Web',
      },
      name: 'page',
      relationTo: 'web-pages',
      type: 'relationship',
      validate: required ? validateRequired : undefined,
    },
  ],
  type: 'row',
})
