import { GlobalConfig } from 'payload'

export const globalConfig = (config: GlobalConfig): GlobalConfig => ({
  ...config,
  admin: {
    ...config.admin,
    group: {
      en: 'Web',
      es: 'Página web',
    },
    hideAPIURL: true,
  },
  slug: `web-${config.slug || 'global'}`,
  versions: (config.versions as GlobalConfig['versions']) || {
    drafts: {
      autosave: {
        interval: 1000 * (60 * 5), // 5 minutes
        showSaveDraftButton: true,
      },
    },
  },
})

export const canUseDOM = () =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )

export const getClientSideURL = () => {
  if (canUseDOM()) {
    const { hostname, port, protocol } = window.location
    return `${protocol}//${hostname}${port ? `:${port}` : ''}`
  }

  return process.env.SERVER_URL || ''
}
