import config from '@payload-config'
import { PropsWithChildren } from 'react'

import { Html } from '@/web/renders/html'
import '@/styles/frontend.css'

// TODO: Include metadata

const Layout = ({ children }: PropsWithChildren) => Html({ children, config })

export default Layout
