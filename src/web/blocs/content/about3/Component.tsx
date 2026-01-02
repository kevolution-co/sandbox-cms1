import Image from 'next/image'
import Link from 'next/link'

import type { CloudPhoto, WebPage } from '@/payload-types'

import { Button } from '@/components/ui/button'
import { LinkField } from '@/web/fields/link/component'

import { Args } from '../types'

export const About3 = ({
  achievements,
  breakout,
  companies,
  description,
  images,
  title,
}: Args<'block-about-03'>) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          {title && <h1 className="text-5xl font-semibold">{title}</h1>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          {images.main && (
            <Image
              alt={(images.main as CloudPhoto).alt}
              className="size-full max-h-155 rounded-xl object-cover lg:col-span-2"
              height={(images.main as CloudPhoto).height}
              src={(images.main as CloudPhoto).url}
              width={(images.main as CloudPhoto).width}
            />
          )}
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {Object.keys(breakout || {}).length > 0 && (
              <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
                {breakout.image && (
                  <Image
                    alt={(breakout.image as CloudPhoto).alt}
                    className="mr-auto w-auto h-12"
                    height={(breakout.image as CloudPhoto).height}
                    src={(breakout.image as CloudPhoto).url}
                    width={(breakout.image as CloudPhoto).width}
                  />
                )}
                <div>
                  {breakout.title && (
                    <p className="mb-2 text-lg font-semibold">
                      {breakout.title}
                    </p>
                  )}
                  {breakout.description && (
                    <p className="text-muted-foreground">
                      {breakout.description}
                    </p>
                  )}
                </div>
                {breakout.button && (
                  <Button asChild={true} className="mr-auto" variant="outline">
                    <LinkField {...breakout.button} />
                  </Button>
                )}
              </div>
            )}
            {images.secondary && (
              <Image
                alt={(images.secondary as CloudPhoto).alt}
                className="grow basis-auto rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                height={(images.secondary as CloudPhoto).height}
                src={(images.secondary as CloudPhoto).url}
                width={(images.secondary as CloudPhoto).width}
              />
            )}
          </div>
        </div>
        {(companies.title ||
          ((companies.logo as CloudPhoto[]) || []).length > 0) && (
          <div className="pt-32">
            {companies.title && (
              <p className="text-center">{companies.title} </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {((companies.logo as CloudPhoto[]) || []).map((company, idx) => (
                <div
                  className="flex items-center gap-3"
                  key={company.url + (idx + 1)}
                >
                  <Image
                    alt={company.alt}
                    className="h-6 w-auto md:h-8 dark:invert"
                    height={company.height}
                    src={company.url}
                    width={company.width}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {(achievements.title ||
          achievements.description ||
          (achievements.items || []).length > 0) && (
          <div className="mt-32 bg-muted relative overflow-hidden rounded-xl p-7 md:p-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              {achievements.title && (
                <h2 className="text-3xl font-semibold md:text-4xl">
                  {achievements.title}
                </h2>
              )}
              {achievements.description && (
                <p className="text-muted-foreground max-w-xl">
                  {achievements.description}
                </p>
              )}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 text-center lg:grid-cols-4">
              {(achievements.items || []).map((item, idx) => (
                <div
                  className="flex flex-col gap-2"
                  key={item.label + (idx + 1)}
                >
                  <span className="text-4xl font-semibold md:text-5xl">
                    {item.value}
                  </span>
                  <p className="text-sm md:text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
