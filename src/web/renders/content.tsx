import { createElement } from 'react'

import { WebLanding, WebPage, WebSetting } from '@/payload-types'

import { About3 } from '../blocs/content/about3/Component'
import { Awards1 } from '../blocs/content/award1/Component'
import { Banner1 } from '../blocs/content/banner1/Component'
import { Casestudies2 } from '../blocs/content/casestudies2/Component'
import { Community1 } from '../blocs/content/community1/Component'
import { Compliance1 } from '../blocs/content/compliance1/Component'
import { Cta10 } from '../blocs/content/cta10/Component'
import { Cta11 } from '../blocs/content/cta11/Component'
import { Faq1 } from '../blocs/content/faq1/Component'
import { Hero1 } from '../blocs/content/hero1/Component'
import { BlockTypes } from '../blocs/content/types'

const COMPONENTS_MAP: Record<BlockTypes, any> = {
  'block-about-03': About3,
  'block-award-01': Awards1,
  'block-banner-01': Banner1,
  'block-case-studies-02': Casestudies2,
  'block-community-01': Community1,
  'block-compliance-01': Compliance1,
  'block-cta-10': Cta10,
  'block-cta-11': Cta11,
  'block-faq-01': Faq1,
  'block-hero-01': Hero1,
} as const

type Args = { settings: WebSetting } & (
  | {
      content: WebLanding['content']
      isLandingPage: true
    }
  | {
      content: WebPage['content']
      isLandingPage: false
    }
)

export const Content = ({ content, settings }: Args) => {
  return content.map((section) => {
    try {
      const Component = COMPONENTS_MAP[section.blockType]
      if (!Component) return null

      return createElement(Component, { key: section.id, ...section, settings })
    } catch {
      return null
    }
  })
}
