import type { Metadata } from 'next'
import { Playfair_Display, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'


const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Origine',
  description: 'Specialty coffee from small farms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${spaceMono.variable}`}>
        <Navbar />
       
        {children}
        <Footer />
      </body>
    </html>
  )
}