import { headers as getHeaders } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload, PaginatedDocs, SanitizedConfig } from 'payload'

import { WebLanding, WebPage } from '@/payload-types'

import { Icon } from '../components/graphics/icon'
import { AdminBar } from './admin-bar'
import { Content } from './content'
import { Welcome } from './welcome'

type Args = {
  readonly config: Promise<SanitizedConfig>
  readonly params: Promise<{
    slug: string
  }>
  readonly searchParams: Promise<{
    [key: string]: string | string[]
    livePreview: string
  }>
}

export const Page = async ({
  config: configPromise,
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: Args) => {
  const headers = await getHeaders()
  const config = await configPromise
  const params = await paramsPromise
  const searchParams = await searchParamsPromise

  const { slug } = params
  const payload = await getPayload({ config })

  const settings = await payload.findGlobal({ slug: 'web-settings' })

  const { user } = await payload.auth({ headers })

  const isLandingPage = !slug

  const isPreview = searchParams.livePreview === 'true'

  const page = isLandingPage
    ? await payload.findGlobal({
        draft: isPreview,
        overrideAccess: Boolean(user),
        slug: 'web-landing',
      })
    : await payload.find({
        collection: 'web-pages',
        draft: isPreview,
        overrideAccess: Boolean(user),
        where: { slug: { equals: slug || '' } },
      })

  if (
    !page ||
    ('totalDocs' in page && page.totalDocs === 0) ||
    ('content' in page && page.content.length === 0)
  ) {
    return notFound()
  }

  if (
    isLandingPage &&
    (!('content' in page) || (page as WebLanding).content?.length === 0) &&
    !isPreview
  ) {
    return <Welcome user={user} />
  }

  const content =
    (isLandingPage
      ? (page as WebLanding).content
      : (page as PaginatedDocs<WebPage>).docs[0].content) || []

  return (
    <>
      {user && (
        <AdminBar isPreview={isPreview} logo={<Icon payload={payload} />} />
      )}
      <Content
        content={content}
        isLandingPage={isLandingPage}
        settings={settings}
      />
    </>
  )
}
