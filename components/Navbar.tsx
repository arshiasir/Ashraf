'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.location'), href: '#location' },
  ]

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-royal-blue/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-serif font-bold text-royal-blue-accent cursor-pointer"
            onClick={() => handleLinkClick('#home')}
          >
            Ashraf
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white-smoke hover:text-royal-blue-accent transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal-blue-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            {/* Language Switcher */}
            <motion.button
              onClick={() => setLanguage(language === 'fa' ? 'en' : 'fa')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-royal-blue-accent/20 hover:bg-royal-blue-accent/30 text-white-smoke rounded-md transition-colors duration-300 font-medium text-sm border border-royal-blue-accent/30"
              aria-label="Switch language"
            >
              {language === 'fa' ? 'EN' : 'FA'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-royal-blue-accent focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 flex flex-col justify-center space-y-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                className="w-full h-0.5 bg-royal-blue-accent transition-all"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-full h-0.5 bg-royal-blue-accent transition-all"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                className="w-full h-0.5 bg-royal-blue-accent transition-all"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: language === 'fa' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'fa' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-20 bottom-0 w-64 bg-royal-blue/98 backdrop-blur-md shadow-2xl md:hidden ${
              language === 'fa' ? 'left-0' : 'right-0'
            }`}
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  initial={{ opacity: 0, x: language === 'fa' ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white-smoke hover:text-royal-blue-accent text-xl font-medium transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              {/* Mobile Language Switcher */}
              <motion.button
                onClick={() => {
                  setLanguage(language === 'fa' ? 'en' : 'fa')
                  setIsMobileMenuOpen(false)
                }}
                initial={{ opacity: 0, x: language === 'fa' ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="px-4 py-2 bg-royal-blue-accent/20 hover:bg-royal-blue-accent/30 text-white-smoke rounded-md transition-colors duration-300 font-medium text-lg border border-royal-blue-accent/30 mt-4"
                aria-label="Switch language"
              >
                {language === 'fa' ? 'English' : 'فارسی'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

