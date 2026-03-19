# MindPay

Simple full-stack Node.js + Express + MongoDB app that advises on payments.

## Setup

1. Copy `.env.example` to `.env` and update `MONGO_URI` if needed.

2. Install dependencies:

```bash
cd backend
npm install
```

3. Start the server:

```bash
npm run dev        # requires nodemon
# or
npm start
```

4. Open `http://localhost:5000` in your browser and use the form.

## API

- POST `/api/payments/analyze` accepts JSON `{ amount, purpose, category }` where `category` is one of `Essential`, `Non-Essential`, `Emergency`.
