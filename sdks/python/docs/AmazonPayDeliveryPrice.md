# AmazonPayDeliveryPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | This Unit struct represents MinorUnit in which core amount works | 
**currency_code** | [**Currency**](Currency.md) |  | 

## Example

```python
from hyperswitch.models.amazon_pay_delivery_price import AmazonPayDeliveryPrice

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonPayDeliveryPrice from a JSON string
amazon_pay_delivery_price_instance = AmazonPayDeliveryPrice.from_json(json)
# print the JSON string representation of the object
print(AmazonPayDeliveryPrice.to_json())

# convert the object into a dict
amazon_pay_delivery_price_dict = amazon_pay_delivery_price_instance.to_dict()
# create an instance of AmazonPayDeliveryPrice from a dict
amazon_pay_delivery_price_from_dict = AmazonPayDeliveryPrice.from_dict(amazon_pay_delivery_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


