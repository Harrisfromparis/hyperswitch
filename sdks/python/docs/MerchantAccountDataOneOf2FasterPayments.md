# MerchantAccountDataOneOf2FasterPayments

UK Faster Payments (instant transfers)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | 8-digit UK account number | 
**sort_code** | **str** | 6-digit UK sort code | 
**name** | **str** | Account holder name | 
**connector_recipient_id** | **str** |  | [optional] 

## Example

```python
from hyperswitch.models.merchant_account_data_one_of2_faster_payments import MerchantAccountDataOneOf2FasterPayments

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantAccountDataOneOf2FasterPayments from a JSON string
merchant_account_data_one_of2_faster_payments_instance = MerchantAccountDataOneOf2FasterPayments.from_json(json)
# print the JSON string representation of the object
print(MerchantAccountDataOneOf2FasterPayments.to_json())

# convert the object into a dict
merchant_account_data_one_of2_faster_payments_dict = merchant_account_data_one_of2_faster_payments_instance.to_dict()
# create an instance of MerchantAccountDataOneOf2FasterPayments from a dict
merchant_account_data_one_of2_faster_payments_from_dict = MerchantAccountDataOneOf2FasterPayments.from_dict(merchant_account_data_one_of2_faster_payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


