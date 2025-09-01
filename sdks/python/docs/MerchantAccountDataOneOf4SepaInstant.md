# MerchantAccountDataOneOf4SepaInstant

SEPA Instant payments (10-second transfers)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **str** | IBAN for instant SEPA transfers | 
**name** | **str** | Account holder name | 
**connector_recipient_id** | **str** |  | [optional] 

## Example

```python
from hyperswitch.models.merchant_account_data_one_of4_sepa_instant import MerchantAccountDataOneOf4SepaInstant

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantAccountDataOneOf4SepaInstant from a JSON string
merchant_account_data_one_of4_sepa_instant_instance = MerchantAccountDataOneOf4SepaInstant.from_json(json)
# print the JSON string representation of the object
print(MerchantAccountDataOneOf4SepaInstant.to_json())

# convert the object into a dict
merchant_account_data_one_of4_sepa_instant_dict = merchant_account_data_one_of4_sepa_instant_instance.to_dict()
# create an instance of MerchantAccountDataOneOf4SepaInstant from a dict
merchant_account_data_one_of4_sepa_instant_from_dict = MerchantAccountDataOneOf4SepaInstant.from_dict(merchant_account_data_one_of4_sepa_instant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


