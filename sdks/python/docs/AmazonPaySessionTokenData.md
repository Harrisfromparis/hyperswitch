# AmazonPaySessionTokenData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazon_pay** | [**AmazonPayMerchantCredentials**](AmazonPayMerchantCredentials.md) |  | 

## Example

```python
from hyperswitch.models.amazon_pay_session_token_data import AmazonPaySessionTokenData

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonPaySessionTokenData from a JSON string
amazon_pay_session_token_data_instance = AmazonPaySessionTokenData.from_json(json)
# print the JSON string representation of the object
print(AmazonPaySessionTokenData.to_json())

# convert the object into a dict
amazon_pay_session_token_data_dict = amazon_pay_session_token_data_instance.to_dict()
# create an instance of AmazonPaySessionTokenData from a dict
amazon_pay_session_token_data_from_dict = AmazonPaySessionTokenData.from_dict(amazon_pay_session_token_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


