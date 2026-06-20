"use client"

import { Playfair_Display, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isJoinPage = pathname === '/coffee-club/join'

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${spaceMono.variable} bg-bg text-text antialiased`}>
        <Navbar />
        
        {children}
        
      
        {!isJoinPage && <Footer />}
      </body>
    </html>
  )
}