# MerchantAccountDataOneOf7Plusgiro

Swedish Plusgiro system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** | Plusgiro number (2-8 digits) | 
**name** | **str** | Account holder name | 
**connector_recipient_id** | **str** |  | [optional] 

## Example

```python
from hyperswitch.models.merchant_account_data_one_of7_plusgiro import MerchantAccountDataOneOf7Plusgiro

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantAccountDataOneOf7Plusgiro from a JSON string
merchant_account_data_one_of7_plusgiro_instance = MerchantAccountDataOneOf7Plusgiro.from_json(json)
# print the JSON string representation of the object
print(MerchantAccountDataOneOf7Plusgiro.to_json())

# convert the object into a dict
merchant_account_data_one_of7_plusgiro_dict = merchant_account_data_one_of7_plusgiro_instance.to_dict()
# create an instance of MerchantAccountDataOneOf7Plusgiro from a dict
merchant_account_data_one_of7_plusgiro_from_dict = MerchantAccountDataOneOf7Plusgiro.from_dict(merchant_account_data_one_of7_plusgiro_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


