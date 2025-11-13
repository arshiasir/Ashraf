'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Fallback: Ensure Google Fonts are loaded even if next/font doesn't work with static export
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap'
    link.crossOrigin = 'anonymous'
    
    // Check if link already exists
    const existingLink = document.querySelector('link[href*="fonts.googleapis.com"]')
    if (!existingLink) {
      document.head.appendChild(link)
    }
  }, [])

  return null
}

