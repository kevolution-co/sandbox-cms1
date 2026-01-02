import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CloudPhoto } from '@/payload-types'
import { formatUrlPrefix, SocialIcon } from '@/web/components/social-icon'

import { Args } from '../types'

export const Community1 = ({
  settings,
  social,
  subtitle,
  title,
}: Args<'block-community-01'>) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12">
          {settings.general.icon ? (
            <Image
              alt={(settings.general.icon as CloudPhoto)?.alt}
              className="size-10"
              height={(settings.general.icon as CloudPhoto)?.height}
              src={(settings.general.icon as CloudPhoto)?.url}
              width={(settings.general.icon as CloudPhoto)?.width}
            />
          ) : (
            <img alt="Kevolution Logo" className="size-10" src="/kevin.png" />
          )}
          <h2 className="text-center text-3xl font-semibold">
            {title}
            {subtitle && (
              <>
                <br />
                <span className="text-muted-foreground/80">{subtitle}</span>
              </>
            )}
          </h2>
          <div className="flex items-center gap-8">
            {(social || []).map(({ id, network }) => (
              <Button
                asChild
                className={cn(
                  'aspect-square p-1.5 rounded-full h-auto transition-all',
                  ['github', 'twitter'].includes(network) && 'dark:invert',
                )}
                key={id}
                variant="ghost"
              >
                <Link
                  href={`https://${formatUrlPrefix({ network })}${settings.social.networks[network] || ''}`}
                  target="_blank"
                >
                  <SocialIcon network={network} />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
