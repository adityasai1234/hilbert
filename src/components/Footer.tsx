const links = [
  { href: '/docs', label: 'Docs' },
  { href: 'https://github.com/adityasai1234/hilbert', label: 'GitHub' },
  { href: '/docs/getting-started/installation', label: 'Installation' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="font-vt323 text-2xl text-primary">hilbert</span>
            <p className="text-sm text-muted-foreground">
              Open source AI research agent.
            </p>
          </div>
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Hilbert. MIT License.
        </div>
      </div>
    </footer>
  )
}
