import Image from 'next/image'

import type { CloudPhoto } from '@/payload-types'

import { Badge } from '@/components/ui/badge'

import { Args } from '../types'

export const Compliance1 = ({
  badge,
  certifications,
  description,
  highlights,
  title,
}: Args<'block-compliance-01'>) => {
  return (
    <section className="bg-muted/50 py-32">
      <div className="container mx-auto">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {badge && (
              <Badge className="bg-background gap-1.5" variant="outline">
                <span className="size-1.5 rounded-full bg-green-500" />
                {badge}
              </Badge>
            )}
            {title && (
              <h1 className="text-balance text-4xl font-medium lg:text-5xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-muted-foreground text-lg">{description}</p>
            )}
            <div className="flex items-center gap-6">
              {((certifications as CloudPhoto[]) || []).map((certification) => (
                <Image
                  alt={certification.alt}
                  className="h-22 opacity-50 grayscale md:h-28 dark:invert w-auto"
                  height={certification.height}
                  key={certification.id}
                  src={certification.url}
                  width={certification.width}
                />
              ))}
            </div>
          </div>
          {(highlights || []).length > 0 && (
            <div className="border-border bg-background rounded-2xl border">
              {(highlights || []).map((highlight) => (
                <div
                  className="relative overflow-hidden even:border-y p-6 lg:px-8 lg:py-11"
                  key={highlight.id}
                >
                  <div>
                    {highlight.title && (
                      <h2 className="text-xl font-medium lg:text-2xl">
                        {highlight.title}
                      </h2>
                    )}
                    {highlight.description && (
                      <p className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base">
                        {highlight.description}
                      </p>
                    )}
                  </div>
                  {highlight.icon && (
                    <Image
                      alt={(highlight.icon as CloudPhoto)?.alt}
                      className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
                      height={(highlight.icon as CloudPhoto)?.height}
                      key={(highlight.icon as CloudPhoto)?.id}
                      src={(highlight.icon as CloudPhoto)?.url}
                      width={(highlight.icon as CloudPhoto)?.width}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
