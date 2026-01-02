import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Args } from '../types'

export const Faq1 = ({ heading, items }: Args<'block-faq-01'>) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-3xl">
        {heading && (
          <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
            {heading}
          </h1>
        )}
        <Accordion collapsible={true} type="single">
          {(items || []).map((item) => (
            <AccordionItem key={`${item.id}`} value={`item-${item.id}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
