import { useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Ambient background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[90px]" />
        <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-blue-400/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white"><Flame className="h-4 w-4"/></span>
            Lucky Engineering
          </a>
          <nav className="hidden items-center gap-8 text-sm sm:flex">
            <a href="#services" className="text-blue-200/80 hover:text-white transition">Capabilities</a>
            <a href="#about" className="text-blue-200/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-blue-200/80 hover:text-white transition">Contact</a>
            <a href="#contact" className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-lg shadow-blue-900/30 hover:brightness-110 transition">Get Quote</a>
          </nav>
          <button className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-400/20 text-blue-100" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
        {open && (
          <div className="sm:hidden border-t border-blue-400/10 bg-slate-900/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4 text-sm">
              <a onClick={()=>setOpen(false)} href="#services" className="py-2 text-blue-200/90">Capabilities</a>
              <a onClick={()=>setOpen(false)} href="#about" className="py-2 text-blue-200/90">About</a>
              <a onClick={()=>setOpen(false)} href="#contact" className="py-2 text-blue-200/90">Contact</a>
              <a onClick={()=>setOpen(false)} href="#contact" className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white">Get Quote</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-blue-400/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-blue-300/80 sm:flex-row">
          <p>© {new Date().getFullYear()} Lucky Engineering. All rights reserved.</p>
          <p>Built on three generations of craftsmanship.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
