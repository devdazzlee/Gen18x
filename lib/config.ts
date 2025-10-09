// API Configuration
export const API_CONFIG = {
  // Backend API URL - change this to your deployed backend URL
  BACKEND_URL: 'https://gen18x-22qe.vercel.app',
  
  // API Endpoints
  ENDPOINTS: {
    SEND_EMAIL: '/api/email/send',
  }
}

// Get full API endpoint URL
export function getApiUrl(endpoint: string): string {
  return `${API_CONFIG.BACKEND_URL}${endpoint}`
}

