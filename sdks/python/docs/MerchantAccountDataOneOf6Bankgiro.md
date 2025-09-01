# MerchantAccountDataOneOf6Bankgiro

Swedish Bankgiro system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** | Bankgiro number (7-8 digits) | 
**name** | **str** | Account holder name | 
**connector_recipient_id** | **str** |  | [optional] 

## Example

```python
from hyperswitch.models.merchant_account_data_one_of6_bankgiro import MerchantAccountDataOneOf6Bankgiro

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantAccountDataOneOf6Bankgiro from a JSON string
merchant_account_data_one_of6_bankgiro_instance = MerchantAccountDataOneOf6Bankgiro.from_json(json)
# print the JSON string representation of the object
print(MerchantAccountDataOneOf6Bankgiro.to_json())

# convert the object into a dict
merchant_account_data_one_of6_bankgiro_dict = merchant_account_data_one_of6_bankgiro_instance.to_dict()
# create an instance of MerchantAccountDataOneOf6Bankgiro from a dict
merchant_account_data_one_of6_bankgiro_from_dict = MerchantAccountDataOneOf6Bankgiro.from_dict(merchant_account_data_one_of6_bankgiro_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


