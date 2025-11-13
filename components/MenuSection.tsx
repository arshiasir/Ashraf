'use client'

import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import React, { useCallback, useMemo, useState } from 'react'

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-playfair',
	display: 'swap',
})

type MenuItem = {
	name: string
	price: string
	image: string
}

type MenuCategory = {
	title: string
	items: MenuItem[]
}

const hotCategory: MenuCategory = {
	title: 'گرم',
	items: [
		{ 
			name: 'اسپرسو', 
			price: '۴۰',
			image: '/image/menu-espresso.jpg'
		},
		{ 
			name: 'کاپوچینو', 
			price: '۹۰',
			image: '/image/menu-cappuccino.jpg'
		},
		{ 
			name: 'هات/وایت/پینک چاکلت', 
			price: '۹۰',
			image: '/image/menu-chocolate.jpg'
		},
		{ 
			name: 'چای سیاه', 
			price: '۴۰',
			image: '/image/Blacktea.jpg'
		},
		{ 
			name: 'چای ماسالا', 
			price: '۱۰۰',
			image: '/image/menu-masala-tea.jpg'
		},
		{ 
			name: 'لته / موکا / کارامل ماکیاتو', 
			price: '۱۰۰',
			image: '/image/menu-latte.jpg'
		},
	],
}

const coldCategory: MenuCategory = {
	title: 'سرد',
	items: [
		{ 
			name: 'لیموناد', 
			price: '۱۰۰',
			image: '/image/limonade.webp'
		},
		{ 
			name: 'موهیتو', 
			price: '۱۱۰',
			image: '/image/menu-mojito.jpg'
		},
		{ 
			name: 'آب‌هویج', 
			price: '۹۰',
			image: '/image/Carrotjuice.jpg'
		},
		{ 
			name: 'آب انار', 
			price: '۱۰۰',
			image: '/image/Pomegranatejuice.webp'
		},
		{ 
			name: 'شیک شکلات / موز / توت فرنگی', 
			price: '۱۷۵',
			image: '/image/menu-chocolate.jpg'
		},
		{ 
			name: 'اسموتی موز', 
			price: '۱۲۵',
			image: '/image/menu-banana-smoothie.jpg'
		},
	],
}

const breakfastCategory: MenuCategory = {
	title: 'صبحانه',
	items: [
		{ 
			name: 'املت', 
			price: '۱۲۰',
			image: '/image/Omelette.jpeg'
		},
		{ 
			name: 'نیمرو', 
			price: '۱۰۰',
			image: '/image/menu-iranian-breakfast.jpg'
		},
		{ 
			name: 'ایرانی  (پنیر، گردو، کره، مربا، عسل، چای)', 
			price: '۲۹۵',
			image: '/image/iranian.webp'
		},
	],
}

function CategoryBlock({ category, delay = 0 }: { category: MenuCategory; delay?: number }) {
	return (
		<div className="relative">
			<div className="mb-8">
				<h3
					className="font-vazir text-2xl md:text-3xl font-semibold text-royal-blue-accent tracking-tight text-center mb-2"
				>
					{category.title}
				</h3>
				<motion.span
					initial={{ width: 0 }}
					whileInView={{ width: '6rem' }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease: 'easeInOut' }}
					className="block h-[2px] mx-auto mt-2 bg-gold rounded-full"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{category.items.map((item, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.5, delay: delay + idx * 0.1 }}
						whileHover={{ y: -8, scale: 1.02 }}
						className="group bg-royal-blue/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl cursor-pointer border border-royal-blue-accent/20"
					>
						<div className="relative h-48 overflow-hidden">
							<Image
								src={item.image}
								alt={item.name}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
							<div className="absolute inset-0 bg-royal-blue-accent/0 group-hover:bg-royal-blue-accent/10 transition-colors duration-300" />
						</div>
						<div className="p-4">
							<div className="flex justify-between items-start mb-2">
							<h4
								className="
									font-vazir
									text-lg md:text-xl font-semibold text-white-smoke
									group-hover:text-gold transition-colors duration-200
									flex-1 text-right
								"
							>
								{item.name}
							</h4>
							<span
								className="
									font-vazir
									text-lg md:text-xl tabular-nums
									text-royal-blue-accent font-bold
									group-hover:text-gold transition-colors duration-200
									ml-3 whitespace-nowrap
								"
							>
								{item.price}
							</span>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default function MenuSection() {
	// Tabs state
	const [activeTab, setActiveTab] = useState<'hot' | 'cold' | 'breakfast'>('hot')

	const tabs = useMemo(
		() => [
			{ key: 'hot' as const, label: 'گرم' },
			{ key: 'cold' as const, label: 'سرد' },
			{ key: 'breakfast' as const, label: 'صبحانه' },
		],
		[]
	)

	const handleTabClick = useCallback((tab: 'hot' | 'cold' | 'breakfast') => {
		setActiveTab(tab)
	}, [])

	return (
		<section
			id="menu"
			className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-gray"
		>
			{/* Background Decoration */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-0 w-96 h-96 bg-royal-blue-accent rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-3xl" />
			</div>

			{/* Delicate gold leaf illustration on right margin */}
			<div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 pr-2 md:pr-6 opacity-20 md:opacity-10">
				<svg width="140" height="360" viewBox="0 0 140 360" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M70 10 C100 40, 120 80, 120 120 C120 160, 90 190, 70 210 C50 230, 30 260, 30 300 C30 330, 45 345, 60 350"
						stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
					<path d="M62 70 C75 65, 85 55, 90 40" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-gold" />
					<path d="M60 140 C78 135, 96 120, 110 100" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-gold" />
					<path d="M50 240 C65 235, 78 225, 92 210" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-gold" />
					<circle cx="88" cy="38" r="2" fill="currentColor" className="text-gold" />
					<circle cx="112" cy="100" r="2" fill="currentColor" className="text-gold" />
					<circle cx="94" cy="210" r="2" fill="currentColor" className="text-gold" />
				</svg>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto">
				{/* Sticky Tabs */}
				<div className="sticky top-0 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 bg-charcoal-gray/80 backdrop-blur-md border-b border-white-smoke/10">
					<nav className="max-w-6xl mx-auto flex gap-2 md:gap-4 py-3 overflow-x-auto justify-center">
						{tabs.map(t => {
							const isActive = activeTab === t.key
							return (
								<button
									key={t.key}
									type="button"
									onClick={() => handleTabClick(t.key)}
									className={`
										whitespace-nowrap rounded-full px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base transition-all duration-300
										${isActive 
											? 'bg-royal-blue-accent text-deep-black shadow-lg shadow-royal-blue-accent/50 scale-105' 
											: 'bg-royal-blue/50 text-white-smoke hover:bg-royal-blue/70 hover:text-royal-blue-accent'
										}
										border border-royal-blue-accent/30 shadow-sm
									`}
									aria-current={isActive ? 'page' : undefined}
								>
									{t.label}
								</button>
							)
						})}
					</nav>
				</div>

				{/* Tab Content */}
				<div className="mt-8 md:mt-12">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
						className="max-w-7xl mx-auto"
					>
						{activeTab === 'hot' && (
							<CategoryBlock category={hotCategory} delay={0} />
						)}
						{activeTab === 'cold' && (
							<CategoryBlock category={coldCategory} delay={0} />
						)}
						{activeTab === 'breakfast' && (
							<CategoryBlock category={breakfastCategory} delay={0} />
						)}
					</motion.div>
				</div>
			</div>
		</section>
	)
}


