# Listenerzone Backend

Listenerzone is a platform where users (seekers) can book voice sessions with listeners for emotional support. This is a listener support platform, not a medical service.

## Tech Stack

- **Backend:** NestJS (Node.js, TypeScript)
- **Database:** PostgreSQL (TypeORM)
- **Realtime:** Socket.io (Signaling) & LiveKit (Media Server)
- **Cache:** Redis
- **Infra:** Docker

## Features

- **Authentication:** JWT based auth with Seeker, Listener, and Admin roles.
- **Listener Registration:** Apply to become a listener, admin approval flow.
- **Booking System:** Book sessions (15, 30, 60 mins) with chosen listeners and topics.
- **Voice Call System:** WebRTC powered by LiveKit and Socket.io signaling.
- **Session Timer:** Automatic session termination and events when duration is reached.
- **Rating System:** Post-call feedback and rating for listeners.

## API Documentation
The API documentation is automatically generated using Swagger (OpenAPI).

**URL**: `http://localhost:3000/api/docs`

### Auth
- `POST /api/auth/signup`: User registration
- `POST /api/auth/login`: User login

### Listeners
- `POST /api/listeners/apply`: Apply to be a listener (Seeker role)
- `GET /api/listeners`: Get approved listeners
- `GET /api/listeners/:id`: Get listener details
- `PATCH /api/listeners/:id/approve`: Approve listener (Admin only)

### Bookings
- `POST /api/bookings`: Create a booking
- `GET /api/bookings`: List user bookings
- `GET /api/bookings/:id`: Get booking details

### Sessions
- `POST /api/sessions/start`: Start a session and get LiveKit token
- `POST /api/sessions/end`: Manually end a session

### Ratings
- `POST /api/ratings`: Rate a listener after session

## Realtime Events (Socket.io)

Rooms are identified by `sessionId`.

- `call:join`: Join a session room
- `call:leave`: Leave a session room
- `call:start`: Notify call start
- `call:end`: Notify call end
- `call:user-joined`: Received when another user joins
- `timer:update`: Periodic timer updates (seconds remaining)
- `timer:end`: Emitted when session time is up

## Setup & Running

### Prerequisites
- Docker & Docker Compose

### Fast Run (Docker)
```bash
docker-compose up --build
```

### Local Development
1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
2. **Setup Database**:
   If using local PostgreSQL, manually create the database:
   ```bash
   # Run in psql or using command line
   CREATE DATABASE listenerzone;
   ```
3. **Start Redis & LiveKit**:
   Ensure Redis is running. For LiveKit, use:
   ```bash
   docker run --rm -p 7880:7880 -p 7881:7881 -p 7882:7882/udp \
       -e LIVEKIT_KEYS="devkey: secret" \
       livekit/livekit-server --dev
   ```
4. **Run Application**:
   ```bash
   npm run start:dev
   ```

## 🧪 Local Testing Guide

### 1. Signup as a Seeker
```bash
curl -X POST http://localhost:3000/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"email":"seeker@test.com", "password":"password123", "name":"John Doe", "phone":"1234567890"}'
```

### 2. Login & Get JWT Token
```bash
curl -X POST http://localhost:3000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"seeker@test.com", "password":"password123"}'
```
*Tip: Save the `access_token` from the response.*

### 3. Apply to be a Listener
```bash
curl -X POST http://localhost:3000/api/listeners/apply \
     -H "Authorization: Bearer <YOUR_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{"bio":"Experience in listening support", "experience":"2 years", "languages":["English", "Hindi"]}'
```

### 4. Create a Booking
```bash
curl -X POST http://localhost:3000/api/bookings \
     -H "Authorization: Bearer <YOUR_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{"listenerId":"<LISTENER_ID>", "topic":"General Support", "scheduled_time":"2026-03-20T10:00:00Z", "duration": 15}'
```

### 5. Start Session & Get Voice Token
```bash
curl -X POST http://localhost:3000/api/sessions/start \
     -H "Authorization: Bearer <YOUR_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{"bookingId":"<BOOKING_ID>"}'
```

## LiveKit Note
For local testing, you can run LiveKit using Docker:
```bash
docker run --rm -p 7880:7880 -p 7881:7881 -p 7882:7882/udp \
    -e LIVEKIT_KEYS="devkey: secret" \
    livekit/livekit-server --dev
```
Update `LIVEKIT_URL` in `.env` if needed.
