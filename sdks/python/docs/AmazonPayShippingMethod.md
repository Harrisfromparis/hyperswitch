# AmazonPayShippingMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_method_name** | **str** | Name of the shipping method | 
**shipping_method_code** | **str** | Code of the shipping method | 

## Example

```python
from hyperswitch.models.amazon_pay_shipping_method import AmazonPayShippingMethod

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonPayShippingMethod from a JSON string
amazon_pay_shipping_method_instance = AmazonPayShippingMethod.from_json(json)
# print the JSON string representation of the object
print(AmazonPayShippingMethod.to_json())

# convert the object into a dict
amazon_pay_shipping_method_dict = amazon_pay_shipping_method_instance.to_dict()
# create an instance of AmazonPayShippingMethod from a dict
amazon_pay_shipping_method_from_dict = AmazonPayShippingMethod.from_dict(amazon_pay_shipping_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


