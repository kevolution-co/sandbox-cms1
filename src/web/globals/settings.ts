import { Tab } from 'payload'

import { borderRadiusField } from '../fields/border-radius/config'
import { colorContrastPaletteField } from '../fields/color-contrast-palette/config'
import { fontFamilyField } from '../fields/font-select/config'
import { socialNetworkField } from '../fields/social-network/config'
import { globalConfig } from '../utils/globals'

const generalTab: Tab = {
  fields: [
    {
      label: { en: 'Site Name', es: 'Nombre del Sitio' },
      name: 'name',
      type: 'text',
    },
    {
      admin: {
        description: {
          en: 'A brief description of the website for SEO purposes.',
          es: 'Una breve descripción del sitio web para propósitos de SEO.',
        },
      },
      label: { en: 'Site Description', es: 'Descripción del Sitio' },
      localized: true,
      name: 'description',
      type: 'textarea',
    },
    {
      admin: {
        description: {
          en: 'The site icon is what you see in browser tabs and bookmarks bars. It should be square and at least 512 by 512 pixels.',
          es: 'El icono del sitio es lo que ves en las pestañas del navegador y en las barras de favoritos. Debe ser cuadrado y tener al menos 512 por 512 píxeles.',
        },
      },
      label: { en: 'Site Icon', es: 'Icono del Sitio' },
      name: 'icon',
      relationTo: 'cloud-photos',
      type: 'upload',
    },
    {
      admin: {
        description: {
          en: 'The site logo is used in the website header and footer.',
          es: 'El logo del sitio se utiliza en la cabecera y el pie de página del sitio web.',
        },
      },
      label: {
        en: 'Site Logo',
        es: 'Logo del Sitio',
      },
      name: 'logo',
      relationTo: 'cloud-photos',
      type: 'upload',
    },
  ],
  label: { en: 'General', es: 'General' },
  name: 'general',
}

const stylesTab: Tab = {
  fields: [
    {
      fields: [borderRadiusField(), fontFamilyField()],
      type: 'row',
    },
    colorContrastPaletteField({
      label: { en: 'Brand Color', es: 'Color de Marca' },
      name: 'brand',
    }),
    colorContrastPaletteField({
      label: { en: 'Secondary Color', es: 'Color Secundario' },
      name: 'secondary',
    }),
  ],
  label: { en: 'Styles', es: 'Estilos' },
  name: 'styles',
}

const socialTab: Tab = {
  fields: [
    {
      fields: [
        {
          fields: [
            {
              label: { en: 'Email', es: 'Correo Electrónico' },
              name: 'email',
              type: 'email',
            },
            {
              admin: {
                description: {
                  en: 'Type only numbers and the "+" sign. Example: +1234567890. No spaces or dashes. Proper formatting will be applied automatically.',
                  es: 'Escribe solo números y el signo "+". Ejemplo: +1234567890. Sin espacios ni guiones. El formato adecuado se aplicará automáticamente.',
                },
              },
              label: { en: 'Phone', es: 'Teléfono' },
              name: 'phone',
              type: 'text',
            },
          ],
          type: 'row',
        },
      ],
      label: { en: 'Contact', es: 'Contacto' },
      name: 'contact',
      type: 'group',
    },
    {
      fields: [
        {
          fields: [
            socialNetworkField({
              label: { en: 'X (Twitter)', es: 'X (Twitter)' },
              name: 'twitter',
            }),
            socialNetworkField({
              label: { en: 'Facebook', es: 'Facebook' },
              name: 'facebook',
            }),
            socialNetworkField({
              label: { en: 'Instagram', es: 'Instagram' },
              name: 'instagram',
            }),
          ],
          type: 'row',
        },
        {
          fields: [
            socialNetworkField({
              label: { en: 'LinkedIn', es: 'LinkedIn' },
              name: 'linkedin',
            }),
            socialNetworkField({
              label: { en: 'TikTok', es: 'TikTok' },
              name: 'tiktok',
            }),
            socialNetworkField({
              label: { en: 'WhatsApp', es: 'WhatsApp' },
              name: 'whatsapp',
            }),
          ],
          type: 'row',
        },
        {
          fields: [
            socialNetworkField({
              label: { en: 'YouTube', es: 'YouTube' },
              name: 'youtube',
            }),
            socialNetworkField({
              label: { en: 'Discord', es: 'Discord' },
              name: 'discord',
            }),
            socialNetworkField({
              label: { en: 'GitHub', es: 'GitHub' },
              name: 'github',
            }),
          ],
          type: 'row',
        },
      ],
      label: { en: 'Social Networks', es: 'Redes Sociales' },
      name: 'networks',
      type: 'group',
    },
  ],
  label: { en: 'Social Media', es: 'Redes Sociales' },
  name: 'social',
}

export const Settings = globalConfig({
  fields: [
    {
      tabs: [generalTab, stylesTab, socialTab],
      type: 'tabs',
    },
  ],
  label: {
    en: 'Settings',
    es: 'Ajustes',
  },
  slug: 'settings',
})
