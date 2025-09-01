const express = require('express');
const cors = require('cors');
const { Configuration, PaymentsApi } = require('@hyperswitch/node-sdk');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configure Hyperswitch
const config = new Configuration({
  basePath: process.env.HYPERSWITCH_BASE_URL || 'https://sandbox.hyperswitch.io',
  apiKey: process.env.HYPERSWITCH_API_KEY || 'your-api-key-here'
});

const paymentsApi = new PaymentsApi(config);

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Hyperswitch Example</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            .form-group { margin-bottom: 15px; }
            label { display: block; margin-bottom: 5px; }
            input, select { width: 100%; padding: 8px; margin-bottom: 10px; }
            button { background: #007cba; color: white; padding: 10px 20px; border: none; cursor: pointer; }
            .result { margin-top: 20px; padding: 10px; background: #f5f5f5; }
        </style>
    </head>
    <body>
        <h1>Hyperswitch Payment Example</h1>
        <form id="payment-form">
            <div class="form-group">
                <label for="amount">Amount (in cents):</label>
                <input type="number" id="amount" value="1000" required>
            </div>
            <div class="form-group">
                <label for="currency">Currency:</label>
                <select id="currency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            <div class="form-group">
                <label for="card-number">Card Number:</label>
                <input type="text" id="card-number" value="4242424242424242" required>
            </div>
            <div class="form-group">
                <label for="exp-month">Expiry Month:</label>
                <input type="text" id="exp-month" value="12" required>
            </div>
            <div class="form-group">
                <label for="exp-year">Expiry Year:</label>
                <input type="text" id="exp-year" value="2025" required>
            </div>
            <div class="form-group">
                <label for="cvc">CVC:</label>
                <input type="text" id="cvc" value="123" required>
            </div>
            <button type="submit">Process Payment</button>
        </form>
        <div id="result" class="result" style="display: none;"></div>

        <script>
            document.getElementById('payment-form').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const resultDiv = document.getElementById('result');
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = 'Processing payment...';
                
                const formData = {
                    amount: parseInt(document.getElementById('amount').value),
                    currency: document.getElementById('currency').value,
                    cardNumber: document.getElementById('card-number').value,
                    expMonth: document.getElementById('exp-month').value,
                    expYear: document.getElementById('exp-year').value,
                    cvc: document.getElementById('cvc').value
                };
                
                try {
                    const response = await fetch('/api/payments', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    
                    const result = await response.json();
                    resultDiv.innerHTML = '<pre>' + JSON.stringify(result, null, 2) + '</pre>';
                } catch (error) {
                    resultDiv.innerHTML = 'Error: ' + error.message;
                }
            });
        </script>
    </body>
    </html>
  `);
});

app.post('/api/payments', async (req, res) => {
  try {
    const { amount, currency, cardNumber, expMonth, expYear, cvc } = req.body;
    
    const paymentRequest = {
      paymentId: 'pay_' + Date.now(),
      amount: amount,
      currency: currency,
      confirm: true,
      paymentMethodData: {
        type: 'card',
        card: {
          cardNumber: cardNumber,
          cardExpMonth: expMonth,
          cardExpYear: expYear,
          cardCvc: cvc
        }
      }
    };
    
    const payment = await paymentsApi.createAPayment(paymentRequest);
    
    res.json({
      success: true,
      payment: payment,
      message: 'Payment processed successfully'
    });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(400).json({
      success: false,
      error: error.message,
      details: error.response?.data || 'Unknown error'
    });
  }
});

app.get('/api/payments/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = await paymentsApi.retrieveAPayment({ paymentId });
    
    res.json({
      success: true,
      payment: payment
    });
  } catch (error) {
    console.error('Error retrieving payment:', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Hyperswitch Express example running on http://localhost:${port}`);
  console.log('📝 Configure your API key in environment variable HYPERSWITCH_API_KEY');
});