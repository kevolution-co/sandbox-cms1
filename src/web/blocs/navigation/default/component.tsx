import Link from 'next/link'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { WebPage } from '@/payload-types'

import { Args } from '../types'

export const NavSubItemDefault = ({
  items,
  label,
}: Args<'subitem-default'>) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-3xs gap-4">
        <li>
          {items.map((linkItem) =>
            linkItem.showDescription ? (
              <NavigationMenuLink asChild={true} key={linkItem.id}>
                <Link href={`/${(linkItem.page as WebPage)?.slug || ''}`}>
                  <div className="font-medium">
                    {(linkItem.page as WebPage)?.title}
                  </div>
                  <div className="text-muted-foreground">
                    {(linkItem.page as WebPage)?.title}
                  </div>
                </Link>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink asChild={true} key={linkItem.id}>
                <Link href={`/${(linkItem.page as WebPage)?.slug || ''}`}>
                  {(linkItem.page as WebPage)?.title}
                </Link>
              </NavigationMenuLink>
            ),
          )}
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)
