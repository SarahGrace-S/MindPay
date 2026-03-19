# MindPay System Architecture

## Overview
MindPay consists of two primary applications communicating over a RESTful API:
1. **Frontend**: A Next.js (React) application styled with Tailwind CSS, running on port 3000.
2. **Backend**: A Node.js application using Express and MongoDB (via Mongoose), running on port 5000.

## Folder Structure

```
MindPay/
├── frontend/
│   ├── app/                # Next.js App Router (pages & layouts)
│   ├── components/         # Reusable UI components (Dashboard, Modal, UI elements)
│   ├── lib/                # API helpers, context providers, Zustand stores
│   ├── public/             # Static assets
│   ├── tailwind.config.ts  # Tailwind CSS configuration
│   └── package.json
│
├── backend/
│   ├── config/             # DB connection setup
│   ├── controllers/        # Request handlers (logic)
│   ├── middleware/         # Auth verification, error handlers
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API dimension grouping
│   ├── server.js           # Server entry point
│   ├── .env                # Environment variables
│   └── package.json
│
└── docs/                   # Documentation files
```

## Data Flow
1. User logs in/registers from the Frontend (`/login`).
2. Frontend sends POST request to `/api/auth/login`. Backend verifies and returns a JWT.
3. User visits `/budget` to set thresholds.
4. User visits `/payment` and enters an amount & category to simulate a checkout.
5. MindPay intercepts. User clicks a category (Essential, Non-Essential, Emergency).
6. Frontend calls `/api/decision/check`.
7. Backend evaluates context (user savings, budget limits) using MongoDB records and returns `proceed: true/false` and an alert message if applicable.
8. If the payment proceeds, a transaction is logged to the DB via `/api/transactions`.
