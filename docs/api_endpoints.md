# MindPay REST API Endpoints

## Authentication
- **POST `/api/auth/register`**
  - Body: `{ name, email, password }`
  - Returns: `{ token, user }`
- **POST `/api/auth/login`**
  - Body: `{ email, password }`
  - Returns: `{ token, user }`
- **GET `/api/auth/me`**
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ user }`

## Dashboard & Analytics
- **GET `/api/analytics/dashboard`**
  - Returns: Aggregated spending by category (Essential vs Non-Essential), recent transactions, savings goal progress, and financial health score.

## Budgets
- **GET `/api/budgets`**
  - Returns: User's budget limits.
- **POST `/api/budgets`**
  - Body: `{ category, limit, period }`
  - Returns: Updated budget entry.

## Decision Engine
- **POST `/api/decision/check`**
  - Body: `{ amount, merchant, type (Essential, Non-Essential, Emergency) }`
  - Returns: `{ allowed: boolean, warningMessage: string | null }`
  - *Logic: If type is Emergency, allowed=true. If Non-Essential, check if sum of non-essential usage + amount > budget limit.*

## Transactions
- **GET `/api/transactions`**
  - Returns: List of user's transactions (paginated).
- **POST `/api/transactions`**
  - Body: `{ amount, merchant, type, status }`
  - Returns: Saved transaction.

## Subscriptions & Goals
- **GET `/api/subscriptions`**
  - Returns: Active subscriptions.
- **GET `/api/goals`**
  - Returns: Savings goals.
