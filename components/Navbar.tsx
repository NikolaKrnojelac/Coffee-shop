'use client'

import Link from 'next/link'
import { beans } from '@/lib/beans'

export default function Navbar() {
  const prvaKafaSlug = beans[0]?.slug || 'kafe'

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `/#${id}`)
    } else {
      window.location.href = `/#${id}`
    }
  }

  return (
    <nav className="flex justify-between items-center p-4 sm:px-8 border-b-2 border-border font-mono">
      <Link
        href="/"
        className="text-base sm:text-lg font-bold tracking-wide text-text no-underline hover:opacity-80 transition-opacity"
      >
        ORIGINE
      </Link>

      
      <div className="flex gap-3 sm:gap-8 items-center">
        
        <a
          href={`/#${prvaKafaSlug}`}
          onClick={(e) => handleScroll(e, prvaKafaSlug)}
          className="hidden sm:inline-block text-xs sm:text-sm tracking-widest text-muted cursor-pointer no-underline hover:text-text transition-colors"
        >
          KAFE
        </a>
        
        <a
          href="/#barista"
          onClick={(e) => handleScroll(e, 'barista')}
          className="hidden sm:inline-block text-xs sm:text-sm tracking-widest text-muted cursor-pointer no-underline hover:text-text transition-colors"
        >
          BARISTE
        </a>

        <Link
          href="/coffee-club"
          className="text-[11px] sm:text-sm tracking-widest text-muted cursor-pointer no-underline hover:text-text transition-colors"
        >
          COFFEE CLUB
        </Link>

        <Link
          href="/coffee-club/join"
          className="text-[11px] sm:text-sm bg-dark text-bg tracking-wide px-3 py-1.5 sm:px-4 sm:py-2 no-underline hover:opacity-70 transition-opacity"
        >
          PRETPLATI SE
        </Link>
      </div>
    </nav>
  )
}