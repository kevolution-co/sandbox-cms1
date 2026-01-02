import type { WebPage, WebSetting } from '@/payload-types'

export type Args<T extends BlockTypes> = Extract<
  WebPage['content'][number],
  { blockType: T }
> & {
  settings: WebSetting
}

export type BlockTypes = WebPage['content'][number]['blockType']
