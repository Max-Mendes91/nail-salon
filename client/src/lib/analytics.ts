// Google Analytics 4 Integration
// Setup: Add VITE_GA_TRACKING_ID to your environment variables

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

// Initialize Google Analytics
export const initGA = (): void => {
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics tracking ID not found. Analytics will not be initialized.');
    return;
  }

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };

  // Configure GA
  window.gtag('js', new Date() as any);
  window.gtag('config', GA_TRACKING_ID, {
    send_page_view: true,
    anonymize_ip: true, // GDPR compliance
  });

  console.log('Google Analytics initialized with ID:', GA_TRACKING_ID);
};

// Track page views
export const trackPageView = (url: string): void => {
  if (!GA_TRACKING_ID || !window.gtag) return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  if (!GA_TRACKING_ID || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined event tracking functions for common actions

export const trackBookingSubmit = (service: string): void => {
  trackEvent({
    action: 'booking_submit',
    category: 'Engagement',
    label: service,
  });
};

export const trackServiceView = (serviceName: string): void => {
  trackEvent({
    action: 'service_view',
    category: 'Engagement',
    label: serviceName,
  });
};

export const trackGalleryView = (): void => {
  trackEvent({
    action: 'gallery_view',
    category: 'Engagement',
    label: 'Gallery Section',
  });
};

export const trackContactClick = (method: 'phone' | 'email' | 'map'): void => {
  trackEvent({
    action: 'contact_click',
    category: 'Engagement',
    label: method,
  });
};

export const trackSocialClick = (platform: string): void => {
  trackEvent({
    action: 'social_click',
    category: 'Social Media',
    label: platform,
  });
};

export const trackOutboundLink = (url: string): void => {
  trackEvent({
    action: 'outbound_link',
    category: 'Navigation',
    label: url,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number): void => {
  trackEvent({
    action: 'scroll_depth',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

// Setup scroll tracking
let scrollDepthTracked = {
  25: false,
  50: false,
  75: false,
  100: false,
};

export const setupScrollTracking = (): (() => void) => {
  let timeout: NodeJS.Timeout;

  const handleScroll = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Track scroll depth milestones
      if (scrollPercentage >= 25 && !scrollDepthTracked[25]) {
        scrollDepthTracked[25] = true;
        trackScrollDepth(25);
      } else if (scrollPercentage >= 50 && !scrollDepthTracked[50]) {
        scrollDepthTracked[50] = true;
        trackScrollDepth(50);
      } else if (scrollPercentage >= 75 && !scrollDepthTracked[75]) {
        scrollDepthTracked[75] = true;
        trackScrollDepth(75);
      } else if (scrollPercentage >= 100 && !scrollDepthTracked[100]) {
        scrollDepthTracked[100] = true;
        trackScrollDepth(100);
      }
    }, 100);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Reset scroll tracking on navigation
  return () => {
    window.removeEventListener('scroll', handleScroll);
    scrollDepthTracked = {
      25: false,
      50: false,
      75: false,
      100: false,
    };
  };
};

// E-commerce tracking (for future payment integration)
export const trackPurchase = ({
  transactionId,
  value,
  currency = 'USD',
  items,
}: {
  transactionId: string;
  value: number;
  currency?: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}): void => {
  if (!GA_TRACKING_ID || !window.gtag) return;

  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: items,
  });
};
