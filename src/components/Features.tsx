const workflows = [
  { cmd: '/deepresearch', desc: 'Full synthesis pipeline' },
  { cmd: '/lit', desc: 'Literature map' },
  { cmd: '/review', desc: 'Peer-review critique' },
  { cmd: '/audit', desc: 'Methodology audit' },
  { cmd: '/replicate', desc: 'Replication checklist' },
  { cmd: '/draft', desc: 'Section drafting' },
  { cmd: '/compare', desc: 'Side-by-side paper comparison' },
  { cmd: '/autoresearch', desc: 'Autonomous multi-step research' },
  { cmd: '/watch', desc: 'Monitor new papers on a topic' },
]

const agents = [
  { name: 'Researcher', desc: 'Finds and retrieves sources' },
  { name: 'Reviewer', desc: 'Critiques methodology and claims' },
  { name: 'Writer', desc: 'Drafts summaries and sections' },
  { name: 'Verifier', desc: 'Fact-checks citations and links' },
]

const tools = [
  { name: 'AlphaXiv', desc: 'arXiv search + preprint access' },
  { name: 'Web search', desc: 'Live web results via Brave / SerpAPI' },
  { name: 'Session search', desc: 'Search within current research session' },
  { name: 'PDF preview', desc: 'In-terminal paper viewer' },
]

const artifacts = [
  { name: 'report.md', desc: 'Structured markdown report' },
  { name: 'refs.bib', desc: 'Auto-generated BibTeX' },
  { name: 'summary.md', desc: 'Plain-language summary' },
  { name: 'diff.md', desc: 'Paper-to-paper diff' },
  { name: 'review.md', desc: 'Scored peer-review rubric' },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div id="workflows" className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Workflows</h2>
              <div className="flex flex-col gap-1 font-mono text-sm">
                {workflows.map((w) => (
                  <div key={w.cmd} className="flex flex-col gap-0.5">
                    <span className="text-primary">{w.cmd}</span>
                    <span className="text-xs text-muted-foreground">{w.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="agents" className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Agents</h2>
              <div className="flex flex-col gap-1 font-mono text-sm">
                {agents.map((a) => (
                  <div key={a.name} className="flex flex-col gap-0.5">
                    <span className="text-primary">{a.name}</span>
                    <span className="text-xs text-muted-foreground">{a.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Skills &amp; Tools</h2>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((t) => (
                  <div key={t.name} className="rounded-md border border-border bg-card p-3">
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Output Artifacts</h2>
              <div className="flex flex-col gap-1 font-mono text-sm">
                {artifacts.map((a) => (
                  <div key={a.name} className="flex flex-col gap-0.5">
                    <span className="text-primary">{a.name}</span>
                    <span className="text-xs text-muted-foreground">{a.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
