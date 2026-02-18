# ListnerZone Pricing & Payment Integration Guide

This document outlines the implementation details for the Pricing section, including Razorpay and EmailJS integrations.

## 1. Prerequisites

Before deploying, ensure you have the following keys from your respective accounts:

### Razorpay
1. Sign up at [Razorpay](https://razorpay.com/).
2. Go to **Settings > API Keys**.
3. Generate **Test Keys**.
4. Add `NEXT_PUBLIC_RAZORPAY_KEY_ID` to your environment variables.

### EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Add a **Email Service** (e.g., Gmail).
3. Create an **Email Template** with the following placeholders:
   - `{{to_email}}`
   - `{{user_email}}`
   - `{{plan_name}}`
   - `{{amount}}`
   - `{{payment_id}}`
   - `{{duration}}`
   - `{{scheduled_time}}`
4. Get your **Service ID**, **Template ID**, and **Public Key**.
5. Add them to your environment variables.

## 2. Environment Variables (.env.local)

```text
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXX
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_XXXXXXXX
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_XXXXXXXX
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_XXXXXXXX
```

## 3. How It Works

### Predefined Plans
- Users select a plan (5, 10, or 15 mins).
- `handlePayment` is called with hardcoded amounts (₹19, ₹39, ₹69).
- Razorpay Checkout modal opens.
- On success, `handleSuccess` triggers EmailJS to send a confirmation.

### Custom Sessions
- Users click "Request Quote".
- A modal opens to collect Email, Date, Time, and Duration (30/45 mins).
- Price is calculated dynamically (30m -> ₹129, 45m -> ₹179).
- After clicking "Next Step", the payment flow starts with the custom amount.
- Email confirmation includes the scheduled date/time.

## 4. Security Notes (Frontend-Only Integration)

**⚠️ IMPORTANT LIMITATIONS:**
The current implementation is a "Frontend-Only" integration as requested for a static MVP. Please be aware of the following:

1. **No Backend Verification**: Since there is no backend, we cannot perform "Signature Verification". This means a technically skilled user could potentially spoof a successful payment callback.
2. **Key Exposure**: The Razorpay Key ID is public (as required by the frontend SDK). This is normal, but the Secret Key should **NEVER** be on the frontend.
3. **Data Integrity**: Successful payment data is sent to EmailJS directly from the client.
4. **Recommendation**: For a full-scale production launch, move the Razorpay "Order Creation" and "Payment Verification" to a Next.js API route or dedicated backend.

## 5. Deployment Checklist
- [ ] Replace `rzp_test_...` with your actual Razorpay Test/Live Key.
- [ ] Configure EmailJS templates exactly as mentioned.
- [ ] Test the flow end-to-end in "Test Mode" before switching to "Live Mode" on Razorpay.

## 6. Email Flow (Admin + Customer)

To set up the automatic dual-email flow:

### Step A: Admin Template (Main Design)
1. **Subject**: `NEW BOOKING: {{plan_name}} | ₹{{amount}}`
2. **Reply-To**: `{{user_email}}`
3. **To Email**: Your business email.

### Step B: Customer Auto-Reply (Auto-reply Tab)
1. **Enable Auto-reply**: ON
2. **Subject**: `Booking Confirmed: {{plan_name}}`
3. **To Email**: `{{user_email}}`

This configuration ensures the company is alerted immediately, and the customer receives an instant professional receipt without needing a second API call.
