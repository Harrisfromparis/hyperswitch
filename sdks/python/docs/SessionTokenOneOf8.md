# SessionTokenOneOf8


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **str** | Amazon Pay merchant account identifier | 
**ledger_currency** | [**Currency**](Currency.md) |  | 
**store_id** | **str** | Amazon Pay store ID | 
**payment_intent** | [**AmazonPayPaymentIntent**](AmazonPayPaymentIntent.md) |  | 
**total_shipping_amount** | **str** | The total shipping costs | 
**total_tax_amount** | **str** | The total tax amount for the order | 
**total_base_amount** | **str** | The total amount for items in the cart | 
**delivery_options** | [**List[AmazonPayDeliveryOptions]**](AmazonPayDeliveryOptions.md) | The delivery options available for the provided address | 
**wallet_name** | **str** |  | 

## Example

```python
from hyperswitch.models.session_token_one_of8 import SessionTokenOneOf8

# TODO update the JSON string below
json = "{}"
# create an instance of SessionTokenOneOf8 from a JSON string
session_token_one_of8_instance = SessionTokenOneOf8.from_json(json)
# print the JSON string representation of the object
print(SessionTokenOneOf8.to_json())

# convert the object into a dict
session_token_one_of8_dict = session_token_one_of8_instance.to_dict()
# create an instance of SessionTokenOneOf8 from a dict
session_token_one_of8_from_dict = SessionTokenOneOf8.from_dict(session_token_one_of8_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


