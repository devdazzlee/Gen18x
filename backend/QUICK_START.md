# Backend Quick Start Guide

## 1. Install Dependencies

```bash
cd backend
npm install
```

## 2. Setup Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=3001
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=info@gen18x.com
ALLOWED_ORIGINS=http://localhost:3000,https://gen18x.com
```

## 3. Get Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2FA if not already enabled
3. Create app password for "Mail"
4. Copy the 16-character password
5. Use it as `EMAIL_PASS` in `.env`

## 4. Run Development Server

```bash
npm run dev
```

Server will start at: http://localhost:3001

## 5. Test the API

### Health Check
```bash
curl http://localhost:3001/health
```

### Send Test Email
```bash
curl -X POST http://localhost:3001/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "company": "Test Company",
    "phone": "1234567890",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

## 6. Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Then add environment variables in Vercel dashboard.

## API Endpoints

- `GET /health` - Health check
- `POST /api/email/send` - Send contact form email

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 3001 |
| NODE_ENV | Environment | development/production |
| EMAIL_USER | Gmail address | your-email@gmail.com |
| EMAIL_PASS | Gmail app password | 16-char password |
| EMAIL_TO | Recipient email | info@gen18x.com |
| ALLOWED_ORIGINS | CORS origins | https://gen18x.com |

## Troubleshooting

**Email not sending?**
- Check Gmail credentials
- Verify 2FA is enabled
- Use App Password, not regular password

**CORS error?**
- Add your domain to ALLOWED_ORIGINS
- Include both http:// and https://

**Port already in use?**
- Change PORT in .env
- Or kill process: `lsof -ti:3001 | xargs kill`

