NAIL SALON LANDING PAGE - DESIGN GUIDELINES
Salon Name: Polished & Posh (or similar elegant original name)

Tech Stack: React 18 + Vite + Tailwind v4 + EmailJS for bookings

🎯 Design Philosophy
Core Principle: Sophisticated elegance with refined motion

Three Pillars:

Luxury - Premium feel through grand typography and generous spacing
Refinement - Subtle animations that elevate, don't overwhelm
Trust - Clean, polished interface showcasing expertise
Aesthetic Direction: Blend of modern minimalism with boutique luxury - think high-end spa meets contemporary beauty studio

🎨 Color Strategy
Primary Palette:

Deep Plum/Mauve: #8B7BA8 (headings, CTAs, accents)
Soft Blush: #F4E4E8 (highlights, backgrounds)
Warm Cream: #FFF8F0 (section backgrounds)
Charcoal: #2D2D2D (text, dark sections)
Rose Gold accent: #E8B4A8 (hover states, borders)
Background Strategy:

Hero: Dark charcoal with subtle gradient
Alternating sections: Cream/White/Soft Blush
Service cards: White with soft shadows
Gallery: Clean white grid
Never hardcode colors - use Tailwind theme variables only

📐 Layout & Spacing
Section Spacing (Vertical Rhythm):

Mobile: py-16
Tablet: py-20
Desktop: py-24 to py-32
Containers:

Standard: max-w-7xl
Narrow content: max-w-4xl
Hero: Full-width with inner container
Grid Spacing:

Service cards: gap-8
Gallery images: gap-4 to gap-6
Pricing tiers: gap-6

✍️ Typography Scale
Headline Hierarchy:

Hero H1: text-5xl → text-6xl → text-7xl (mobile → tablet → desktop)
Section H2: text-4xl → text-5xl → text-6xl
Service H3: text-2xl → text-3xl
Fonts:

Headings: Elegant serif (Playfair Display or similar)
Body: Clean sans-serif (Inter or similar)
Weight Strategy:

Main headings: font-semibold or font-bold
Subheadings: font-medium
Body: font-normal
Prices: font-semibold
🏗️ Page Structure

1. Hero Section
   Full viewport height (min-h-screen)
   Background: High-quality salon interior image with dark overlay
   Parallax effect on background (scroll-based)
   Centered content: Salon name, tagline, primary CTA ("Book Appointment")
   Buttons on images must have blurred backdrop backgrounds

2. Services Section
   Grid layout: 1 col mobile → 2 cols tablet → 3 cols desktop
   Service cards with:
   Icon or small image
   Service name (H3)
   Brief description
   Starting price
   Hover effect: subtle lift with shadow
   Categories: Manicures, Pedicures, Nail Art, Gel/Acrylics, Spa Treatments
3. Gallery Section
   Responsive masonry or grid layout
   Showcase nail art, salon ambiance, before/after
   8-12 high-quality images
   Hover: scale effect (hover:scale-105)
   Click: lightbox/modal for full view
   Lazy loading for all images
4. Pricing/Packages Section
   3-tier package cards (Basic, Premium, Luxury)
   Card design: white background, subtle border, shadow on hover
   Include: Package name, price, service list, "Book Now" button
   Highlight middle tier as "Most Popular"
5. Booking/Appointment Section
   Split layout: Form (left) + Visual/Info (right)
   Required fields: Name, Email, Phone, Preferred Date, Preferred Time, Service Type
   Optional: Special requests textarea
   EmailJS integration for submissions
   Loading states, validation, success confirmation
   CTA button: Primary color with glow effect
6. Testimonials Section (optional but recommended)
   2-3 customer testimonials
   Card format with photo, name, rating, quote
   Carousel or static grid
7. Contact/Location Section
   Split: Contact info (left) + Map embed (right)
   Hours of operation, phone, email, address
   Social media links (Instagram essential for nail salons)
   Small "Get Directions" CTA
8. Footer
   Navigation links, social icons, copyright
   Newsletter signup optional
   Minimal, elegant design
   🎭 Animation Strategy
   Week 2 (Build Phase): Structure only, NO animations Week 3 (Polish Phase): Add progressive motion

Allowed Animations:

Fade-in on viewport entry (.animate-fade-in)
Slide-up for cards (.animate-slide-up)
Staggered delays for grid items (animate-delay-100/200/300)
Hero parallax background (scroll \* 0.5)
Hover states: scale, shadow, color transitions
Performance: Only animate transform and opacity

🖼️ Image Requirements
Images Needed:

Hero: Elegant salon interior or nail art close-up (high-res, dramatic)
Gallery: 8-12 images of nail designs, salon space, services
Services: Small icons or photos per service category
About/Team: Optional salon or staff photos
Technical:

Format: WebP with JPEG fallback
Hero: loading="eager" fetchpriority="high"
Gallery: loading="lazy"
Responsive srcsets for performance
🎯 Component Priorities
Must-Have Components:

Navigation header (sticky on scroll)
Hero with CTA
Services grid (3-4 service types minimum)
Gallery (8+ images)
Booking form (functional with EmailJS)
Contact section
Footer
Nice-to-Have:

Testimonials carousel
Pricing packages comparison
Instagram feed integration
Before/after slider
📱 Mobile-First Responsiveness
Breakpoint Strategy:

Mobile (375px): Single column, stacked sections
Tablet (768px): 2-column grids, side-by-side layouts
Desktop (1024px+): 3-column grids, full hero parallax
Touch Targets: Minimum 44px for buttons and links

♿ Accessibility
WCAG 2.1 AA compliance
Keyboard navigation for all interactive elements
ARIA labels for form fields and buttons
Color contrast ratios: 4.5:1 minimum
Focus indicators on all focusable elements
🚀 Implementation Notes
Use Tailwind v4 @theme directive for color variables
Component classes in src/index.css (.btn, .card, .section, etc.)
EmailJS for booking backend (no server needed)
Deploy on Vercel with auto-deploy
Environment variables for API keys (.env.local)
Conventional commits: feat:, fix:, style:
