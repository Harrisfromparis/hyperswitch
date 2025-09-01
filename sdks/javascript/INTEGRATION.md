# Hyperswitch JavaScript/TypeScript SDK

A JavaScript/TypeScript SDK for integrating Hyperswitch payments into your applications.

## Installation

```bash
npm install @hyperswitch/node-sdk
```

## Quick Start

### Basic Payment Creation

```typescript
import { Configuration, PaymentsApi } from '@hyperswitch/node-sdk';

// Configure the client
const config = new Configuration({
  basePath: 'https://sandbox.hyperswitch.io',
  apiKey: 'your-api-key-here'
});

const paymentsApi = new PaymentsApi(config);

// Create a payment
async function createPayment() {
  try {
    const payment = await paymentsApi.createAPayment({
      paymentId: 'pay_' + Date.now(),
      amount: 1000, // Amount in smallest currency unit (e.g., cents)
      currency: 'USD',
      confirm: true,
      paymentMethodData: {
        type: 'card',
        card: {
          cardNumber: '4242424242424242',
          cardExpMonth: '12',
          cardExpYear: '2025',
          cardCvc: '123'
        }
      }
    });
    
    console.log('Payment created:', payment);
    return payment;
  } catch (error) {
    console.error('Payment failed:', error);
    throw error;
  }
}
```

### Retrieve Payment Status

```typescript
async function getPaymentStatus(paymentId: string) {
  try {
    const payment = await paymentsApi.retrieveAPayment({
      paymentId: paymentId
    });
    
    console.log('Payment status:', payment.status);
    return payment;
  } catch (error) {
    console.error('Error retrieving payment:', error);
    throw error;
  }
}
```

## Configuration

The SDK requires configuration with your Hyperswitch API credentials:

```typescript
const config = new Configuration({
  basePath: 'https://sandbox.hyperswitch.io', // Use https://api.hyperswitch.io for production
  apiKey: 'your-api-key-here',
  // Optional: Custom fetch implementation
  fetchApi: customFetch
});
```

## Error Handling

All API calls can throw errors. Make sure to wrap your calls in try-catch blocks:

```typescript
try {
  const payment = await paymentsApi.createAPayment(paymentRequest);
} catch (error) {
  if (error.response) {
    // API error response
    console.error('API Error:', error.response.status, error.response.data);
  } else {
    // Network or other error
    console.error('Error:', error.message);
  }
}
```

## Examples

See the `examples/` directory for complete integration examples.

## Support

- [Documentation](https://docs.hyperswitch.io)
- [GitHub Issues](https://github.com/juspay/hyperswitch/issues)
- [Community Slack](https://inviter.co/hyperswitch-slack)