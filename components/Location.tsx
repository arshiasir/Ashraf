'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Location() {
  const { t, language } = useLanguage()
  
  // Coordinates: 35°18'37.2"N 51°44'31.3"E
  // Converted to decimal: 35.310333, 51.742028
  const latitude = 35.310333
  const longitude = 51.742028
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`

  return (
    <section
      id="location"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-royal-blue-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-royal-blue-accent mb-4">
            {t('location.title')}
          </h2>
          <div className="w-24 h-1 bg-royal-blue-accent mx-auto" />
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="relative w-full h-[500px] md:h-[600px]">
            <iframe
              src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=${language}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title={t('location.title')}
            />
            {/* Overlay link to open in Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-deep-black px-4 py-2 rounded-lg shadow-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {t('location.viewOnGoogleMaps')}
            </a>
          </div>
        </motion.div>

        {/* Address Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Decorative background card */}
            <div className="relative bg-gradient-to-br from-royal-blue/20 via-deep-black to-royal-blue-accent/20 rounded-2xl p-8 md:p-10 border border-royal-blue-accent/30 shadow-2xl backdrop-blur-sm">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-royal-blue-accent/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-royal-blue-accent/50 rounded-br-2xl" />
              
              {/* Content */}
              <div className="flex flex-col items-center gap-4">
                {/* Location Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-royal-blue-accent/30 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-gradient-to-br from-royal-blue-accent to-royal-blue p-4 rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 md:w-10 md:h-10 text-white"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                </div>
                
                {/* Address Text */}
                <div className="text-center">
                  <p className="text-lg md:text-xl text-gray-300 mb-2 font-light">
                    {language === 'fa' ? 'آدرس' : 'Address'}
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl text-royal-blue-accent font-semibold leading-relaxed">
                    {t('location.address')}
                  </p>
                </div>
                
                {/* Decorative line */}
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-royal-blue-accent to-transparent mt-2" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
