# Gen18X Deployment Guide

Complete guide to deploy your Gen18X website with separate frontend (static) and backend (Node.js API).

## Architecture Overview

- **Frontend**: Next.js static export (HTML/CSS/JS) → Hostinger
- **Backend**: Node.js/Express API → Vercel/Railway/Render
- **Communication**: Frontend calls backend API via HTTPS

---

## Step 1: Deploy Backend API

### Option A: Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to backend folder**
   ```bash
   cd backend
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel --prod
   ```

5. **Add Environment Variables**
   
   After deployment, go to your Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add the following:

   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_TO=info@gen18x.com
   ALLOWED_ORIGINS=https://gen18x.com,https://www.gen18x.com
   NODE_ENV=production
   ```

6. **Get your Backend URL**
   
   After deployment, you'll get a URL like:
   ```
   https://gen18x-backend.vercel.app
   ```
   
   **Save this URL - you'll need it for the frontend!**

### Option B: Deploy to Railway

1. **Create Railway account**: https://railway.app
2. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

3. **Login and deploy**
   ```bash
   cd backend
   railway login
   railway init
   railway up
   ```

4. **Add environment variables**
   ```bash
   railway variables set EMAIL_USER=your-email@gmail.com
   railway variables set EMAIL_PASS=your-app-password
   railway variables set EMAIL_TO=info@gen18x.com
   railway variables set ALLOWED_ORIGINS=https://gen18x.com,https://www.gen18x.com
   railway variables set NODE_ENV=production
   ```

5. **Get your backend URL** from Railway dashboard

### Option C: Deploy to Render

1. **Create account**: https://render.com
2. **Create New Web Service**
3. **Connect your Git repository**
4. **Configure**:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Add environment variables** in Render dashboard
6. **Get your backend URL** from Render

---

## Step 2: Configure Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Enable **2-Factor Authentication** if not already enabled
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Select **Mail** and your device
5. Copy the 16-character password
6. Use this as `EMAIL_PASS` in your backend environment variables

---

## Step 3: Update Frontend Configuration

1. **Create `.env.local` file** in the root directory:

   ```env
   # Replace with your actual backend URL from Step 1
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.vercel.app
   ```

   **Important**: Replace `https://your-backend-url.vercel.app` with your actual backend URL!

2. **Verify the configuration**:
   
   Check that `lib/config.ts` is properly reading this environment variable.

---

## Step 4: Build Frontend for Production

1. **Update your `next.config.mjs`** to keep static export:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     eslint: {
       ignoreDuringBuilds: true,
     },
     typescript: {
       ignoreBuildErrors: true,
     },
     images: {
       unoptimized: true,
     },
   }

   export default nextConfig
   ```

2. **Build the project**:

   ```bash
   npm run build
   ```

   This creates an `out` folder with static files.

3. **Test locally** (optional):

   ```bash
   npx serve out
   ```

---

## Step 5: Deploy Frontend to Hostinger

### Via FTP/File Manager

1. **Login to Hostinger control panel**
2. **Go to File Manager** or use FTP client (FileZilla)
3. **Navigate to public_html** (or your domain's root directory)
4. **Delete old files** (if any)
5. **Upload contents of `out` folder**:
   - Upload ALL files from the `out` directory
   - Ensure folder structure is maintained
   - Upload `images` and `_next` folders

6. **Verify upload**:
   - Check that `index.html` is in the root
   - Check that `_next` folder exists with chunks
   - Check that images are uploaded

### Via Git (if available)

1. **Push your repository** to GitHub/GitLab
2. **Connect Hostinger to Git**:
   - Go to Git in Hostinger control panel
   - Connect your repository
   - Set branch to `main`
   - Set build command: `npm run build`
   - Set output directory: `out`

---

## Step 6: Configure Hostinger Settings

### Set Environment Variables on Hostinger

If Hostinger supports environment variables:

1. Go to **Advanced → Environment Variables**
2. Add:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.vercel.app
   ```

### If Environment Variables Not Supported

Update `lib/config.ts` directly with your backend URL:

```typescript
export const API_CONFIG = {
  BACKEND_URL: 'https://your-backend-url.vercel.app', // Replace with your actual URL
  ENDPOINTS: {
    SEND_EMAIL: '/api/email/send',
  }
}
```

Then rebuild and reupload:
```bash
npm run build
# Upload new files to Hostinger
```

---

## Step 7: Test Your Deployment

### Test Backend

1. **Health Check**:
   ```bash
   curl https://your-backend-url.vercel.app/health
   ```

   Should return:
   ```json
   {
     "status": "OK",
     "message": "Gen18X Backend API is running",
     "timestamp": "..."
   }
   ```

2. **Test Email API** (using curl):
   ```bash
   curl -X POST https://your-backend-url.vercel.app/api/email/send \
     -H "Content-Type: application/json" \
     -d '{
       "firstName": "Test",
       "lastName": "User",
       "email": "test@example.com",
       "company": "Test Company",
       "phone": "1234567890",
       "subject": "Test Message",
       "message": "This is a test message"
     }'
   ```

### Test Frontend

1. **Visit your website**: https://gen18x.com
2. **Go to Contact page**: https://gen18x.com/contact
3. **Fill out the form** and submit
4. **Check for**:
   - Success message appears
   - Email is received at info@gen18x.com
   - No CORS errors in browser console (F12)

---

## Troubleshooting

### CORS Errors

**Error**: "Access to fetch has been blocked by CORS policy"

**Solution**:
1. Add your domain to `ALLOWED_ORIGINS` in backend environment variables:
   ```
   ALLOWED_ORIGINS=https://gen18x.com,https://www.gen18x.com,http://gen18x.com
   ```
2. Redeploy backend:
   ```bash
   cd backend
   vercel --prod
   ```

### 404 Not Found on Backend

**Error**: Backend API returns 404

**Solution**:
1. Check backend URL is correct
2. Verify backend is deployed and running:
   ```bash
   curl https://your-backend-url.vercel.app/health
   ```
3. Check endpoint path: `/api/email/send`

### Email Not Sending

**Error**: Email fails to send

**Solution**:
1. Verify Gmail credentials in backend environment variables
2. Check Gmail App Password is correct (16 characters, no spaces)
3. Ensure 2FA is enabled on Gmail account
4. Check backend logs in Vercel/Railway dashboard

### Frontend Shows Old Backend URL

**Error**: Frontend still calling old API route

**Solution**:
1. Clear browser cache (Ctrl+F5)
2. Verify `.env.local` has correct `NEXT_PUBLIC_BACKEND_URL`
3. Rebuild frontend:
   ```bash
   npm run build
   ```
4. Reupload `out` folder to Hostinger

### Rate Limit Exceeded

**Error**: "Too many requests"

**Solution**:
- Wait 15 minutes
- Current limit: 10 requests per 15 minutes per IP
- Adjust in `backend/server.js` if needed

---

## Environment Variables Summary

### Backend (.env)
```env
PORT=3001
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=info@gen18x.com
ALLOWED_ORIGINS=https://gen18x.com,https://www.gen18x.com
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.vercel.app
```

---

## Maintenance

### Update Backend
```bash
cd backend
git pull
vercel --prod
```

### Update Frontend
```bash
git pull
npm run build
# Upload out folder to Hostinger
```

### Monitor Backend
- **Vercel**: https://vercel.com/dashboard
- **Railway**: https://railway.app/dashboard
- **Render**: https://dashboard.render.com

---

## Security Checklist

- ✅ Email credentials stored in environment variables (not in code)
- ✅ CORS configured to only allow your domain
- ✅ Rate limiting enabled (10 requests per 15 minutes)
- ✅ Input validation with Zod
- ✅ Security headers via Helmet
- ✅ HTTPS enabled on both frontend and backend

---

## Support

For issues or questions:
- Check backend logs in your hosting dashboard
- Check browser console (F12) for frontend errors
- Email: info@gen18x.com

---

## Quick Reference

**Backend API Endpoints**:
- Health Check: `GET /health`
- Send Email: `POST /api/email/send`

**Deployment Services**:
- Backend: Vercel (https://vercel.com)
- Frontend: Hostinger (https://hostinger.com)

**Repository Structure**:
```
Gen18x/
├── app/                 # Frontend Next.js app
├── backend/            # Backend Express API
├── components/         # React components
├── lib/               # Utilities & config
├── public/            # Static assets
└── out/               # Built static site (for Hostinger)
```

