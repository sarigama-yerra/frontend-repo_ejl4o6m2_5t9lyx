import { useState } from 'react'
import { Menu, X, Globe2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-sky-400 to-fuchsia-500 text-white shadow-md">
                <Globe2 className="h-5 w-5" />
              </div>
              <span className="font-semibold text-white tracking-tight">Voyage</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-white/90">
              <a href="#destinations" className="hover:text-white transition">Destinations</a>
              <a href="#experiences" className="hover:text-white transition">Experiences</a>
              <a href="#stories" className="hover:text-white transition">Stories</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl text-white/90 hover:text-white transition">Sign in</button>
              <button className="px-4 py-2 rounded-xl bg-white text-gray-900 font-medium shadow-sm hover:shadow transition">Book a trip</button>
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2 text-white/90">
              <a href="#destinations" className="block py-2">Destinations</a>
              <a href="#experiences" className="block py-2">Experiences</a>
              <a href="#stories" className="block py-2">Stories</a>
              <a href="#contact" className="block py-2">Contact</a>
              <div className="pt-2 flex gap-2">
                <button className="flex-1 px-4 py-2 rounded-xl bg-white text-gray-900 font-medium">Book a trip</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
