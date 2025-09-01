# CaptureMethod

Specifies how the payment is captured. - `automatic`: Funds are captured immediately after successful authorization. This is the default behavior if the field is omitted. - `manual`: Funds are authorized but not captured. A separate request to the `/payments/{payment_id}/capture` endpoint is required to capture the funds.

## Enum

* `AUTOMATIC` (value: `'automatic'`)

* `MANUAL` (value: `'manual'`)

* `MANUAL_MULTIPLE` (value: `'manual_multiple'`)

* `SCHEDULED` (value: `'scheduled'`)

* `SEQUENTIAL_AUTOMATIC` (value: `'sequential_automatic'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


