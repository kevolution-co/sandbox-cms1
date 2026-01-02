import Link from 'next/link'
import { ComponentProps } from 'react'

import { WebFooter, WebPage } from '@/payload-types'

type Args = ComponentProps<'a'> & {
  id?: null | string
  isExternal?: boolean | null
  linkLabel?: null | string
  linkUrl?: null | string
  page?: (null | number) | WebPage
}

export const LinkField = ({
  id,
  isExternal,
  linkLabel,
  linkUrl,
  page,
  ...props
}: Args) => {
  if (!linkUrl || !page) return null

  if (isExternal) {
    return (
      <a href={linkUrl} target="_blank" {...props}>
        {linkLabel}
      </a>
    )
  }
  return (
    <Link href={`/${(page as any)?.slug || ''}`} {...props}>
      {(page as WebPage).title || ''}
    </Link>
  )
}
