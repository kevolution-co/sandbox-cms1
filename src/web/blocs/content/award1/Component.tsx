import { format } from 'date-fns'

import { Args } from '../types'

export const Awards1 = ({ awards }: Args<'block-award-01'>) => {
  return (
    <section className="py-32">
      <div className="container mx-auto space-y-10 lg:space-y-20">
        <div className="w-full grid-cols-6 gap-10 lg:grid">
          <div />
          <h1 className="col-span-4 text-5xl font-semibold tracking-tighter lg:pl-10 lg:text-8xl">
            Milestones
          </h1>
        </div>
        <div className="grid-cols-6 gap-10 space-y-12 lg:grid lg:space-y-0">
          <p className="text-foreground/40 flex-center hidden h-12 items-center lg:flex">
            Achievements
          </p>
          <div className="col-span-5 lg:pl-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-foreground/40 h-12 border-b text-left text-sm">
                  <th className="font-normal">Name of the Award</th>
                  <th className="font-normal">Description</th>
                  <th className="text-right font-normal">Year</th>
                </tr>
              </thead>
              <tbody>
                {(awards || []).map((award) => (
                  <tr
                    className="text-foreground/40 h-20 border-b text-left text-sm"
                    key={award.id}
                  >
                    <td className="text-foreground text-lg font-medium tracking-tight lg:text-xl">
                      {award.name}
                    </td>
                    <td>{award.description}</td>
                    <td className="text-foreground text-right">
                      {format(new Date(award.year), 'yyyy')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
