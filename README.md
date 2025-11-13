# Ashraf Café - Luxurious Coffee Website

A premium, fully responsive Next.js website for Ashraf Café featuring elegant animations, royal aesthetics, and a cinematic user experience.

## 🎨 Design Features

- **Royal Color Palette**: Royal Blue (#0A2647), Gold Accent (#C9A227), Deep Black, Charcoal Gray, White Smoke
- **Elegant Typography**: Playfair Display for headings, Inter/Poppins for body text
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Responsive Design**: Fully optimized for all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Navbar.tsx           # Navigation with scroll effects
│   ├── Hero.tsx             # Hero section with animated logo
│   ├── Menu.tsx             # Menu grid with animated cards
│   ├── Gallery.tsx          # Image gallery with masonry layout
│   ├── About.tsx            # About section with animated text
│   ├── Contact.tsx          # Contact form and map
│   └── Footer.tsx           # Footer with social links
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## ✨ Features

- **Animated Navbar**: Transparent background that becomes opaque on scroll
- **Hero Section**: Full-screen with animated logo and smooth scroll indicator
- **Menu Section**: Responsive grid with hover animations
- **Gallery**: Masonry layout with lightbox modal
- **About Section**: Animated paragraphs with smoke effects
- **Contact Form**: Form with ripple button effect and Google Maps integration
- **Mobile Menu**: Smooth slide-in drawer animation
- **Performance Optimized**: Image optimization with Next.js Image component
- **Smooth Scrolling**: Native smooth scroll behavior

## 🛠️ Technologies Used

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Next.js Image Optimization**

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Customization

### Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  'royal-blue': '#0A2647',
  'gold-accent': '#C9A227',
  // ... more colors
}
```

### Content

Update content in respective component files:
- Menu items: `components/Menu.tsx`
- Gallery images: `components/Gallery.tsx`
- About text: `components/About.tsx`
- Contact info: `components/Contact.tsx`

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is created for Ashraf Café.

---

**Built with ❤️ for Ashraf Café**




