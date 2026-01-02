'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { LinkField } from '@/web/fields/link/component'

import { Args } from '../types'

export const Banner1 = ({
  defaultVisible,
  description,
  link,
  title,
}: Args<'block-banner-01'>) => {
  const [isVisible, setIsVisible] = useState(defaultVisible)

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <section className="bg-background w-full border-b px-4 py-3 sticky top-21 z-40">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-center">
          <span className="text-sm">
            {title && (
              <>
                <span className="font-medium">{title}</span>
                &nbsp;
              </>
            )}
            <span className="text-muted-foreground">
              {`${description ? `${description} ` : ''}`}
              <Button asChild variant="link">
                <LinkField {...link} />
              </Button>
              .
            </span>
          </span>
        </div>
        <Button
          className="-mr-2 h-8 w-8 flex-none"
          onClick={handleClose}
          size="icon"
          variant="ghost"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
