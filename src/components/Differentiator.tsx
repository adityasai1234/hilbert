const rows = [
  { problem: 'Infinite loops', feynman: 'No termination guarantee', hilbert: 'Fixed N rounds + mandatory synthesis gate' },
  { problem: 'Resume', feynman: 'No', hilbert: 'Checkpoint & resume mid-run' },
  { problem: 'Open APIs', feynman: 'Closed', hilbert: 'Swappable LLM, search, storage' },
  { problem: 'BibTeX', feynman: 'No', hilbert: 'Auto-generated from every cited source' },
  { problem: 'Live UI', feynman: 'No', hilbert: 'Streaming progress in terminal' },
]

export default function Differentiator() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Fixed rounds. Zero infinite loops.
            </h2>
            <p className="text-muted-foreground">
              Same research power. Proper engineering under the hood.
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feynman</th>
                  <th className="px-4 py-3 text-left font-medium text-primary">Hilbert</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-muted-foreground">{row.problem}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.feynman}</td>
                    <td className="px-4 py-3 font-medium text-primary">{row.hilbert}</td>
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
