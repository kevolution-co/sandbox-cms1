import { Payload } from 'payload'
import { ComponentType, createElement } from 'react'

import { Footer6Component } from '../blocs/footers/06/component'
import { BlockTypes } from '../blocs/footers/types'

export const COMPONENTS_MAP: Record<BlockTypes, ComponentType<any>> = {
  'web-footer-6': Footer6Component,
}

type Args = {
  payload: Payload
}

export const Footer = async ({ payload }: Args) => {
  const settings = await payload.findGlobal({ slug: 'web-settings' })

  if (!settings) return null

  const {
    block: [block],
  } = await payload.findGlobal({
    select: {
      block: true,
    },
    slug: 'web-footer',
  })

  if (!block) return null

  const Component = COMPONENTS_MAP[block.blockType]

  if (!Component) return null

  return createElement(Component, { ...block, settings })
}
