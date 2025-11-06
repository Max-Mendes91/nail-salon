# Polished & Posh Nail Salon Landing Page

## Project Overview
This project is a sophisticated and elegant landing page for a nail salon, "Polished & Posh." It is designed to provide a premium feel through grand typography, generous spacing, and subtle animations. The aesthetic blends modern minimalism with boutique luxury, aiming to showcase expertise and build trust with potential clients.

## Tech Stack
- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Form Submissions:** EmailJS (for booking appointments)

## Design Philosophy
The core principle of this design is **sophisticated elegance with refined motion**. It is built upon three pillars:
- **Luxury:** Achieved through premium typography and generous spacing.
- **Refinement:** Implemented with subtle, non-overwhelming animations.
- **Trust:** Conveyed through a clean, polished interface that highlights the salon's expertise.

## Key Features

### 1. Hero Section
- Full viewport height with a high-quality salon interior image and dark overlay.
- Parallax effect on the background.
- Centered content with salon name, tagline, and a primary "Book Appointment" call-to-action (CTA).

### 2. Services Section
- Responsive grid layout displaying various service cards (Manicures, Pedicures, Nail Art, Gel/Acrylics, Spa Treatments).
- Each card includes an icon/image, service name, brief description, and starting price.
- Subtle lift and shadow hover effects.

### 3. Gallery Section
- Responsive masonry or grid layout showcasing nail art, salon ambiance, and before/after images.
- Features 8-12 high-quality images with a scale effect on hover and a lightbox/modal on click.
- Lazy loading for optimized performance.

### 4. Pricing/Packages Section (Optional but recommended)
- 3-tier package cards (Basic, Premium, Luxury) with detailed service lists and "Book Now" buttons.
- Highlights the middle tier as "Most Popular."

### 5. Booking/Appointment Section
- Split layout with a booking form on one side and visual/info on the other.
- Required fields: Name, Email, Phone, Preferred Date, Preferred Time, Service Type.
- Integrates with EmailJS for seamless form submissions, including loading states, validation, and confirmation.

### 6. Testimonials Section (Optional but recommended)
- Displays 2-3 customer testimonials in a card format with photos, names, ratings, and quotes.

### 7. Contact/Location Section
- Split layout with contact information (hours, phone, email, address) and an embedded map.
- Includes social media links, with Instagram being essential.

### 8. Footer
- Minimal and elegant design with navigation links, social icons, and copyright information.

## Animation Strategy
Animations are subtle and performance-focused, primarily using `transform` and `opacity`.
- Fade-in on viewport entry (`.animate-fade-in`).
- Slide-up for cards (`.animate-slide-up`).
- Staggered delays for grid items.
- Parallax background for the hero section.
- Hover states with scale, shadow, and color transitions.

## Image Requirements
- High-resolution images for the hero section and gallery, optimized with WebP format and JPEG fallbacks.
- Responsive `srcsets` and appropriate loading attributes (`eager` for hero, `lazy` for gallery).

## Accessibility
- WCAG 2.1 AA compliance.
- Keyboard navigation, ARIA labels, sufficient color contrast (4.5:1 minimum), and clear focus indicators.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Max-Mendes91/nail-salon.git
    cd nail-salon/my-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use pnpm
    pnpm install
    ```

3.  **Configure EmailJS:**
    -   Sign up for an account at [EmailJS](https://www.emailjs.com/).
    -   Create a new Email Service and Email Template.
    -   Create a `.env.local` file in the `my-app` directory and add your EmailJS service ID, template ID, and public key:
        ```
        VITE_EMAILJS_SERVICE_ID=your_service_id
        VITE_EMAILJS_TEMPLATE_ID=your_template_id
        VITE_EMAILJS_PUBLIC_KEY=your_public_key
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    pnpm dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

5.  **Build for production:**
    ```bash
    npm run build
    # or
    pnpm build
    ```
    This will create a `dist` directory with the production-ready build.

## Project Structure

```
.
├── design_guidelines.md
├── README.md
└── my-app/
    ├── client/
    │   ├── public/
    │   │   └── generated_images/ # Placeholder images
    │   └── src/
    │       ├── App.tsx
    │       ├── main.tsx
    │       ├── components/ # React components
    │       ├── hooks/      # Custom React hooks
    │       └── lib/        # Utility functions
    ├── server/ # Backend (if any, currently not used for EmailJS)
    └── shared/ # Shared types/schemas
```

## Contributing
Please follow the conventional commits specification for commit messages (e.g., `feat:`, `fix:`, `style:`).

## License
[Specify your license here, e.g., MIT, Apache 2.0]
