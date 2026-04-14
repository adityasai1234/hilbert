'use client'

import { useState } from 'react'

const installCommand = 'curl -fsSL https://hilbert.ai/install | bash'

export default function Hero({ ascii }: { ascii: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex flex-col items-center gap-8 pb-16 pt-20 text-center">
        <pre className="overflow-x-auto font-mono text-xs leading-tight text-primary">{ascii}</pre>

        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The open source AI
            <br />
            research agent
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Reads papers, searches the web, writes drafts, runs experiments, and cites every claim.
            All locally on your computer.
          </p>
        </div>

        <div className="flex w-full max-w-3xl flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/adityasai1234/hilbert"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
            <a
              href="/docs/getting-started/installation"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Get Started →
            </a>
          </div>

          <div className="flex w-full flex-col">
            <div className="flex self-start">
              <span className="cursor-default rounded-tl-lg rounded-tr-lg bg-muted px-4 py-2 text-sm font-medium text-foreground">
                pip
              </span>
            </div>
            <div className="flex items-center rounded-b-lg rounded-tr-lg border border-border bg-muted p-3 font-mono">
              <span className="flex-1 text-sm">{installCommand}</span>
              <button
                type="button"
                onClick={copy}
                aria-label="Copy install command"
                className="ml-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {copied ? (
                  <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
