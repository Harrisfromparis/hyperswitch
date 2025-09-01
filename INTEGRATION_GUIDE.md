# Adding Hyperswitch to Your App

This guide shows you how to quickly integrate Hyperswitch payments into your application using our generated SDKs and examples.

## What is Hyperswitch?

Hyperswitch is an open-source payments infrastructure that acts as a "Linux for Payments." It provides:

- **Unified Payment Processing**: Support for 100+ payment processors through a single API
- **Intelligent Routing**: Route transactions to the processor with highest success rates
- **Revenue Recovery**: Smart retry strategies to recover failed payments
- **PCI-Compliant Vault**: Secure storage for payment methods
- **Cost Observability**: Monitor and optimize payment costs
- **Payment Methods**: Cards, wallets, BNPL, bank transfers, and more

## Quick Start

### 1. Get Your API Keys

1. Sign up at [Hyperswitch Dashboard](https://app.hyperswitch.io)
2. Create a merchant account
3. Get your API key from the dashboard

### 2. Choose Your SDK

We provide SDKs for popular programming languages:

| Language | SDK Location | Package |
|----------|--------------|---------|
| JavaScript/TypeScript | `sdks/javascript/` | `@hyperswitch/node-sdk` |
| Python | `sdks/python/` | `hyperswitch-python-sdk` |

### 3. Run an Example

Start with one of our complete examples:

```bash
# Express.js Example
cd sdks/examples/javascript-express
npm install
HYPERSWITCH_API_KEY=your-key npm start

# Flask Example  
cd sdks/examples/python-flask
pip install -r requirements.txt
HYPERSWITCH_API_KEY=your-key python app.py
```

## Integration Patterns

### Basic Payment Flow

1. **Create Payment Intent**: Initialize a payment with amount and currency
2. **Collect Payment Details**: Get card/payment method details from customer
3. **Confirm Payment**: Process the payment
4. **Handle Response**: Show success/failure to customer

### Example: Simple Payment

**JavaScript:**
```javascript
import { Configuration, PaymentsApi } from '@hyperswitch/node-sdk';

const paymentsApi = new PaymentsApi(new Configuration({
  basePath: 'https://sandbox.hyperswitch.io',
  apiKey: 'your-api-key'
}));

const payment = await paymentsApi.createAPayment({
  amount: 1000, // $10.00 in cents
  currency: 'USD',
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
```

**Python:**
```python
import hyperswitch

configuration = hyperswitch.Configuration(
    host="https://sandbox.hyperswitch.io",
    api_key={'ApiKey': 'your-api-key'}
)

with hyperswitch.ApiClient(configuration) as api_client:
    payments_api = hyperswitch.PaymentsApi(api_client)
    payment = payments_api.create_a_payment(
        hyperswitch.PaymentsCreateRequest(
            amount=1000,  # $10.00 in cents
            currency="USD",
            payment_method_data=hyperswitch.PaymentMethodData(
                type="card",
                card=hyperswitch.CardDetails(
                    card_number="4242424242424242",
                    card_exp_month="12", 
                    card_exp_year="2025",
                    card_cvc="123"
                )
            )
        )
    )
```

## Web Integration Patterns

### Frontend + Backend

**Recommended**: Use Hyperswitch in your backend to keep API keys secure.

1. **Frontend**: Collect payment details securely
2. **Backend**: Process payments using Hyperswitch SDK
3. **Frontend**: Display results to customer

### Client-Side Only

For prototyping only. Use publishable keys and payment intents for production.

## Framework Examples

| Framework | Example Location | Description |
|-----------|-----------------|-------------|
| Express.js | `examples/javascript-express/` | Node.js backend with payment form |
| Flask | `examples/python-flask/` | Python backend with payment form |
| Next.js | `examples/next-js/` | Full-stack React application |

## Environment Configuration

### Sandbox (Testing)
```bash
HYPERSWITCH_BASE_URL=https://sandbox.hyperswitch.io
HYPERSWITCH_API_KEY=your-sandbox-key
```

### Production
```bash
HYPERSWITCH_BASE_URL=https://api.hyperswitch.io
HYPERSWITCH_API_KEY=your-production-key
```

## Testing

Use these test card numbers in sandbox mode:

| Card Number | Description |
|-------------|-------------|
| `4242424242424242` | Visa - Success |
| `4000000000000002` | Visa - Decline |
| `5555555555554444` | Mastercard - Success |

## Advanced Features

### Payment Methods
- **Cards**: Visa, Mastercard, American Express
- **Wallets**: Apple Pay, Google Pay, PayPal
- **BNPL**: Klarna, Afterpay
- **Bank**: ACH, SEPA, UPI

### Smart Routing
Configure rules to route payments to the best processor:
```javascript
const payment = await paymentsApi.createAPayment({
  amount: 1000,
  currency: 'USD',
  routing: {
    type: 'smart',
    fallback: ['stripe', 'adyen']
  }
});
```

### Webhooks
Handle payment status updates:
```javascript
app.post('/webhooks/hyperswitch', (req, res) => {
  const event = req.body;
  
  switch (event.type) {
    case 'payment_succeeded':
      // Handle successful payment
      break;
    case 'payment_failed':
      // Handle failed payment
      break;
  }
  
  res.status(200).send('OK');
});
```

## Deployment

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
ENV HYPERSWITCH_API_KEY=your-key
EXPOSE 3000
CMD ["npm", "start"]
```

### Kubernetes
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: app
        image: my-app:latest
        env:
        - name: HYPERSWITCH_API_KEY
          valueFrom:
            secretKeyRef:
              name: hyperswitch-secret
              key: api-key
```

## Next Steps

1. **Try the Examples**: Run the example apps to see integration patterns
2. **Read SDK Docs**: Check SDK-specific documentation for detailed API reference
3. **Join Community**: Get help on [Slack](https://inviter.co/hyperswitch-slack)
4. **Production Setup**: Configure webhooks and connect your payment processors

## Support

- 📖 [Documentation](https://docs.hyperswitch.io)
- 💬 [Community Slack](https://inviter.co/hyperswitch-slack)
- 🐛 [GitHub Issues](https://github.com/juspay/hyperswitch/issues)
- 📧 [Email Support](mailto:hyperswitch@juspay.in)

---

**Ready to accept payments?** Start with our [sandbox environment](https://app.hyperswitch.io) and follow this guide to integrate Hyperswitch into your application in minutes!