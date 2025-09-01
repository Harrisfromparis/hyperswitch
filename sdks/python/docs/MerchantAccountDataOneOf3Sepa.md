# MerchantAccountDataOneOf3Sepa

SEPA payments (Euro zone)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **str** | IBAN for SEPA transfers | 
**name** | **str** | Account holder name | 
**connector_recipient_id** | **str** |  | [optional] 

## Example

```python
from hyperswitch.models.merchant_account_data_one_of3_sepa import MerchantAccountDataOneOf3Sepa

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantAccountDataOneOf3Sepa from a JSON string
merchant_account_data_one_of3_sepa_instance = MerchantAccountDataOneOf3Sepa.from_json(json)
# print the JSON string representation of the object
print(MerchantAccountDataOneOf3Sepa.to_json())

# convert the object into a dict
merchant_account_data_one_of3_sepa_dict = merchant_account_data_one_of3_sepa_instance.to_dict()
# create an instance of MerchantAccountDataOneOf3Sepa from a dict
merchant_account_data_one_of3_sepa_from_dict = MerchantAccountDataOneOf3Sepa.from_dict(merchant_account_data_one_of3_sepa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


