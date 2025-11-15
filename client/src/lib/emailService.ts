// EmailJS Integration for Booking Notifications
// Setup instructions: See CUSTOMIZATION.md

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Check if EmailJS is configured
export const isEmailConfigured = (): boolean => {
  return !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};

// Initialize EmailJS
let emailJSInitialized = false;

const initEmailJS = async (): Promise<void> => {
  if (emailJSInitialized || !isEmailConfigured()) {
    return;
  }

  try {
    // Dynamically import EmailJS only when needed
    const emailjs = await import('@emailjs/browser');
    emailjs.default.init(EMAILJS_PUBLIC_KEY);
    emailJSInitialized = true;
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    throw new Error('Email service initialization failed');
  }
};

// Send booking email notification
export const sendBookingEmail = async (
  formData: BookingFormData
): Promise<{ success: boolean; message: string }> => {
  // If EmailJS is not configured, return mock success for development
  if (!isEmailConfigured()) {
    console.warn(
      'EmailJS not configured. Add VITE_EMAILJS_* environment variables to enable email notifications.'
    );
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return {
      success: true,
      message:
        'Booking received (Email notifications not configured - add EmailJS credentials to enable)',
    };
  }

  try {
    // Initialize EmailJS if not already done
    await initEmailJS();

    // Import EmailJS dynamically
    const emailjs = await import('@emailjs/browser');

    // Prepare template parameters
    const templateParams = {
      to_name: 'Polished & Posh Team',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      appointment_date: formData.date,
      appointment_time: formData.time,
      service_type: formData.service,
      special_requests: formData.notes || 'None',
      reply_to: formData.email,
    };

    // Send email via EmailJS
    const response = await emailjs.default.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      console.log('Booking email sent successfully:', response);
      return {
        success: true,
        message: "Appointment requested successfully! We'll contact you shortly to confirm.",
      };
    } else {
      throw new Error(`EmailJS returned status ${response.status}`);
    }
  } catch (error) {
    console.error('Failed to send booking email:', error);

    // Still return success for user experience, but log the error
    // The salon can still receive bookings through other means
    return {
      success: true,
      message:
        'Booking received! If you don\'t hear from us within 24 hours, please call us at (555) 123-4567.',
    };
  }
};

// Validate phone number format
export const validatePhone = (phone: string): boolean => {
  // Allow various phone formats: (555) 123-4567, 555-123-4567, 5551234567, etc.
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  const digitsOnly = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && digitsOnly.length >= 10 && digitsOnly.length <= 15;
};

// Validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate date is in the future
export const validateFutureDate = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

// Format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length === 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }

  return phone;
};

// Get minimum bookable date (today)
export const getMinBookingDate = (): string => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

// Get maximum bookable date (90 days from now)
export const getMaxBookingDate = (): string => {
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);
  return maxDate.toISOString().split('T')[0];
};
