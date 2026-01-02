import { converter, formatHex } from 'culori'
import { Endpoint, PayloadHandler } from 'payload'

const calcContrastColor = (hex: string) => {
  const toRgb = converter('rgb')
  const color = toRgb(`#${hex}`)

  if (!color) return '#888888'

  const calculateLuminance = (r: number, g: number, b: number) => {
    const sRGB = [r, g, b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2]
  }

  const luminance = calculateLuminance(
    color.r * 255,
    color.g * 255,
    color.b * 255,
  )

  const whiteLuminance = 1.0 // Luminance of #ffffff is always 1.0
  const blackLuminance = 0.0 // Luminance of #000000 is always 0.0

  const contrastWithWhite = (whiteLuminance + 0.05) / (luminance + 0.05)
  const contrastWithBlack = (luminance + 0.05) / (blackLuminance + 0.05)

  return contrastWithWhite >= contrastWithBlack ? '#ffffff' : '#000000'
}

const handler: PayloadHandler = async (req) => {
  const { searchParams } = new URL(req.url)
  const hexColor = `${searchParams.get('hex') || '000000'}`

  const response = await fetch(
    `https://www.tints.dev/api/optimistic/${hexColor}`,
    {
      // headers: {
      //   'User-Agent': 'Mozilla/5.0',
      // },
    },
  )

  const { optimistic } =
    await response.json<Record<'optimistic', Record<string, string>>>()

  if (!optimistic) {
    return new Response('No optimistic colors found', { status: 400 })
  }

  const palette = Object.fromEntries(
    Object.entries(optimistic).map(([key, value]) => [key, formatHex(value)]),
  )

  const contrast = calcContrastColor(hexColor)

  return new Response(JSON.stringify({ contrast, palette }))
}

export const colorPalette: Endpoint = {
  handler,
  method: 'get',
  path: '/web/color-palette',
}
