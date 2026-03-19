# MindPay Local Setup Guide

## Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or MongoDB Atlas connection string)

## 1. Backend Setup
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/mindpay
   JWT_SECRET=your_super_secret_jwt_key
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   *The server should now be running on `http://localhost:5000`.*

## 2. Frontend Setup
1. Open a terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the `frontend/` directory (optional if you proxy requests):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   *The Next.js app should now be running on `http://localhost:3000`.*
