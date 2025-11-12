import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body className="bg-deep-black text-white-smoke antialiased">
        {children}
      </body>
    </html>
  )
}

