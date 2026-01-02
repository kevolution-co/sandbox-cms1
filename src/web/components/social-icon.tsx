import { Icon } from '@iconify/react'

import { WebSetting } from '@/payload-types'

type Args = {
  network: keyof WebSetting['social']['networks']
}

export const SocialIcon = ({ network }: Args) => {
  if (network === 'twitter') {
    return <Icon className="size-10" icon="logos:x" />
  }
  if (network === 'facebook') {
    return <Icon className="size-10" icon="logos:facebook" />
  }
  if (network === 'instagram') {
    return <Icon className="size-10" icon="skill-icons:instagram" />
  }
  if (network === 'linkedin') {
    return <Icon className="size-10" icon="logos:linkedin-icon" />
  }
  if (network === 'tiktok') {
    return <Icon className="size-10" icon="logos:tiktok-icon" />
  }
  if (network === 'whatsapp') {
    return <Icon className="size-10" icon="logos:whatsapp-icon" />
  }
  if (network === 'youtube') {
    return <Icon className="size-10" icon="logos:youtube-icon" />
  }
  if (network === 'discord') {
    return <Icon className="size-10" icon="logos:discord-icon" />
  }
  if (network === 'github') {
    return <Icon className="size-10" icon="logos:github-icon" />
  }
  return null
}

export const formatUrlPrefix = ({ network }: Args) => {
  switch (network) {
    case 'discord': {
      return `discord.gg/`
    }
    case 'facebook': {
      return `facebook.com/`
    }
    case 'github': {
      return `github.com/`
    }
    case 'instagram': {
      return `instagram.com/`
    }
    case 'linkedin': {
      return `linkedin.com/in/`
    }
    case 'tiktok': {
      return `tiktok.com/@`
    }
    case 'twitter': {
      return `x.com/`
    }
    case 'whatsapp': {
      return `wa.me/`
    }
    case 'youtube': {
      return `youtube.com/`
    }
  }
}
