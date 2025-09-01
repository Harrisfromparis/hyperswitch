# PaymentChannel

Describes the channel through which the payment was initiated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**other** | **str** |  | 

## Example

```python
from hyperswitch.models.payment_channel import PaymentChannel

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentChannel from a JSON string
payment_channel_instance = PaymentChannel.from_json(json)
# print the JSON string representation of the object
print(PaymentChannel.to_json())

# convert the object into a dict
payment_channel_dict = payment_channel_instance.to_dict()
# create an instance of PaymentChannel from a dict
payment_channel_from_dict = PaymentChannel.from_dict(payment_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


