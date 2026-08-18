import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 md:px-8">
        <a href="#home" className="text-sm font-medium tracking-tight text-zinc-900">
          Aditya Girish
        </a>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="p-2 -mr-2 text-zinc-500 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} className="font-light" /> : <Menu size={20} className="font-light" />}
        </button>
      </div>

      {open && (
        <div className="bg-white border-b border-zinc-100 md:hidden pb-6">
          <div className="mx-auto flex flex-col gap-4 px-6 md:px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-500 hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
