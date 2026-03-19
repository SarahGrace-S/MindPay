# MindPay Deployment Guide

## 1. Deploying the Backend (Render)
1. Push your code to a GitHub repository.
2. Sign in to [Render](https://render.com/).
3. Create a new **Web Service**.
4. Connect your GitHub repository and select the `backend/` directory as the Root Directory.
5. Set the following environment variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: A secure random string.
   - `PORT`: Define the port (Render provides its own).
   - `NODE_ENV`: `production`
6. Set the Build Command to `npm install` and the Start Command to `npm start`.
7. Deploy. Save the backend URL (e.g., `https://mindpay-api.onrender.com`).

## 2. Deploying the Frontend (Vercel)
1. Sign in to [Vercel](https://vercel.com).
2. Click **Add New Project** and select your GitHub repository.
3. Set the **Framework Preset** to Next.js.
4. Set the Root Directory to `frontend/`.
5. Under Environment Variables, add:
   - `NEXT_PUBLIC_API_URL`: Your Render backend URL (e.g., `https://mindpay-api.onrender.com/api`).
6. Click **Deploy**.

Once both deployments are successful, your full-stack MindPay application is live and production-ready!
