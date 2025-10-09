# Email Contact Form Setup - Gen18X

## Overview
Complete email contact form system with nodemailer, zod validation, loading states, and toast notifications.

## Features Implemented

### ✅ Nodemailer Integration
- Configured Gmail SMTP service
- Sends emails to: **info@gen18x.com**
- Professional HTML email template with company branding
- Fallback plain text email

### ✅ Zod Validation
- Client-side and server-side validation
- Validates all form fields:
  - First Name (min 2 characters)
  - Last Name (min 2 characters)  
  - Email (valid email format)
  - Company (min 2 characters)
  - Phone (min 10 characters)
  - Subject (min 5 characters)
  - Message (min 10 characters)

### ✅ Loading States
- Button shows loading spinner while sending
- Button text changes to "Sending..." with animated loader icon
- All form fields disabled during submission
- Button disabled to prevent duplicate submissions

### ✅ Toast Notifications
- Success toast when email sent successfully
- Error toast with helpful messages for validation errors
- Error toast for API/network failures
- Positioned at top-right of screen
- Rich colors for better UX

### ✅ Button Hover Fix
- Fixed button text visibility on hover
- Text remains white and visible when button turns blue
- Smooth transition effects
- Applied to all contact buttons (Call Now, Email Us, Send Message)

## Files Created/Modified

### New Files:
1. **app/api/send-email/route.ts** - Next.js API route for sending emails
2. **EMAIL_SETUP_README.md** - This documentation file

### Modified Files:
1. **app/contact/page.tsx** - Added form state, validation, handlers, loading states
2. **app/layout.tsx** - Added Toaster component for notifications

## Email Configuration

### Current Settings (Hardcoded):
```javascript
{
  user: 'ahmedrazagithub@gmail.com',
  pass: 'qcej fapb rjem dxxa'
}
```

### To Use Environment Variables (Recommended):
Create `.env.local` file in project root:
```env
EMAIL_USER=ahmedrazagithub@gmail.com
EMAIL_PASS=qcej fapb rjem dxxa
```

## How It Works

### 1. User Fills Form
- User enters contact information
- Real-time validation clears errors as they type
- Required fields marked with asterisk (*)

### 2. Form Submission
- Click "Send Message" button
- Button shows loading state with spinner
- Form data validated with Zod schema

### 3. Email Sent
- API route receives validated data
- Nodemailer sends formatted email to info@gen18x.com
- Email includes all contact details in professional HTML format

### 4. Success/Error Feedback
- Success: Toast notification + form reset
- Error: Toast with specific error message + form fields highlighted

## Email Template Features

The email sent to info@gen18x.com includes:
- Professional HTML formatting with Gen18X branding
- Contact information in organized table
- Subject line with inquiry topic
- Full message content
- Clickable email and phone links
- Company footer with copyright

## Testing the Form

1. Navigate to `/contact` page
2. Fill out all required fields
3. Click "Send Message"
4. Watch for:
   - Loading spinner on button
   - Toast notification (success/error)
   - Form reset on success
   - Error highlights on validation failure

## Support Options

Three clickable support cards with functional links:
1. **24/7 Support** - Opens phone dialer: +971 56 556 2134
2. **Schedule Consultation** - Opens email client with subject pre-filled
3. **Live Chat** - Opens email client for inquiries

## Technologies Used

- **Next.js 14** - App Router with API Routes
- **Nodemailer** - Email sending
- **Zod** - Schema validation
- **Sonner** - Toast notifications
- **Framer Motion** - Animations
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Security Notes

- Email credentials should be moved to environment variables for production
- Use Gmail App Passwords (not regular password) for better security
- API route validates all data before sending
- Rate limiting recommended for production

## Future Enhancements

- Add reCAPTCHA to prevent spam
- Implement rate limiting on API route
- Add email templates for different inquiry types
- Store submissions in database for backup
- Add auto-reply to user's email
- Email delivery tracking/status

## Support

For issues or questions about the email system:
- Check browser console for errors
- Verify email credentials are correct
- Ensure Gmail allows "Less secure app access" or use App Password
- Check spam folder for test emails

