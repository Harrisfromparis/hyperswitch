# AmazonPayWalletData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_session_id** | **str** | Checkout Session identifier | 

## Example

```python
from hyperswitch.models.amazon_pay_wallet_data import AmazonPayWalletData

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonPayWalletData from a JSON string
amazon_pay_wallet_data_instance = AmazonPayWalletData.from_json(json)
# print the JSON string representation of the object
print(AmazonPayWalletData.to_json())

# convert the object into a dict
amazon_pay_wallet_data_dict = amazon_pay_wallet_data_instance.to_dict()
# create an instance of AmazonPayWalletData from a dict
amazon_pay_wallet_data_from_dict = AmazonPayWalletData.from_dict(amazon_pay_wallet_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


