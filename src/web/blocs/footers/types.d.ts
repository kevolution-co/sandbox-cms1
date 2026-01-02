import { WebFooter, WebSetting } from '@/payload-types'

export type BlockTypes = WebFooter['block'][number]['blockType']

export type Props<B extends BlockTypes> = Extract<
  WebFooter['block'][number],
  { blockType: B }
> & { settings: WebSetting }
