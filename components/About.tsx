'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const paragraphs = [
    {
      id: 1,
      text: t('about.paragraphs.0'),
      direction: 'left' as const,
    },
    {
      id: 2,
      text: t('about.paragraphs.1'),
      direction: 'right' as const,
    },
    {
      id: 3,
      text: t('about.paragraphs.2'),
      direction: 'left' as const,
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-royal-blue relative overflow-hidden"
    >
      {/* Background Smoke Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-royal-blue-accent/10 rounded-full blur-3xl smoke"
            initial={{
              x: `${Math.random() * 100}%`,
              y: '100%',
            }}
            animate={{
              y: '-20%',
              x: `${(Math.random() - 0.5) * 50 + 50}%`,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-royal-blue-accent mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-royal-blue-accent mx-auto mb-6" />
        </motion.div>

        {/* Animated Paragraphs */}
        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={paragraph.id}
              initial={{
                opacity: 0,
                x: paragraph.direction === 'left' ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-white-smoke text-lg md:text-xl leading-relaxed text-center"
            >
              <p className="font-light">{paragraph.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center items-center space-x-4 mt-16"
        >
          <div className="w-16 h-0.5 bg-royal-blue-accent" />
          <div className="w-3 h-3 border-2 border-royal-blue-accent rotate-45" />
          <div className="w-16 h-0.5 bg-royal-blue-accent" />
        </motion.div>
      </div>
    </section>
  )
}

