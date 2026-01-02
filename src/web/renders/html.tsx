import { getPayload, SanitizedConfig } from 'payload'
import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@/components/theme-provider'

import { Footer } from './footer'
import { Header } from './header'

type Args = {
  readonly config: Promise<SanitizedConfig>
}

export const Html = async ({ children, config }: PropsWithChildren<Args>) => {
  const payload = await getPayload({ config })
  const { styles } = await payload.findGlobal({
    draft: false,
    select: {
      styles: {
        font: true,
      },
    },
    slug: 'web-settings',
  })

  const linkFonts = styles.font.key ? (
    <link
      fetchPriority="high"
      href={`https://cdn.jsdelivr.net/npm/@fontsource-variable/${styles.font.key}@latest/index.min.css`}
      rel="stylesheet"
    />
  ) : null

  return (
    <html lang="en">
      <head>
        {linkFonts}
        <link
          fetchPriority="high"
          href="/api/web/styles.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header payload={payload} />
          {children}
          <Footer payload={payload} />
        </ThemeProvider>
      </body>
    </html>
  )
}
