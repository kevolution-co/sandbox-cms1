import Image from 'next/image'
import { Fragment } from 'react'

import type { CloudPhoto } from '@/payload-types'

import { Separator } from '@/components/ui/separator'

import { Args } from '../types'

export const Casestudies2 = ({
  items,
  subtitle,
  title,
}: Args<'block-case-studies-02'>) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 text-center">
          {subtitle && <p className="font-medium">{subtitle}</p>}
          {title && (
            <h2 className="text-4xl font-medium md:text-5xl">{title}</h2>
          )}
        </div>
        <div className="mt-20">
          {(items || []).map((item, idx) => (
            <Fragment key={item.id}>
              <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
                <div className="border-border flex flex-col gap-10 sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
                  {item.thumbnail && (
                    <Image
                      alt={(item.thumbnail as CloudPhoto).alt}
                      className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
                      height={(item.thumbnail as CloudPhoto).height}
                      src={(item.thumbnail as CloudPhoto).url}
                      width={(item.thumbnail as CloudPhoto).width}
                    />
                  )}
                  <div className="flex h-full flex-col justify-between gap-10">
                    {item.quote && <q className="sm:text-xl">{item.quote}</q>}
                    <div className="flex items-end gap-6">
                      <div className="flex flex-col gap-1">
                        {item.author && (
                          <p className="text-primary text-lg font-semibold">
                            {item.author}
                          </p>
                        )}
                        {item.role && (
                          <p className="text-muted-foreground">{item.role}</p>
                        )}
                      </div>
                      {item.logo && (
                        <Image
                          alt={(item.logo as CloudPhoto).alt}
                          className="h-8 w-auto object-contain"
                          height={(item.logo as CloudPhoto).height}
                          src={(item.logo as CloudPhoto).url}
                          width={(item.logo as CloudPhoto).width}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 self-center lg:flex-col">
                  {(item.stats?.items || []).map((stat) => (
                    <div className="flex flex-col gap-2" key={stat.id}>
                      {stat.value && (
                        <p className="text-primary text-4xl font-medium sm:text-5xl">
                          {stat.value}
                        </p>
                      )}
                      {stat.title && (
                        <p className="text-primary font-semibold">
                          {stat.title}
                        </p>
                      )}
                      {stat.subtitle && (
                        <p className="text-muted-foreground">{stat.subtitle}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {idx > 0 ? <Separator className="my-20" /> : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
