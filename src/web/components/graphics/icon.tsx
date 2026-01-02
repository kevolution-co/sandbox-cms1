import Image from 'next/image'
import { Payload } from 'payload'

import { CloudPhoto } from '@/payload-types'

type Props = {
  payload: Payload
}

export const Icon = async ({ payload }: Props) => {
  const settingsGlobal = await payload.findGlobal({ slug: 'web-settings' })

  const icon: CloudPhoto | null = settingsGlobal.general.icon
    ? (settingsGlobal.general.icon as CloudPhoto)
    : null

  return icon ? (
    <Image
      alt={icon.alt}
      className="w-auto"
      height={icon.height}
      src={icon.url}
      width={icon.width}
    />
  ) : (
    <Image
      alt="Kevolution Logo"
      className="aspect-square max-w-14 w-full"
      height={512}
      src="/kevin.png"
      width={512}
    />
  )
}
