import Link from 'next/link'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { WebPage } from '@/payload-types'

import { Args } from '../types'

export const NavSubItemExpanded = ({
  items,
  label,
}: Args<'subitem-expanded'>) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid gap-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
        {items.map((linkItem) =>
          linkItem.isHighlighted ? (
            <li className="row-span-3" key={linkItem.id}>
              <NavigationMenuLink asChild={true}>
                <Link
                  className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                  href={`/${(linkItem.page as WebPage)?.slug || ''}`}
                >
                  <div className="mb-2 text-lg font-medium sm:mt-4">
                    {(linkItem.page as WebPage)?.title}
                  </div>
                  {linkItem.showDescription ? (
                    <p className="text-muted-foreground text-sm leading-tight">
                      {(linkItem.page as WebPage)?.title}
                    </p>
                  ) : null}
                </Link>
              </NavigationMenuLink>
            </li>
          ) : linkItem.showDescription ? (
            <li key={linkItem.id}>
              <NavigationMenuLink asChild={true}>
                <Link href={`/${(linkItem.page as WebPage)?.slug || ''}`}>
                  <div className="text-sm leading-none font-medium">
                    {(linkItem.page as WebPage)?.title}
                  </div>
                  {linkItem.showDescription ? (
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      {(linkItem.page as WebPage)?.description}
                    </p>
                  ) : null}
                </Link>
              </NavigationMenuLink>
            </li>
          ) : (
            <li key={linkItem.id}>
              <NavigationMenuLink asChild={true}>
                <Link href={`/${(linkItem.page as WebPage)?.slug || ''}`}>
                  {(linkItem.page as WebPage)?.title}
                </Link>
              </NavigationMenuLink>
            </li>
          ),
        )}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)
