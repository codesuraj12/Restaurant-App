Restaurant App
Overview

This is a full-stack Restaurant Web Application built using React for the frontend and Node.js with Express for the backend. The application allows users to explore menu items, register/login, and place orders, while the admin can manage food items through a protected dashboard.

Tech Stack
Frontend
React
Axios
Framer Motion
Backend
Node.js
Express.js
MongoDB
Mongoose

Authentication
JWT (JSON Web Token)
bcryptjs


Features
User
View homepage with sections (Hero, Menu, Story, Reviews, Contact)
Browse food items
Register and login
Place orders
Admin
Separate admin login
Add food items
Manage food (view/delete/update)
Access protected dashboard

### Frontend

src
├─ components
├─ pages
│   ├─ user
│   │   ├─ Home.jsx
│   │   ├─ Menu.jsx
│   │   ├─ Card.jsx
│   │   ├─ Login.jsx
│   │   └─ Register.jsx
│   │
│   └─ admin
│       ├─ AdminLogin.jsx
│       ├─ Dashboard.jsx
│       ├─ AddFood.jsx
│       └─ ManageFood.jsx
│
├─ Skeleton.jsx
├─ App.jsx
└─ main.jsx

### Backend

backend
├─ config
│ └─ db.js
├─ models
│ ├─ User.js
│ ├─ Food.js
│ └─ Order.js
├─ controllers
│ ├─ authController.js
│ ├─ foodController.js
│ └─ orderController.js
├─ routes
│ ├─ authRoutes.js
│ ├─ foodRoutes.js
│ └─ orderRoutes.js
├─ middleware
│ ├─ authMiddleware.js
│ └─ adminMiddleware.js
├─ services
│ └─ email.service.js
└─ server.js

## Working
1. Backend Setup

cd backend
npm install

Create a .env file and add:

PORT=5000
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret

CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
REFRESH_TOKEN=your_refresh_token
EMAIL_USER=your_email

Run server:
npm start

2. Frontend Setup

cd frontend
npm install

Run frontend:
npm run dev

API Endpoints
Auth Routes

POST /api/auth/register
POST /api/auth/login

Food Routes

GET /api/food
POST /api/food/add (Admin only)
DELETE /api/food/ (Admin only)

Order Routes

POST /api/order

## Authentication Flow

User registers and data is stored in MongoDB
On login, credentials are verified
JWT token is generated and stored
Protected routes require token verification
Admin routes require role check

## Admin Access
Admin panel is not visible to normal users
Only accessible through admin login
Role-based authorization is implemented

## Email Integration
Nodemailer is used to send emails on registration
OAuth 2.0 is used for Gmail authentication
Future Improvements
Payment integration
Order tracking system
Image upload for food items
Deployment (Frontend + Backend)