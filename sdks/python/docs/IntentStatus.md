# IntentStatus

Represents the overall status of a payment intent. The status transitions through various states depending on the payment method, confirmation, capture method, and any subsequent actions (like customer authentication or manual capture).

## Enum

* `SUCCEEDED` (value: `'succeeded'`)

* `FAILED` (value: `'failed'`)

* `CANCELLED` (value: `'cancelled'`)

* `CANCELLED_POST_CAPTURE` (value: `'cancelled_post_capture'`)

* `PROCESSING` (value: `'processing'`)

* `REQUIRES_CUSTOMER_ACTION` (value: `'requires_customer_action'`)

* `REQUIRES_MERCHANT_ACTION` (value: `'requires_merchant_action'`)

* `REQUIRES_PAYMENT_METHOD` (value: `'requires_payment_method'`)

* `REQUIRES_CONFIRMATION` (value: `'requires_confirmation'`)

* `REQUIRES_CAPTURE` (value: `'requires_capture'`)

* `PARTIALLY_CAPTURED` (value: `'partially_captured'`)

* `PARTIALLY_CAPTURED_AND_CAPTURABLE` (value: `'partially_captured_and_capturable'`)

* `PARTIALLY_AUTHORIZED_AND_REQUIRES_CAPTURE` (value: `'partially_authorized_and_requires_capture'`)

* `CONFLICTED` (value: `'conflicted'`)

* `EXPIRED` (value: `'expired'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


