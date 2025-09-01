# AmazonPayMerchantCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **str** | Amazon Pay merchant account identifier | 
**store_id** | **str** | Amazon Pay store ID | 

## Example

```python
from hyperswitch.models.amazon_pay_merchant_credentials import AmazonPayMerchantCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonPayMerchantCredentials from a JSON string
amazon_pay_merchant_credentials_instance = AmazonPayMerchantCredentials.from_json(json)
# print the JSON string representation of the object
print(AmazonPayMerchantCredentials.to_json())

# convert the object into a dict
amazon_pay_merchant_credentials_dict = amazon_pay_merchant_credentials_instance.to_dict()
# create an instance of AmazonPayMerchantCredentials from a dict
amazon_pay_merchant_credentials_from_dict = AmazonPayMerchantCredentials.from_dict(amazon_pay_merchant_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


