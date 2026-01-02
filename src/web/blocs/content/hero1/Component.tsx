import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { CloudPhoto, WebPage } from '@/payload-types'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { LinkField } from '@/web/fields/link/component'

import { Args } from '../types'

export const Hero1 = ({
  badge,
  buttons,
  description,
  heading,
  image,
}: Args<'block-hero-01'>) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            {heading && (
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                {heading}
              </h1>
            )}
            {description && (
              <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                {description}
              </p>
            )}
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {(buttons || []).map((btn, idx) => (
                <Button
                  asChild={true}
                  className="w-full sm:w-auto"
                  key={btn.id}
                  variant={idx === 0 ? 'default' : 'outline'}
                >
                  <LinkField {...btn} />
                </Button>
              ))}
            </div>
          </div>
          {image && (
            <Image
              alt={(image as CloudPhoto)?.alt}
              className="max-h-96 w-full rounded-md object-cover"
              height={(image as CloudPhoto)?.height}
              src={(image as CloudPhoto)?.url}
              width={(image as CloudPhoto)?.width}
            />
          )}
        </div>
      </div>
    </section>
  )
}
