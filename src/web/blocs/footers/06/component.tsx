import Image from 'next/image'
import Link from 'next/link'

import { CloudPhoto } from '@/payload-types'
import { LinkField } from '@/web/fields/link/component'

import { Props } from '../types'

export const Footer6Component = ({
  settings,
  ...props
}: Props<'web-footer-6'>) => (
  <section className="py-16">
    <div className="container mx-auto">
      <footer>
        <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
          <div className="max-w-96">
            <div className="mb-6 flex items-center gap-3">
              <div className="border-border bg-accent flex size-12 items-center justify-center rounded-lg border p-2">
                <Image
                  alt={(settings.general.icon as CloudPhoto)?.alt || 'Logo'}
                  className="size-12 h-full w-full object-contain object-center"
                  height={(settings.general.icon as CloudPhoto)?.height ?? 32}
                  src={
                    (settings.general.icon as CloudPhoto)?.url ?? '/kevin.png'
                  }
                  width={(settings.general.icon as CloudPhoto)?.width ?? 32}
                />
              </div>
              <h3 className="text-xl font-bold">{settings.general.name}</h3>
            </div>
            <p className="text-muted-foreground text-base font-medium">
              {settings.general.description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
            <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
              {(props.navLinks || []).map((group) => (
                <div className="h-fit w-min" key={group.id}>
                  <h4 className="mb-6 whitespace-nowrap text-base font-semibold">
                    {group.group}
                  </h4>
                  {group.links.length > 0 && (
                    <ul className="text-muted-foreground space-y-3 text-base font-medium">
                      {group.links.map((link) => (
                        <li
                          className="hover:text-accent-foreground whitespace-nowrap text-base"
                          key={link.id}
                        >
                          <LinkField {...link} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-border flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16">
          <div className="text-muted-foreground text-xs sm:text-sm">
            {`© ${settings.general.name || ''} ${new Date().getFullYear()}`}
          </div>
          <div className="text-muted-foreground flex flex-col items-start gap-4 text-xs sm:text-sm md:flex-row lg:items-center">
            <Link className="hover:text-accent-foreground" href="/">
              Terms &amp; Conditions
            </Link>
            <Link className="hover:text-accent-foreground" href="/">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  </section>
)
