import { readFileSync } from 'fs'
import { join } from 'path'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Differentiator from '@/components/Differentiator'
import InteractiveDemo from '@/components/InteractiveDemo'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  const ascii = readFileSync(join(process.cwd(), 'ascii.txt'), 'utf-8')

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero ascii={ascii} />
        <Differentiator />
        <InteractiveDemo />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
