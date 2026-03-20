# ListenerZone Deployment & Testing Guide

This guide provides step-by-step instructions for deploying the **ListenerZone** platform to a production environment and performing comprehensive end-to-end testing.

## 1. Environment Configuration

### Backend (`listenerzone backend/.env`)
Set these variables for your production server:
```env
PORT=3001
DATABASE_HOST=your-production-db-host
DATABASE_PORT=5432
DATABASE_USER=your-db-user
DATABASE_PASSWORD=your-db-password
DATABASE_NAME=listenerzone

JWT_SECRET=use-a-long-random-string
JWT_EXPIRES_IN=7d

# LiveKit Master Connection
LIVEKIT_URL=wss://livekit.yourdomain.com
LIVEKIT_API_KEY=your-api-key
LIVEKIT_API_SECRET=your-api-secret

# Redis for Socket.io/Caching
REDIS_HOST=your-redis-host
REDIS_PORT=6379
```

### Frontend (`listnerzone/.env.local`)
Build-time variables for your production frontend:
```env
NEXT_PUBLIC_BASE_URL=https://listnerzone.com
NEXT_PUBLIC_API_URL=https://api.listnerzone.com/api
NEXT_PUBLIC_SOCKET_URL=https://api.listnerzone.com
NEXT_PUBLIC_LIVEKIT_URL=wss://livekit.listnerzone.com

# Payment/Services (Production Keys)
NEXT_PUBLIC_CASHFREE_MODE=PRODUCTION
CASHFREE_APP_ID=your-prod-app-id
CASHFREE_SECRET_KEY=your-prod-secret-key
```

---

## 2. Deployment Steps

### Backend Deployment (NestJS)
1. **Dockerized Production Build**:
   Use the `production` stage in the provided `Dockerfile` to build a lightweight, optimized image.
   ```bash
   docker build --target production -t listenerzone-backend .
   ```
2. **Reverse Proxy & SSL (Nginx)**:
   - Configure Nginx to forward requests to port `3001`.
   - **Crucial**: Ensure `Upgrade` and `Connection` headers are configured for WebSockets.
   - Install **Certbot** for SSL (`https://` and `wss://`).
3. **LiveKit Server**:
   - Host your own LiveKit instance or use [LiveKit Cloud](https://livekit.io/).
   - LiveKit **requires** a valid SSL certificate for clients to connect.

### Frontend Deployment (Next.js)
1. **Vercel (Recommended)**:
   - Connect your repository to Vercel.
   - Add all `NEXT_PUBLIC_` environment variables in the Vercel dashboard.
2. **Static/Manual Deployment**:
   - Run `npm run build` to generate the production bundle.
   - Use `pm2 start npm --name "frontend" -- start` if hosting on a VPS.

---

## 3. End-to-End (E2E) Testing Guide

Perform these steps to verify the recent bug fixes (Timer, Notifications, UI):

### Test Case 1: The Seeker's Journey
1. Log in as a **Seeker** on Device A.
2. Select a Listener and click **Talk Now**.
3. **Verify UI**: The "Important Disclaimer" should appear. The bottom navigation bar must be hidden.
4. Click **Start Call**. 
5. **Verify Timer**: The countdown should immediately start from the initial duration (e.g., `30:00` -> `29:59`).

### Test Case 2: Inbound Call Notification
1. Ensure the **Listener** is logged in on Device B.
2. When the Seeker enters the room, the Listener should receive a popup notification.
3. **Verify Notification**: Confirm only **one** notification appears, and it correctly identifies the Seeker (e.g., "Karan is calling").
4. **No Double-Notify**: Confirm the Listener does *not* see a notification for themselves ("Rahul is calling") after clicking Accept.

### Test Case 3: Call Room Experience
1. **Disclaimer Skip**: Confirm the Listener enters the `CallRoom` directly without seeing the disclaimer.
2. **Audio Check**: Confirm both participants can hear each other.
3. **Timer Sync**: Watch both screens. When the session starts on the server, the timers on both devices should synchronize perfectly.

### Test Case 4: Graceful Disconnect
1. One participant clicks the **End Call** button.
2. **Verify**: Both participants should be redirected to the Home page.
3. Check the database to ensure the session status is updated to `COMPLETED`.

---

## 4. Troubleshooting
- **Timer Stays Static**: Check if the backend Cron Job is running. Look for `TimerService` logs in the backend.
- **Notification Not Appearing**: Ensure the Listener's socket is registered correctly in the `SignalingGateway`.
- **LiveKit Error**: Verify that the frontend `NEXT_PUBLIC_LIVEKIT_URL` starts with `wss://` and that the SSL certificate is valid.
