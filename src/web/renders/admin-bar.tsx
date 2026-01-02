'use client'

import { PayloadAdminBar } from '@payloadcms/admin-bar'
import { ReactElement } from 'react'

import { getClientSideURL } from '../utils/globals'
import { LivePreviewListener } from './live-preview'

type Args = {
  isPreview: boolean
  logo: ReactElement
}

export const AdminBar = ({ isPreview, logo }: Args) => {
  const handleExitPreview = () => {
    const url = new URL(window.location.href)
    const q = new URLSearchParams(url.search)
    q.delete('livePreview')
    url.search = q.toString()
    window.location.href = url.toString()
  }

  return (
    <>
      <PayloadAdminBar
        cmsURL={getClientSideURL()}
        collectionSlug="web-pages"
        logo={logo}
        logoProps={{ className: '[&>img]:h-full' }}
        onPreviewExit={handleExitPreview}
        preview={isPreview}
      />
      {isPreview && <LivePreviewListener />}
    </>
  )
}
