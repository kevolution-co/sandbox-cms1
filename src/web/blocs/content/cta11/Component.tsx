import Image from 'next/image'

import type { CloudPhoto } from '@/payload-types'

import { Args } from '../types'

export const Cta11 = ({
  description,
  heading,
  image,
}: Args<'block-cta-11'>) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            {heading && (
              <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                {heading}
              </h3>
            )}
            {description && (
              <p className="text-muted-foreground max-w-xl lg:text-lg">
                {description}
              </p>
            )}
          </div>
          <div className="shrink-0">
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
                {image && (
                  <Image
                    alt={(image as CloudPhoto).alt}
                    className="object-cover"
                    height={(image as CloudPhoto).height}
                    src={(image as CloudPhoto).url}
                    width={(image as CloudPhoto).width}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
