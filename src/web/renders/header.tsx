import Image from 'next/image'
import Link from 'next/link'
import { Payload } from 'payload'

import { ModeToggle } from '@/components/mode-toggler'
import { CloudPhoto } from '@/payload-types'

import { Navigation } from './navigation'

type Args = {
  payload: Payload
}

export const Header = async ({ payload }: Args) => {
  const { general } = await payload.findGlobal({
    select: { general: true },
    slug: 'web-settings',
  })
  const { navItems, position } = await payload.findGlobal({
    select: { navItems: true, position: true },
    slug: 'web-navigation',
  })
  return (
    <header className="container mx-auto flex items-center justify-between py-4 px-2 mt-4 gap-4 sticky top-4 backdrop-blur-sm bg-background/50 rounded-lg shadow-xs z-50">
      <Link href="/">
        <Image
          alt="Logo"
          className="aspect-square max-w-8 w-full"
          height={(general.logo as CloudPhoto)?.height ?? 32}
          src={(general.logo as CloudPhoto)?.url ?? '/kevin.png'}
          width={(general.logo as CloudPhoto)?.width ?? 32}
        />
      </Link>
      {position === 'right' && <div className="grow" />}
      <Navigation navItems={navItems} />
      {position === 'left' && <div className="grow" />}
      <ModeToggle />
    </header>
  )
}
