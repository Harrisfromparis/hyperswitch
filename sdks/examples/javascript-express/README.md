# Hyperswitch Express.js Example

A complete example showing how to integrate Hyperswitch payments into an Express.js application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set your Hyperswitch API key:
```bash
export HYPERSWITCH_API_KEY=your-api-key-here
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Features

- Complete payment form with card details
- Real-time payment processing
- Payment status retrieval
- Error handling and display
- Clean, responsive UI

## Environment Variables

- `HYPERSWITCH_API_KEY`: Your Hyperswitch API key
- `HYPERSWITCH_BASE_URL`: Base URL for Hyperswitch API (defaults to sandbox)
- `PORT`: Port to run the server on (defaults to 3000)

## API Endpoints

- `POST /api/payments`: Create a new payment
- `GET /api/payments/:paymentId`: Retrieve payment status

## Testing

Use the test card number `4242424242424242` with any valid expiry date and CVC for testing payments in sandbox mode.