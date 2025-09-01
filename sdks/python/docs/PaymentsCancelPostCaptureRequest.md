# PaymentsCancelPostCaptureRequest

Request to cancel a payment when the payment is already captured

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reason** | **str** | The reason for the payment cancel | [optional] 

## Example

```python
from hyperswitch.models.payments_cancel_post_capture_request import PaymentsCancelPostCaptureRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentsCancelPostCaptureRequest from a JSON string
payments_cancel_post_capture_request_instance = PaymentsCancelPostCaptureRequest.from_json(json)
# print the JSON string representation of the object
print(PaymentsCancelPostCaptureRequest.to_json())

# convert the object into a dict
payments_cancel_post_capture_request_dict = payments_cancel_post_capture_request_instance.to_dict()
# create an instance of PaymentsCancelPostCaptureRequest from a dict
payments_cancel_post_capture_request_from_dict = PaymentsCancelPostCaptureRequest.from_dict(payments_cancel_post_capture_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


