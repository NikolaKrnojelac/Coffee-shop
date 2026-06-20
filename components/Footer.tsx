'use client'

import Link from 'next/link'
import { ChevronUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.history.pushState(null, '', '/')
  }

  return (
    <footer className="border-t border-border bg-bg px-8 py-6 font-mono text-xs text-muted">
      <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-4 items-center"> 
        
        
        <div className="opacity-60 tracking-wider">
          &copy; {currentYear} ORIGINE COFFEE COMPANY. SVA PRAVA ZADRŽANA.
        </div>
        
        
        <div className="flex md:justify-end">
          <a
            href="#"
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 tracking-widest no-underline hover:text-text transition-colors"
          >
            NA VRH 
            <span className="transform group-hover:-translate-y-0.5 transition-transform inline-block">
              <ChevronUp size={16} />
            </span>
          </a>
        </div>

      </div>
    </footer>
  )
}