'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const menuItemKeys = [
  'royalEspresso',
  'goldenCappuccino',
  'luxuryLatte',
  'royalMocha',
  'elegantMacchiato',
  'premiumColdBrew',
]

const menuItemImages = [
  'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
]

const prices = ['$8.50', '$9.00', '$9.50', '$10.00', '$8.00', '$9.50']

export default function Menu() {
  const { t, language } = useLanguage()
  
  const menuItems = menuItemKeys.map((key, index) => ({
    id: index + 1,
    name: t(`menu.items.${key}.name`),
    description: t(`menu.items.${key}.description`),
    price: prices[index],
    image: menuItemImages[index],
  }))
  return (
    <section
      id="menu"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-gray relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-royal-blue-accent mb-4">
            {t('menu.title')}
          </h2>
          <div className="w-24 h-1 bg-royal-blue-accent mx-auto mb-6" />
          <p className="text-white-smoke/80 text-lg max-w-2xl mx-auto">
            {t('menu.description')}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-royal-blue/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-royal-blue-accent/20 flex items-center justify-center"
                >
                  <span className="text-royal-blue-accent text-2xl font-bold">{t('menu.view')}</span>
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif font-semibold text-white-smoke">
                    {item.name}
                  </h3>
                  <span className="text-royal-blue-accent font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-white-smoke/70 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

