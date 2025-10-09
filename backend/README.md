# Gen18X Backend API

Backend server for handling contact form submissions and email delivery.

## Features

- RESTful API for contact form submissions
- Email delivery via Nodemailer (Gmail)
- Request validation with Zod
- CORS support for frontend integration
- Rate limiting to prevent abuse
- Security headers with Helmet
- Health check endpoint

## Tech Stack

- Node.js + Express
- Nodemailer for email delivery
- Zod for validation
- CORS & Helmet for security
- Express Rate Limit for protection

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=info@gen18x.com

# CORS - Allowed frontend domains
ALLOWED_ORIGINS=http://localhost:3000,https://gen18x.com,https://www.gen18x.com
```

### 3. Gmail Setup

To use Gmail for sending emails:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this as `EMAIL_PASS` in your `.env`

### 4. Run Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3001`

## API Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "OK",
  "message": "Gen18X Backend API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Send Email
```
POST /api/email/send
```

Request Body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1234567890",
  "subject": "Business Inquiry",
  "message": "I would like to discuss..."
}
```

Success Response (200):
```json
{
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "<message-id>"
}
```

Error Response (400/500):
```json
{
  "success": false,
  "error": "Error message",
  "details": []
}
```

## Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd backend
vercel
```

4. Set environment variables in Vercel dashboard:
   - Go to your project settings
   - Add all variables from `.env.example`

5. Your API will be live at: `https://your-project.vercel.app`

### Option 2: Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login:
```bash
railway login
```

3. Initialize and deploy:
```bash
cd backend
railway init
railway up
```

4. Add environment variables:
```bash
railway variables set EMAIL_USER=your-email@gmail.com
railway variables set EMAIL_PASS=your-app-password
# ... add all other variables
```

### Option 3: Render

1. Create account at https://render.com
2. Click "New +" → "Web Service"
3. Connect your Git repository
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables in dashboard

### Option 4: DigitalOcean App Platform

1. Create account at https://digitalocean.com
2. Go to "Apps" → "Create App"
3. Connect your repository
4. Select the `backend` folder
5. Configure environment variables
6. Deploy

### Option 5: Traditional VPS (DigitalOcean, Linode, etc.)

1. Create a VPS with Ubuntu
2. SSH into server
3. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. Clone your repository:
```bash
git clone your-repo-url
cd backend
```

5. Install dependencies:
```bash
npm install
```

6. Install PM2 for process management:
```bash
sudo npm install -g pm2
pm2 start server.js --name gen18x-api
pm2 startup
pm2 save
```

7. Set up Nginx as reverse proxy:
```bash
sudo apt install nginx
```

Create Nginx config at `/etc/nginx/sites-available/api`:
```nginx
server {
    listen 80;
    server_name api.gen18x.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

9. Set up SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d api.gen18x.com
```

## Update Frontend

After deploying, update your frontend to use the new API URL:

In your frontend code (e.g., `app/contact/page.tsx`):

```typescript
const response = await fetch('https://your-backend-url.com/api/email/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## Security Considerations

- Rate limiting: 10 requests per 15 minutes per IP
- CORS: Only allows requests from configured origins
- Input validation with Zod
- Security headers via Helmet
- Environment variables for sensitive data
- No hardcoded credentials

## Monitoring

Check server health:
```bash
curl https://your-backend-url.com/health
```

## Troubleshooting

### Email not sending
- Verify Gmail credentials
- Check if 2FA is enabled
- Ensure App Password is correct
- Check console logs for errors

### CORS errors
- Add your frontend domain to `ALLOWED_ORIGINS`
- Ensure no trailing slashes in origins
- Check browser console for specific error

### Rate limit exceeded
- Wait 15 minutes
- Adjust limits in `server.js` if needed

## Support

For issues, contact: info@gen18x.com

