# AmazonPayDeliveryOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Delivery Option identifier | 
**price** | [**AmazonPayDeliveryPrice**](AmazonPayDeliveryPrice.md) |  | 
**shipping_method** | [**AmazonPayShippingMethod**](AmazonPayShippingMethod.md) |  | 
**is_default** | **bool** | Specifies if this delivery option is the default | 

## Example

```python
from hyperswitch.models.amazon_pay_delivery_options import AmazonPayDeliveryOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonPayDeliveryOptions from a JSON string
amazon_pay_delivery_options_instance = AmazonPayDeliveryOptions.from_json(json)
# print the JSON string representation of the object
print(AmazonPayDeliveryOptions.to_json())

# convert the object into a dict
amazon_pay_delivery_options_dict = amazon_pay_delivery_options_instance.to_dict()
# create an instance of AmazonPayDeliveryOptions from a dict
amazon_pay_delivery_options_from_dict = AmazonPayDeliveryOptions.from_dict(amazon_pay_delivery_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


