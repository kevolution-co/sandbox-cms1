import Image from 'next/image'
import { Payload } from 'payload'

import { CloudPhoto } from '@/payload-types'

type Props = {
  payload: Payload
}

export const Logo = async ({ payload }: Props) => {
  const settingsGlobal = await payload.findGlobal({ slug: 'web-settings' })

  const logo: CloudPhoto | null = settingsGlobal.general.logo
    ? (settingsGlobal.general.logo as CloudPhoto)
    : null

  return logo ? (
    <Image
      alt={logo.alt}
      className="max-w-xs"
      height={logo.height}
      src={logo.url}
      width={logo.width}
    />
  ) : (
    <Image
      alt="Kevolution Logo"
      className="max-w-xs"
      height={290}
      src="/kevin-logo.png"
      width={910}
    />
  )
}
