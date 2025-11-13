'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const galleryImages = [
  {
    id: 1,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-coffee-shop-interior.jpg',
    alt: 'Coffee shop interior',
  },
  {
    id: 2,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-coffee-beans.jpg',
    alt: 'Coffee beans',
  },
  {
    id: 3,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-coffee-cup.jpg',
    alt: 'Coffee cup',
  },
  {
    id: 4,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-latte-art.jpg',
    alt: 'Latte art',
  },
  {
    id: 5,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-coffee-cup.jpg',
    alt: 'Coffee preparation',
  },
  {
    id: 6,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-coffee-shop-interior.jpg',
    alt: 'Café ambiance',
  },
  {
    id: 7,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-coffee-beans.jpg',
    alt: 'Coffee selection',
  },
  {
    id: 8,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-coffee-cup.jpg',
    alt: 'Barista at work',
  },
  {
    id: 9,
    src: 'https://c243690.parspack.net/c243690/ashraf/gallery-latte-art.jpg',
    alt: 'Coffee presentation',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-royal-blue-accent mb-4">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-royal-blue-accent mx-auto mb-6" />
          <p className="text-white-smoke/80 text-lg max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative break-inside-avoid mb-6 overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white-smoke font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages.find((img) => img.id === selectedImage)?.src || ''}
              alt="Gallery image"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-royal-blue-accent text-3xl font-bold hover:text-white-smoke transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

