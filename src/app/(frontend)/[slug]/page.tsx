import config from '@payload-config'

import { Page } from '@/web/renders/page'

type Args = {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
    livePreview: string
  }>
}

const RenderedPage = ({ params, searchParams }: Args) =>
  Page({ config, params, searchParams })

export default RenderedPage
