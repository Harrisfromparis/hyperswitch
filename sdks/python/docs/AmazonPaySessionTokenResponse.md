# AmazonPaySessionTokenResponse


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

## Example

```python
from hyperswitch.models.amazon_pay_session_token_response import AmazonPaySessionTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonPaySessionTokenResponse from a JSON string
amazon_pay_session_token_response_instance = AmazonPaySessionTokenResponse.from_json(json)
# print the JSON string representation of the object
print(AmazonPaySessionTokenResponse.to_json())

# convert the object into a dict
amazon_pay_session_token_response_dict = amazon_pay_session_token_response_instance.to_dict()
# create an instance of AmazonPaySessionTokenResponse from a dict
amazon_pay_session_token_response_from_dict = AmazonPaySessionTokenResponse.from_dict(amazon_pay_session_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


