'use client'

import Link from 'next/link'
import { ComponentType, createElement } from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useIsMobile } from '@/hooks/use-mobile'
import { WebNavigation, WebPage } from '@/payload-types'

import { NavSubItemDefault } from '../blocs/navigation/default/component'
import { NavSubItemExpanded } from '../blocs/navigation/expanded/component'
import { BlockTypes } from '../blocs/navigation/types'

const COMPONENTS_MAP: Record<BlockTypes, ComponentType<any>> = {
  'subitem-default': NavSubItemDefault,
  'subitem-expanded': NavSubItemExpanded,
}

type Args = Pick<WebNavigation, 'navItems'>

export const Navigation = ({ navItems }: Args) => {
  const isMobile = useIsMobile()

  if (!navItems || navItems.length === 0) return null

  const items = navItems.filter(
    (item) => (item.page as WebPage)._status === 'published',
  )

  return (
    <div className="w-fit sticky top-4">
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          {items.map(({ id, label, page, subItems: [subItem] }) => {
            if (subItem) {
              return createElement(COMPONENTS_MAP[subItem.blockType], {
                ...subItem,
                label,
              })
            }

            return (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink
                  asChild={true}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={`/${(page as WebPage)?.slug || ''}`}>
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
