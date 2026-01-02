import { converter } from 'culori'
import { Endpoint, PayloadHandler } from 'payload'

import { WebSetting } from '@/payload-types'

const formatOklch = (value: string) => {
  const color = converter('oklch')(value)
  return `oklch(${color.l} ${color.c} ${color.h})`
}

const lightTheme = ({
  brand,
  font,
  radius,
  secondary,
}: WebSetting['styles']) => {
  const radiix =
    !Number.isNaN(radius) && radius >= 0
      ? radius > 0
        ? `${radius}rem`
        : '0'
      : '0.625rem'

  const primary = formatOklch(brand.bg) || 'oklch(0.205 0 0)'
  const primaryFg = brand.fg || 'oklch(0.985 0 0)'
  const secondaryBg = formatOklch(secondary.bg) || 'oklch(0.97 0 0)'
  const secondaryFg = secondary.fg || 'oklch(0.205 0 0)'

  const p50 = 'var(--color-zinc-50)'
  const p100 = 'var(--color-zinc-100)'
  const p200 = 'var(--color-zinc-200)'
  const p400 = 'var(--color-zinc-400)'
  const p700 = 'var(--color-zinc-700)'
  const p900 = 'var(--color-zinc-900)'
  const p950 = 'var(--color-zinc-950)'

  const s300 = 'var(--color-blue-300)'
  const s500 = 'var(--color-blue-500)'
  const s600 = 'var(--color-blue-600)'
  const s700 = 'var(--color-blue-700)'
  const s800 = 'var(--color-blue-800)'

  return `:root {
    --font-family: "${font.family} Variable", ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --radius: ${radiix};
    --background: ${p50};
    --foreground: ${p950};
    --card: ${p50};
    --card-foreground: ${p950};
    --popover: ${p50};
    --popover-foreground: ${p950};
    --primary: ${primary};
    --primary-foreground: ${primaryFg};
    --secondary: ${secondaryBg};
    --secondary-foreground: ${secondaryFg};
    --muted: ${p100};
    --muted-foreground: ${p700};
    --accent: ${p100};
    --accent-foreground: ${p900};
    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(0.97 0.01 17);
    --border: ${p200};
    --input: ${p200};
    --ring: ${p400};
    --chart-1: ${s300};
    --chart-2: ${s500};
    --chart-3: ${s600};
    --chart-4: ${s700};
    --chart-5: ${s800};
    --sidebar: ${p50};
    --sidebar-foreground: ${p950};
    --sidebar-primary: ${primary};
    --sidebar-primary-foreground: ${primaryFg};
    --sidebar-accent: ${p100};
    --sidebar-accent-foreground: ${p900};
    --sidebar-border: ${p200};
    --sidebar-ring: ${p400};
    --surface: oklch(0.98 0 0);
    --surface-foreground: var(--foreground);
    --code: var(--surface);
    --code-foreground: var(--surface-foreground);
    --code-highlight: oklch(0.96 0 0);
    --code-number: oklch(0.56 0 0);
    --selection: ${p950};
    --selection-foreground: ${p50};
  }
  `
}

const darkTheme = ({ brand, secondary }: WebSetting['styles']) => {
  const primary = formatOklch(brand.bg) || 'oklch(0.205 0 0)'
  const primaryFg = brand.fg || 'oklch(0.985 0 0)'
  const secondaryBg = formatOklch(secondary.bg) || 'oklch(0.97 0 0)'
  const secondaryFg = secondary.fg || 'oklch(0.205 0 0)'

  const p50 = 'var(--color-zinc-50)'
  const p200 = 'var(--color-zinc-200)'
  const p400 = 'var(--color-zinc-400)'
  const p500 = 'var(--color-zinc-500)'
  const p600 = 'var(--color-zinc-600)'
  const p700 = 'var(--color-zinc-700)'
  const p800 = 'var(--color-zinc-800)'
  const p900 = 'var(--color-zinc-900)'
  const p950 = 'var(--color-zinc-950)'

  return `html[data-theme='dark'],.dark {
    --background: ${p950};
    --foreground: ${p50};
    --card: ${p900};
    --card-foreground: ${p50};
    --popover: ${p800};
    --popover-foreground: ${p50};
    --primary: ${primary};
    --primary-foreground: ${primaryFg};
    --secondary: ${secondaryBg};
    --secondary-foreground: ${secondaryFg};
    --muted: ${p800};
    --muted-foreground: ${p400};
    --accent: ${p700};
    --accent-foreground: ${p50};
    --destructive: oklch(0.704 0.191 22.216);
    --destructive-foreground: oklch(0.58 0.22 27);
    --border: oklch(1 0 0 / 10%);
    --input: oklch(1 0 0 / 15%);
    --ring: ${p500};
    --sidebar: ${p900};
    --sidebar-foreground: ${p50};
    --sidebar-primary: ${primary};
    --sidebar-primary-foreground: ${primaryFg};
    --sidebar-accent: ${p800};
    --sidebar-accent-foreground: ${p50};
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: ${p600};
    --surface: oklch(0.2 0 0);
    --surface-foreground: ${p400};
    --code: var(--surface);
    --code-foreground: var(--surface-foreground);
    --code-highlight: oklch(0.27 0 0);
    --code-number: oklch(0.72 0 0);
    --selection: ${p200};
    --selection-foreground: ${p900};
  }
  `
}

const handler: PayloadHandler = async ({ payload }) => {
  const { styles } = await payload.findGlobal({
    draft: false,
    select: {
      styles: true,
    },
    slug: 'web-settings',
  })

  const headers = {
    'Content-Security-Policy':
      "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';",
    'Content-Type': 'text/css',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    Vary: 'Accept-Encoding',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  }

  const hasNotStyles =
    Object.keys(styles.font).length === 0 ||
    !('bg' in styles.brand) ||
    !('bg' in styles.secondary)

  if (hasNotStyles) {
    return new Response('', { headers })
  }

  return new Response([lightTheme(styles), darkTheme(styles)].join('\n'), {
    headers,
  })
}

export const styles: Endpoint = {
  handler,
  method: 'get',
  path: '/web/styles.css',
}
