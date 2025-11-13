import type { Metadata } from 'next'
import { Playfair_Display, Inter, Poppins } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import FontLoader from '@/components/FontLoader'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ashraf Café - Luxurious Coffee Experience',
  description: 'Experience the royal elegance of Ashraf Café - where tradition meets luxury',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${playfairDisplay.variable} ${inter.variable} ${poppins.variable} bg-deep-black text-white-smoke antialiased font-vazir`}>
        <FontLoader />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}


