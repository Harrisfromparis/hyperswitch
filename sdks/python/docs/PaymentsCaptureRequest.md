# PaymentsCaptureRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **str** | The unique identifier for the merchant. This is usually inferred from the API key. | [optional] 
**amount_to_capture** | **int** | The amount to capture, in the lowest denomination of the currency. If omitted, the entire &#x60;amount_capturable&#x60; of the payment will be captured. Must be less than or equal to the current &#x60;amount_capturable&#x60;. | [optional] 
**refund_uncaptured_amount** | **bool** | Decider to refund the uncaptured amount. (Currently not fully supported or behavior may vary by connector). | [optional] 
**statement_descriptor_suffix** | **str** | A dynamic suffix that appears on your customer&#39;s credit card statement. This is concatenated with the (shortened) descriptor prefix set on your account to form the complete statement descriptor. The combined length should not exceed connector-specific limits (typically 22 characters). | [optional] 
**statement_descriptor_prefix** | **str** | An optional prefix for the statement descriptor that appears on your customer&#39;s credit card statement. This can override the default prefix set on your merchant account. The combined length of prefix and suffix should not exceed connector-specific limits (typically 22 characters). | [optional] 
**merchant_connector_details** | [**MerchantConnectorDetailsWrap**](MerchantConnectorDetailsWrap.md) |  | [optional] 

## Example

```python
from hyperswitch.models.payments_capture_request import PaymentsCaptureRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentsCaptureRequest from a JSON string
payments_capture_request_instance = PaymentsCaptureRequest.from_json(json)
# print the JSON string representation of the object
print(PaymentsCaptureRequest.to_json())

# convert the object into a dict
payments_capture_request_dict = payments_capture_request_instance.to_dict()
# create an instance of PaymentsCaptureRequest from a dict
payments_capture_request_from_dict = PaymentsCaptureRequest.from_dict(payments_capture_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


