import { Button } from '@/components/ui/button'
import { LinkField } from '@/web/fields/link/component'

import { Args } from '../types'

export const Cta10 = ({
  buttons = {},
  description,
  heading,
}: Args<'block-cta-10'>) => {
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
          <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button asChild={true} size="lg" variant="secondary">
                <LinkField {...buttons.secondary} />
              </Button>
            )}
            {buttons.primary && (
              <Button asChild={true} size="lg" variant="default">
                <LinkField {...buttons.primary} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
