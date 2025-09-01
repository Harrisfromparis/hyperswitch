import os
import time
from flask import Flask, request, jsonify, render_template_string
import hyperswitch
from hyperswitch.rest import ApiException

app = Flask(__name__)

# Configure Hyperswitch
configuration = hyperswitch.Configuration(
    host=os.getenv('HYPERSWITCH_BASE_URL', 'https://sandbox.hyperswitch.io'),
    api_key={'ApiKey': os.getenv('HYPERSWITCH_API_KEY', 'your-api-key-here')}
)

# HTML template for the payment form
PAYMENT_FORM_HTML = """
<!DOCTYPE html>
<html>
<head>
    <title>Hyperswitch Python Flask Example</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input, select { width: 100%; padding: 8px; margin-bottom: 10px; }
        button { background: #007cba; color: white; padding: 10px 20px; border: none; cursor: pointer; }
        .result { margin-top: 20px; padding: 10px; background: #f5f5f5; }
        .error { background: #ffebee; color: #c62828; }
        .success { background: #e8f5e8; color: #2e7d32; }
    </style>
</head>
<body>
    <h1>Hyperswitch Payment Example (Python Flask)</h1>
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
            resultDiv.className = 'result';
            resultDiv.innerHTML = 'Processing payment...';
            
            const formData = {
                amount: parseInt(document.getElementById('amount').value),
                currency: document.getElementById('currency').value,
                card_number: document.getElementById('card-number').value,
                exp_month: document.getElementById('exp-month').value,
                exp_year: document.getElementById('exp-year').value,
                cvc: document.getElementById('cvc').value
            };
            
            try {
                const response = await fetch('/api/payments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                if (result.success) {
                    resultDiv.className = 'result success';
                } else {
                    resultDiv.className = 'result error';
                }
                resultDiv.innerHTML = '<pre>' + JSON.stringify(result, null, 2) + '</pre>';
            } catch (error) {
                resultDiv.className = 'result error';
                resultDiv.innerHTML = 'Error: ' + error.message;
            }
        });
    </script>
</body>
</html>
"""

@app.route('/')
def index():
    return render_template_string(PAYMENT_FORM_HTML)

@app.route('/api/payments', methods=['POST'])
def create_payment():
    data = request.json
    
    with hyperswitch.ApiClient(configuration) as api_client:
        payments_api = hyperswitch.PaymentsApi(api_client)
        
        # Create payment request
        payment_request = hyperswitch.PaymentsCreateRequest(
            payment_id=f"pay_{int(time.time())}",
            amount=data['amount'],
            currency=data['currency'],
            confirm=True,
            payment_method_data=hyperswitch.PaymentMethodData(
                type="card",
                card=hyperswitch.CardDetails(
                    card_number=data['card_number'],
                    card_exp_month=data['exp_month'],
                    card_exp_year=data['exp_year'],
                    card_cvc=data['cvc']
                )
            )
        )
        
        try:
            payment = payments_api.create_a_payment(payment_request)
            return jsonify({
                'success': True,
                'payment': payment.to_dict(),
                'message': 'Payment processed successfully'
            })
        except ApiException as e:
            app.logger.error(f"Payment error: {e}")
            return jsonify({
                'success': False,
                'error': str(e),
                'details': e.body if hasattr(e, 'body') else 'Unknown error'
            }), 400

@app.route('/api/payments/<payment_id>', methods=['GET'])
def get_payment(payment_id):
    with hyperswitch.ApiClient(configuration) as api_client:
        payments_api = hyperswitch.PaymentsApi(api_client)
        
        try:
            payment = payments_api.retrieve_a_payment(payment_id)
            return jsonify({
                'success': True,
                'payment': payment.to_dict()
            })
        except ApiException as e:
            app.logger.error(f"Error retrieving payment: {e}")
            return jsonify({
                'success': False,
                'error': str(e)
            }), 400

if __name__ == '__main__':
    print("🚀 Hyperswitch Flask example running on http://localhost:5000")
    print("📝 Configure your API key in environment variable HYPERSWITCH_API_KEY")
    app.run(debug=True)