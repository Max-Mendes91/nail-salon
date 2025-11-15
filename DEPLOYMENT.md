# Deployment Guide

This guide will help you deploy your nail salon website to production.

## Prerequisites

- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free tier available at https://vercel.com)
- Domain name (optional but recommended)

## Quick Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings

3. **Configure Environment Variables**
   - In Vercel project settings, go to "Environment Variables"
   - Add all variables from `.env.example`:
     - `VITE_GA_TRACKING_ID` - Your Google Analytics ID
     - `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
     - `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key
     - Add other variables as needed

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain (e.g., `polishedandposh.com`)

2. **Update DNS Records**
   - Add the DNS records Vercel provides
   - Common setup:
     - Type: `A` Record → Value: `76.76.21.21`
     - Type: `CNAME` Record → Value: `cname.vercel-dns.com`

3. **Update Environment Variables**
   - Update `VITE_SITE_URL` to your custom domain
   - Redeploy to apply changes

## Post-Deployment Checklist

### 1. Update SEO Meta Tags
Edit `/client/index.html` and replace:
- All instances of `https://polishedandposh.com/` with your actual domain
- Update Open Graph and Twitter Card URLs

### 2. Update Sitemap
Edit `/client/public/sitemap.xml`:
- Replace `https://polishedandposh.com/` with your domain
- Update the `<lastmod>` dates

### 3. Update Robots.txt
Edit `/client/public/robots.txt`:
- Replace sitemap URL with your domain

### 4. Configure Google Analytics

1. **Create Google Analytics Account**
   - Go to https://analytics.google.com
   - Create a new property for your website
   - Get your Tracking ID (format: `G-XXXXXXXXXX`)

2. **Add to Environment Variables**
   - In Vercel: Add `VITE_GA_TRACKING_ID` with your tracking ID
   - Redeploy

### 5. Setup Email Notifications (EmailJS)

1. **Create EmailJS Account**
   - Sign up at https://www.emailjs.com
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template for booking confirmations

2. **Configure Template**
   Example template variables:
   ```
   Subject: New Booking Request - {{name}}

   New appointment request:
   - Name: {{name}}
   - Email: {{email}}
   - Phone: {{phone}}
   - Date: {{date}}
   - Time: {{time}}
   - Service: {{service}}
   - Notes: {{notes}}
   ```

3. **Add Credentials to Environment Variables**
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

4. **Update Booking Component**
   - See `CUSTOMIZATION.md` for detailed instructions

### 6. Configure Google Maps

1. **Get Google Maps Embed Link**
   - Go to https://www.google.com/maps
   - Search for your salon address
   - Click "Share" → "Embed a map"
   - Copy the iframe src URL

2. **Update Contact Component**
   - Edit `/client/src/components/Contact.tsx`
   - Replace the iframe `src` with your embed URL
   - Update the address in the Location card

### 7. Verify All Links

Test these pages:
- ✅ Homepage: `https://yourdomain.com/`
- ✅ Privacy Policy: `https://yourdomain.com/privacy`
- ✅ Terms of Service: `https://yourdomain.com/terms`
- ✅ All section anchors: `#services`, `#gallery`, `#booking`, `#contact`

### 8. Test Booking Form

- Submit a test booking
- Verify email notifications work
- Check that form validation works correctly
- Test on mobile devices

### 9. Performance Optimization

Run these tools to verify performance:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 10. Security Headers

Vercel automatically adds security headers, but verify these are present:
- `X-Frame-Options`
- `X-Content-Type-Options`
- `X-XSS-Protection`
- `Strict-Transport-Security`

## Alternative Deployment Options

### Netlify

1. **Deploy to Netlify**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variables in Netlify dashboard

### Self-Hosted (VPS/Dedicated Server)

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload to Server**
   - Upload the `dist` folder to your server
   - Configure web server (Nginx/Apache)

3. **Nginx Configuration Example**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/nail-salon/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       location ~* \.(jpg|jpeg|png|gif|webp|ico|css|js)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. **Setup SSL Certificate**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## Monitoring and Maintenance

### Setup Uptime Monitoring

Use services like:
- UptimeRobot (https://uptimerobot.com/)
- Pingdom (https://www.pingdom.com/)
- StatusCake (https://www.statuscake.com/)

### Regular Updates

- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Review Google Analytics monthly
- Update gallery images quarterly
- Review and respond to customer feedback

### Backup Strategy

1. **Code Backup**
   - Git repository (already backed up on GitHub)
   - Vercel keeps deployment history

2. **Content Backup**
   - Export service data monthly
   - Backup gallery images
   - Export customer booking records (if implemented)

## Troubleshooting

### Common Issues

**Issue: Build fails on Vercel**
- Solution: Check that Node version is compatible (use Node 18+ LTS)
- Verify all dependencies are in `package.json`

**Issue: Environment variables not working**
- Solution: Make sure variables start with `VITE_`
- Redeploy after adding new variables

**Issue: Routes not working (404 errors)**
- Solution: Verify `vercel.json` rewrites are configured
- For other hosts, ensure server redirects all routes to `index.html`

**Issue: Images not loading**
- Solution: Check that images are in `client/public/generated_images/`
- Verify build copies public folder to dist

**Issue: Booking form not sending emails**
- Solution: Verify EmailJS credentials are correct
- Check EmailJS dashboard for error logs
- Test with EmailJS playground

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- EmailJS Documentation: https://www.emailjs.com/docs/

## Cost Estimate

**Free Tier (Recommended for Starting Out)**
- Hosting: Vercel Free ($0/month)
- Domain: ~$12-15/year
- EmailJS Free: 200 emails/month ($0/month)
- Google Analytics: Free
- **Total: ~$1-2/month**

**Production Tier (For Established Business)**
- Hosting: Vercel Pro ($20/month)
- Domain: ~$12-15/year
- EmailJS Pro: Unlimited emails ($15/month)
- Google Workspace: $6/user/month
- **Total: ~$42/month**

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add custom domain
3. ✅ Configure environment variables
4. ✅ Setup Google Analytics
5. ✅ Configure EmailJS
6. ✅ Test booking form
7. ✅ Verify all pages load correctly
8. ✅ Run performance tests
9. ✅ Setup monitoring
10. ✅ Launch! 🚀
