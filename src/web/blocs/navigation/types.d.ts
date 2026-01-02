import { WebNavigation } from '@/payload-types'

export type Args<B extends BlockTypes> = Extract<
  WebNavigation['navItems'][number]['subItems'][number],
  { blockType: B }
> &
  Pick<WebNavigation['navItems'][number], 'label'>

export type BlockTypes =
  WebNavigation['navItems'][number]['subItems'][number]['blockType']
