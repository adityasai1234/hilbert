const examples = [
  {
    command: '/deepresearch "transformer attention mechanisms"',
    output: 'Synthesizes 40+ papers → structured report with BibTeX',
  },
  {
    command: '/lit "federated learning privacy"',
    output: 'Literature map with gap analysis and open questions',
  },
  {
    command: '/review path/to/paper.pdf',
    output: 'Peer-review style critique with scored rubric',
  },
  {
    command: '/continue',
    output: 'Resumes last research session from checkpoint',
  },
]

export default function InteractiveDemo() {
  return (
    <section id="what-you-type" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What you type → what happens</h2>
            <p className="text-muted-foreground">Plain commands, serious output.</p>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-2">
            {examples.map((ex, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4 text-left">
                <code className="text-sm font-medium text-primary">{ex.command}</code>
                <p className="text-sm text-muted-foreground">{ex.output}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
