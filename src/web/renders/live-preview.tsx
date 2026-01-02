'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { getClientSideURL } from '../utils/globals'

export const LivePreviewListener = () => {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={router.refresh}
      serverURL={getClientSideURL()}
    />
  )
}
