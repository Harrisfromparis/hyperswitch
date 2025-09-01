# Hyperswitch Python Flask Example

A complete example showing how to integrate Hyperswitch payments into a Flask application.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set your Hyperswitch API key:
```bash
export HYPERSWITCH_API_KEY=your-api-key-here
```

4. Run the application:
```bash
python app.py
```

5. Open http://localhost:5000 in your browser

## Features

- Complete payment form with card details
- Real-time payment processing using Hyperswitch Python SDK
- Payment status retrieval
- Comprehensive error handling
- Clean, responsive UI
- JSON API endpoints

## Environment Variables

- `HYPERSWITCH_API_KEY`: Your Hyperswitch API key
- `HYPERSWITCH_BASE_URL`: Base URL for Hyperswitch API (defaults to sandbox)

## API Endpoints

- `POST /api/payments`: Create a new payment
- `GET /api/payments/<payment_id>`: Retrieve payment status

## Testing

Use the test card number `4242424242424242` with any valid expiry date and CVC for testing payments in sandbox mode.

## Production Deployment

For production deployment:

1. Set `HYPERSWITCH_BASE_URL=https://api.hyperswitch.io`
2. Use your production API key
3. Set `FLASK_ENV=production`
4. Use a production WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```