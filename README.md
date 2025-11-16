# 💅 Polished & Posh - Luxury Nail Salon Website

A modern, production-ready website template for nail salons and beauty businesses. Built with React, TypeScript, and Tailwind CSS.

![Website Preview](client/public/generated_images/Luxury_nail_salon_interior_hero_0ef024f0.webp)

## ✨ Features

### 🎨 Beautiful Design
- **Modern UI/UX** - Elegant, professional design optimized for beauty businesses
- **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- **Image Gallery** - Showcase your work with an optimized image gallery
- **Custom Branding** - Easy to customize colors, fonts, and content

### 📱 Core Functionality
- **Booking System** - Built-in appointment request form with email notifications
- **Service Listings** - Display your services with prices and descriptions
- **Contact Information** - Location, hours, phone number, and social media
- **Google Maps** - Embedded map showing your salon location
- **SEO Optimized** - Structured data, meta tags, and sitemap for better visibility

### 🚀 Technical Features
- **Email Notifications** - EmailJS integration for booking confirmations
- **Google Analytics** - Track visitor behavior and conversions
- **Performance Optimized** - WEBP images, lazy loading, code splitting
- **Accessibility** - WCAG compliant with semantic HTML and ARIA labels
- **Type Safety** - Built with TypeScript for reliability
- **Legal Pages** - Privacy Policy and Terms of Service included

## 📦 Tech Stack

- **Frontend:** React 19, TypeScript 5
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **UI Components:** Radix UI + shadcn/ui
- **Routing:** Wouter
- **Forms:** React Hook Form + Zod validation
- **Analytics:** Google Analytics 4
- **Email:** EmailJS
- **Deployment:** Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nail-salon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your actual values:
   - Google Analytics tracking ID
   - EmailJS credentials
   - Business information

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:5173
   ```

## 📝 Customization

### For Business Owners (No Coding Required)

See **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** for a step-by-step guide to:
- Update business name and contact information
- Change services and pricing
- Replace gallery images with your own
- Configure Google Maps
- Setup email notifications
- Customize colors and branding
- Add social media links

### For Developers

See **[TECHNICAL.md](./design_guidelines.md)** for:
- Component architecture
- Styling system
- State management
- API integration
- Testing strategy

## 📤 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed deployment instructions and other hosting options.

## 📁 Project Structure

```
nail-salon/
├── client/
│   ├── public/
│   │   ├── generated_images/    # Gallery and hero images
│   │   ├── robots.txt           # SEO crawler rules
│   │   └── sitemap.xml          # SEO sitemap
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── ui/              # Reusable UI components (50+)
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Hero.tsx         # Landing section
│   │   │   ├── Services.tsx     # Services display
│   │   │   ├── Gallery.tsx      # Image gallery
│   │   │   ├── Booking.tsx      # Appointment form
│   │   │   ├── Contact.tsx      # Contact info + map
│   │   │   └── Footer.tsx       # Site footer
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Main page
│   │   │   ├── Privacy.tsx      # Privacy policy
│   │   │   ├── Terms.tsx        # Terms of service
│   │   │   └── not-found.tsx    # 404 page
│   │   ├── lib/
│   │   │   ├── analytics.ts     # Google Analytics integration
│   │   │   ├── emailService.ts  # EmailJS integration
│   │   │   └── queryClient.ts   # React Query config
│   │   ├── hooks/               # Custom React hooks
│   │   ├── App.tsx              # App router
│   │   ├── main.tsx             # App entry point
│   │   └── index.css            # Global styles + theme
│   └── index.html               # HTML template
├── .env.example                 # Environment variables template
├── vercel.json                  # Vercel deployment config
├── CUSTOMIZATION.md             # Business owner guide
├── DEPLOYMENT.md                # Deployment guide
└── README.md                    # This file
```

## 🔧 Available Scripts

```bash
npm run dev        # Start development server with HMR
npm run build      # Build for production (outputs to /dist)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

## 🎨 Customization Options

### Colors

Edit `/client/src/index.css` to change brand colors:

```css
:root {
  --primary: 270 25% 60%;    /* Main brand color */
  --secondary: 10 30% 92%;   /* Secondary color */
  --accent: 10 35% 90%;      /* Accent color */
}
```

### Fonts

Current fonts: Inter (sans) + Playfair Display (serif)

To change, update `/client/index.html` Google Fonts link and CSS variables.

### Content

All content is in React components:
- **Business info:** `/client/src/components/Contact.tsx`
- **Services:** `/client/src/components/Services.tsx`
- **Gallery:** `/client/src/components/Gallery.tsx`

## 📊 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for local business
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Image alt tags
- ✅ Mobile-friendly (responsive design)
- ✅ Fast loading (optimized images, code splitting)

## 🔒 Privacy & Legal

- Privacy Policy page included (`/privacy`)
- Terms of Service page included (`/terms`)
- GDPR-friendly (anonymized IP in GA)
- Accessible via keyboard navigation
- WCAG 2.1 Level AA compliant

## 📈 Analytics & Tracking

Automatically tracked events:
- Page views
- Scroll depth (25%, 50%, 75%, 100%)
- Booking form submissions
- Social media clicks
- Contact interactions

## 🐛 Troubleshooting

### Build Fails
```bash
npm install          # Reinstall dependencies
npm run build        # Try building again
```

### Images Not Loading
- Check file paths in component files
- Ensure images are in `/client/public/generated_images/`
- Verify image file extensions match code

### Email Notifications Not Working
- Verify EmailJS credentials in `.env.local`
- Check EmailJS dashboard for error logs
- Ensure environment variables start with `VITE_`

### Styling Issues
```bash
npm run dev          # Restart dev server
```
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache

## 📞 Support & Resources

### Documentation
- [Customization Guide](./CUSTOMIZATION.md) - For business owners
- [Deployment Guide](./DEPLOYMENT.md) - Deploy to production
- [Design Guidelines](./design_guidelines.md) - Technical details

### External Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [EmailJS Docs](https://www.emailjs.com/docs/)

## 🎯 Performance

Target metrics (Google PageSpeed Insights):
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

## 📝 License

This project is available for commercial use. Customize and deploy for your nail salon business.

## 🙏 Credits

Built with:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

## 🚀 What's Next?

After deployment, consider adding:
- [ ] Online payment processing (Stripe/Square)
- [ ] Real-time booking calendar
- [ ] Customer reviews/testimonials
- [ ] Blog for nail care tips
- [ ] Loyalty program
- [ ] Gift card purchases
- [ ] Before/after image slider
- [ ] Staff profiles
- [ ] Newsletter signup

---

**Made with 💅 for nail salon businesses**

Need help customizing? See [CUSTOMIZATION.md](./CUSTOMIZATION.md)

Ready to deploy? See [DEPLOYMENT.md](./DEPLOYMENT.md)
