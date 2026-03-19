# MindPay Database Schema

Using MongoDB (Mongoose Schemas). All schemas are tied to a `User` via `user_id`.

## User Collection
- `_id`: ObjectId
- `name`: String
- `email`: String (Unique)
- `passwordHash`: String
- `financialHealthScore`: Number (0-100)
- `createdAt`: Date

## Transaction Collection
- `_id`: ObjectId
- `user_id`: ObjectId (Ref: User)
- `amount`: Number
- `merchant`: String
- `type`: String (Enum: 'Essential', 'Non-Essential', 'Emergency')
- `date`: Date
- `status`: String (Enum: 'Completed', 'Warning-Bypassed')

## Budget Collection
- `_id`: ObjectId
- `user_id`: ObjectId (Ref: User)
- `category`: String (e.g., 'Non-Essential', 'Dining', 'Entertainment')
- `limit`: Number
- `period`: String (Enum: 'Monthly', 'Weekly')

## Subscription Collection
- `_id`: ObjectId
- `user_id`: ObjectId (Ref: User)
- `serviceName`: String
- `amount`: Number
- `billingCycle`: String (Enum: 'Monthly', 'Annually')
- `nextBillingDate`: Date

## SavingsGoal Collection
- `_id`: ObjectId
- `user_id`: ObjectId (Ref: User)
- `name`: String
- `targetAmount`: Number
- `currentAmount`: Number
- `deadline`: Date
