# Customization Guide for Business Owners

This guide will help you customize the nail salon website for your specific business. No coding experience required for most changes!

## Table of Contents

1. [Basic Information](#basic-information)
2. [Business Details](#business-details)
3. [Services & Pricing](#services--pricing)
4. [Gallery Images](#gallery-images)
5. [Contact Information](#contact-information)
6. [Social Media](#social-media)
7. [Colors & Branding](#colors--branding)
8. [Email Notifications](#email-notifications)
9. [Google Analytics](#google-analytics)
10. [Advanced Customization](#advanced-customization)

---

## Basic Information

### 1. Business Name

**Current:** Polished & Posh

**Files to edit:**
- `/client/index.html` - Lines 12, 57, 60
- `/client/src/components/Header.tsx` - Look for "Polished & Posh"
- `/client/src/components/Footer.tsx` - Look for "Polished & Posh"

**How to change:**
1. Open each file in a text editor
2. Find and replace "Polished & Posh" with your salon name
3. Save the files

### 2. Website Description

**Current:** "Experience luxury nail care at Polished & Posh..."

**File:** `/client/index.html` - Lines 18-20

**How to change:**
```html
<meta
  name="description"
  content="Your new description here - keep it under 160 characters for best SEO"
/>
```

---

## Business Details

### Update Business Information

**File:** `/client/src/components/Contact.tsx`

**What to change:**

1. **Address** (Lines 36-38)
```tsx
<p className="text-sm text-muted-foreground">
  123 Your Street Name
  <br />
  Your City, State ZIP
</p>
```

2. **Phone Number** (Lines 50-52)
```tsx
<p className="text-sm text-muted-foreground">
  (555) 123-4567
  <br />
  Call for appointments
</p>
```

3. **Business Hours** (Lines 63-66)
```tsx
<p className="text-sm text-muted-foreground">
  Mon-Fri: 9AM - 7PM
  <br />
  Sat-Sun: 10AM - 6PM
</p>
```

4. **Instagram Handle** (Lines 78-80)
```tsx
<p className="text-sm text-muted-foreground">
  @yoursalonhandle
  <br />
  See our latest work
</p>
```

### Update Structured Data for SEO

**File:** `/client/index.html` - Lines 53-146

Update the JSON-LD schema with your actual business information:

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Your Salon Name",
  "description": "Your salon description",
  "telephone": "+1-555-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Your Street",
    "addressLocality": "Your City",
    "addressRegion": "CA",
    "postalCode": "90210",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "YOUR_LATITUDE",
    "longitude": "YOUR_LONGITUDE"
  }
}
```

**How to find your coordinates:**
1. Go to https://www.latlong.net/
2. Enter your salon address
3. Copy the latitude and longitude values

---

## Services & Pricing

**File:** `/client/src/components/Services.tsx`

**Current Services:**
1. Classic Manicure - $35+
2. Luxury Pedicure - $55+
3. Gel & Acrylics - $65+
4. Nail Art Design - $25+

**How to customize:**

Find this section (around line 10) and update:

```tsx
const services = [
  {
    id: 1,
    title: "Your Service Name",
    description: "Your service description goes here",
    price: "$XX+",
    icon: Sparkles, // Choose from: Sparkles, Heart, Star, Palette
  },
  // Add more services...
];
```

**Available Icons:**
- `Sparkles` - For classic/basic services
- `Heart` - For luxury/premium services
- `Star` - For popular/featured services
- `Palette` - For artistic/creative services

---

## Gallery Images

### Replace Gallery Images

**Location:** `/client/public/generated_images/`

**Current Images:** 9 images (acrylic nails, manicure, nail art, etc.)

**How to replace:**

1. **Prepare Your Images:**
   - Take high-quality photos of your work
   - Recommended size: 800x800px to 1200x1200px
   - Format: WEBP for best performance (or JPG/PNG)
   - Name format: `descriptive-name.webp`

2. **Add Images:**
   - Place your images in `/client/public/generated_images/`
   - Keep the same naming convention or update the file paths

3. **Update Image References:**
   - **File:** `/client/src/components/Gallery.tsx`
   - Update the `galleryImages` array (around line 8):

```tsx
const galleryImages = [
  {
    src: "/generated_images/your-image-1.webp",
    alt: "Description of your nail work 1",
  },
  {
    src: "/generated_images/your-image-2.webp",
    alt: "Description of your nail work 2",
  },
  // Add 7-12 images for best layout
];
```

**Pro Tips:**
- Include variety: different services, nail art styles, salon interior
- Use descriptive alt text for SEO
- Optimize images before uploading (use https://squoosh.app/)

---

## Contact Information

### Update Google Maps

**File:** `/client/src/components/Contact.tsx` - Line 94

**Current:** Generic Beverly Hills location

**How to get your embed code:**

1. Go to https://www.google.com/maps
2. Search for your salon address
3. Click "Share" → "Embed a map"
4. Copy the `<iframe>` code
5. Extract just the `src` URL from the iframe

**Update the code:**

```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Your Salon Name Location"
  className="absolute inset-0"
></iframe>
```

---

## Social Media

### Update Social Media Links

**Files:**
- `/client/src/components/Footer.tsx` - Social icons (lines 84-106)
- `/client/index.html` - Structured data (lines 90-94)

**Footer Social Links:**

```tsx
<a
  href="https://www.instagram.com/yoursalonhandle"
  className="..."
  aria-label="Instagram"
>
  <SiInstagram className="w-5 h-5" />
</a>
<a
  href="https://www.facebook.com/yoursalonpage"
  className="..."
  aria-label="Facebook"
>
  <SiFacebook className="w-5 h-5" />
</a>
<a
  href="https://www.tiktok.com/@yoursalonhandle"
  className="..."
  aria-label="TikTok"
>
  <SiTiktok className="w-5 h-5" />
</a>
```

**Update Environment Variables:**

Create `.env.local` file in the root directory:

```env
VITE_INSTAGRAM_URL=https://www.instagram.com/yoursalonhandle
VITE_FACEBOOK_URL=https://www.facebook.com/yoursalonpage
VITE_TIKTOK_URL=https://www.tiktok.com/@yoursalonhandle
```

---

## Colors & Branding

### Change Brand Colors

**File:** `/client/src/index.css` - Lines 10-80

**Current Color Scheme:**
- Primary: Deep Plum/Mauve (HSL 270, 25%, 60%)
- Secondary: Soft Blush (HSL 10, 30%, 92%)
- Accent: Rose Gold (HSL 10, 35%, 90%)

**How to change:**

1. **Choose Your Colors:**
   - Use a color picker tool: https://hslpicker.com/
   - Convert to HSL format

2. **Update CSS Variables:**

```css
:root {
  --primary: YOUR_HUE YOUR_SATURATION% YOUR_LIGHTNESS%; /* Main brand color */
  --secondary: YOUR_HUE YOUR_SATURATION% YOUR_LIGHTNESS%; /* Accent color */
  --accent: YOUR_HUE YOUR_SATURATION% YOUR_LIGHTNESS%; /* Highlight color */
}
```

**Example Color Schemes:**

**Elegant Pink & Gold:**
```css
--primary: 340 75% 60%;     /* Rich Pink */
--secondary: 45 90% 90%;    /* Soft Gold */
--accent: 45 100% 85%;      /* Bright Gold */
```

**Modern Teal & Coral:**
```css
--primary: 180 60% 50%;     /* Teal */
--secondary: 15 85% 70%;    /* Coral */
--accent: 15 90% 65%;       /* Bright Coral */
```

**Classic Black & Rose:**
```css
--primary: 0 0% 20%;        /* Charcoal */
--secondary: 350 70% 85%;   /* Rose */
--accent: 350 80% 75%;      /* Bright Rose */
```

### Change Fonts

**File:** `/client/index.html` - Lines 150-154

**Current Fonts:**
- Sans: Inter (body text)
- Serif: Playfair Display (headings)

**How to use different Google Fonts:**

1. Visit https://fonts.google.com
2. Choose your fonts
3. Copy the `<link>` code
4. Replace the existing font link in `index.html`

**Update CSS:**

**File:** `/client/src/index.css` - Look for font families

```css
:root {
  --font-sans: "Your Sans Font", sans-serif;
  --font-serif: "Your Serif Font", serif;
}
```

**Popular Combinations:**
- Elegant: Playfair Display + Lato
- Modern: Montserrat + Open Sans
- Classic: Merriweather + Source Sans Pro
- Luxury: Cormorant Garamond + Raleway

---

## Email Notifications

### Setup EmailJS (Free for 200 emails/month)

**Step 1: Create EmailJS Account**

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

**Step 2: Add Email Service**

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended for simplicity)
4. Follow the connection steps
5. Copy your **Service ID**

**Step 3: Create Email Template**

1. Go to "Email Templates" in EmailJS
2. Click "Create New Template"
3. Use this template:

**Template Name:** `booking_notification`

**Subject:** `New Appointment Request from {{from_name}}`

**Content:**
```
Hello Team,

You have a new appointment request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Preferred Date: {{appointment_date}}
Preferred Time: {{appointment_time}}
Service: {{service_type}}
Special Requests: {{special_requests}}

Please contact the client to confirm the appointment.

Best regards,
Your Salon Website
```

4. Copy your **Template ID**
5. Copy your **Public Key** from Account → API Keys

**Step 4: Add Credentials to Environment**

Create or edit `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

**Step 5: Test**

1. Run `npm run dev`
2. Go to the booking section
3. Fill out and submit the form
4. Check your email!

**Troubleshooting:**
- Check EmailJS dashboard for delivery logs
- Verify all IDs are correct in `.env.local`
- Make sure file is named exactly `.env.local`
- Restart dev server after changing env variables

---

## Google Analytics

### Setup Google Analytics 4

**Step 1: Create GA4 Property**

1. Go to https://analytics.google.com
2. Create a new account (or use existing)
3. Create a new GA4 property
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

**Step 2: Add to Environment**

In `.env.local`:

```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

**Step 3: Verify**

1. Run your site: `npm run dev`
2. Open your site in a browser
3. Open browser console (F12)
4. Look for "Google Analytics initialized" message
5. Check GA4 Real-Time reports (wait 30 seconds)

**What's Tracked Automatically:**
- Page views
- Scroll depth (25%, 50%, 75%, 100%)
- Booking submissions
- Social media clicks
- Outbound links

---

## Advanced Customization

### Add More Pages

**Example: Add an "About" page**

1. **Create the page:**
   - File: `/client/src/pages/About.tsx`
   - Copy structure from `Privacy.tsx`

2. **Add route:**
   - File: `/client/src/App.tsx`
   - Add: `<Route path="/about" component={About} />`

3. **Add to navigation:**
   - File: `/client/src/components/Header.tsx`
   - Add link to menu

### Modify Layout

**Header (Navigation):**
- File: `/client/src/components/Header.tsx`
- Change logo, menu items, mobile menu

**Footer:**
- File: `/client/src/components/Footer.tsx`
- Add/remove links, change layout

**Hero Section:**
- File: `/client/src/components/Hero.tsx`
- Change headline, buttons, background image

### Add Booking Integration

The site is ready to integrate with booking systems like:

**Calendly:**
```tsx
// In Booking.tsx, replace form with:
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/yourusername"
  style={{ minWidth: '320px', height: '630px' }}
></div>
```

**Square Appointments:**
- Get embed code from Square dashboard
- Replace booking form section

**Acuity Scheduling:**
- Get iframe embed code
- Add to Booking component

---

## Checklist Before Launch

### Content Checklist
- [ ] Business name updated everywhere
- [ ] All contact information correct
- [ ] Services and prices accurate
- [ ] Gallery has your own images (minimum 9)
- [ ] Social media links work
- [ ] Google Maps shows correct location
- [ ] Business hours are correct
- [ ] Phone number is correct and clickable
- [ ] Email address is correct

### Technical Checklist
- [ ] EmailJS configured and tested
- [ ] Google Analytics tracking working
- [ ] All environment variables set
- [ ] Privacy Policy reviewed and customized
- [ ] Terms of Service reviewed and customized
- [ ] Favicon updated (optional)
- [ ] Website runs without errors (`npm run dev`)
- [ ] Build completes successfully (`npm run build`)

### SEO Checklist
- [ ] Meta description updated
- [ ] Page title updated
- [ ] Structured data (JSON-LD) updated
- [ ] Sitemap.xml updated with domain
- [ ] Robots.txt updated with domain
- [ ] All images have descriptive alt text
- [ ] Social media preview images set

### Final Testing
- [ ] Test booking form submission
- [ ] Verify email notifications arrive
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Check all links work
- [ ] Test in Chrome, Firefox, Safari
- [ ] Verify Google Analytics tracking

---

## Getting Help

### Common Issues

**Problem:** Changes don't appear
- **Solution:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Restart dev server

**Problem:** Build fails
- **Solution:** Run `npm install` to update dependencies
- Check for syntax errors in files you edited
- Review error messages in terminal

**Problem:** Images not showing
- **Solution:** Check file paths are correct
- Ensure images are in `/client/public/` directory
- Verify image file extensions match code

**Problem:** Email notifications not working
- **Solution:** Verify all EmailJS credentials are correct
- Check EmailJS dashboard for error logs
- Make sure `.env.local` file exists and has correct format

### Resources

- **React Documentation:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Google Analytics:** https://support.google.com/analytics
- **Web.dev (SEO & Performance):** https://web.dev/

### Need More Customization?

Consider hiring a developer for:
- Custom booking system integration
- Payment processing (Stripe, Square)
- Customer database
- Loyalty program
- Advanced animations
- Multi-language support
- Blog or resources section

---

**Congratulations!** You now have a professional nail salon website. Update it regularly with fresh gallery images and keep your services and prices current for the best results.
