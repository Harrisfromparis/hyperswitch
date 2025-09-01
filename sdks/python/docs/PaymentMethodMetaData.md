# PaymentMethodMetaData

Represents metadata about the payment method used in the 3DS decision rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_network** | [**CardNetwork**](CardNetwork.md) |  | 

## Example

```python
from hyperswitch.models.payment_method_meta_data import PaymentMethodMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodMetaData from a JSON string
payment_method_meta_data_instance = PaymentMethodMetaData.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodMetaData.to_json())

# convert the object into a dict
payment_method_meta_data_dict = payment_method_meta_data_instance.to_dict()
# create an instance of PaymentMethodMetaData from a dict
payment_method_meta_data_from_dict = PaymentMethodMetaData.from_dict(payment_method_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


