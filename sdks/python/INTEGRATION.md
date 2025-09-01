# Hyperswitch Python SDK

A Python SDK for integrating Hyperswitch payments into your applications.

## Installation

```bash
pip install hyperswitch-python-sdk
```

## Quick Start

### Basic Payment Creation

```python
import hyperswitch
from hyperswitch.rest import ApiException

# Configure the client
configuration = hyperswitch.Configuration(
    host="https://sandbox.hyperswitch.io",
    api_key={'ApiKey': 'your-api-key-here'}
)

# Create API client
with hyperswitch.ApiClient(configuration) as api_client:
    payments_api = hyperswitch.PaymentsApi(api_client)
    
    # Create a payment
    payment_request = hyperswitch.PaymentsCreateRequest(
        payment_id=f"pay_{int(time.time())}",
        amount=1000,  # Amount in smallest currency unit (e.g., cents)
        currency="USD",
        confirm=True,
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
    
    try:
        payment = payments_api.create_a_payment(payment_request)
        print(f"Payment created: {payment}")
    except ApiException as e:
        print(f"Payment failed: {e}")
```

### Retrieve Payment Status

```python
def get_payment_status(payment_id: str):
    with hyperswitch.ApiClient(configuration) as api_client:
        payments_api = hyperswitch.PaymentsApi(api_client)
        
        try:
            payment = payments_api.retrieve_a_payment(payment_id)
            print(f"Payment status: {payment.status}")
            return payment
        except ApiException as e:
            print(f"Error retrieving payment: {e}")
            raise
```

## Configuration

The SDK requires configuration with your Hyperswitch API credentials:

```python
configuration = hyperswitch.Configuration(
    host="https://sandbox.hyperswitch.io",  # Use https://api.hyperswitch.io for production
    api_key={'ApiKey': 'your-api-key-here'}
)
```

## Error Handling

All API calls can raise `ApiException`. Make sure to handle these appropriately:

```python
from hyperswitch.rest import ApiException

try:
    payment = payments_api.create_a_payment(payment_request)
except ApiException as e:
    print(f"API Error: Status {e.status}")
    print(f"Reason: {e.reason}")
    print(f"Body: {e.body}")
```

## Flask Example

```python
from flask import Flask, request, jsonify
import hyperswitch
from hyperswitch.rest import ApiException

app = Flask(__name__)

# Configure Hyperswitch
configuration = hyperswitch.Configuration(
    host="https://sandbox.hyperswitch.io",
    api_key={'ApiKey': 'your-api-key-here'}
)

@app.route('/create-payment', methods=['POST'])
def create_payment():
    data = request.json
    
    with hyperswitch.ApiClient(configuration) as api_client:
        payments_api = hyperswitch.PaymentsApi(api_client)
        
        payment_request = hyperswitch.PaymentsCreateRequest(
            amount=data['amount'],
            currency=data['currency'],
            payment_method_data=data['payment_method_data']
        )
        
        try:
            payment = payments_api.create_a_payment(payment_request)
            return jsonify({
                'success': True,
                'payment': payment.to_dict()
            })
        except ApiException as e:
            return jsonify({
                'success': False,
                'error': str(e)
            }), 400

if __name__ == '__main__':
    app.run(debug=True)
```

## Examples

See the `examples/` directory for complete integration examples.

## Support

- [Documentation](https://docs.hyperswitch.io)
- [GitHub Issues](https://github.com/juspay/hyperswitch/issues)
- [Community Slack](https://inviter.co/hyperswitch-slack)