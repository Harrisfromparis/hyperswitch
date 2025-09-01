# MerchantAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | [**MerchantAccountDataOneOfIban**](MerchantAccountDataOneOfIban.md) |  | 
**bacs** | [**MerchantAccountDataOneOf1Bacs**](MerchantAccountDataOneOf1Bacs.md) |  | 
**faster_payments** | [**MerchantAccountDataOneOf2FasterPayments**](MerchantAccountDataOneOf2FasterPayments.md) |  | 
**sepa** | [**MerchantAccountDataOneOf3Sepa**](MerchantAccountDataOneOf3Sepa.md) |  | 
**sepa_instant** | [**MerchantAccountDataOneOf4SepaInstant**](MerchantAccountDataOneOf4SepaInstant.md) |  | 
**elixir** | [**MerchantAccountDataOneOf5Elixir**](MerchantAccountDataOneOf5Elixir.md) |  | 
**bankgiro** | [**MerchantAccountDataOneOf6Bankgiro**](MerchantAccountDataOneOf6Bankgiro.md) |  | 
**plusgiro** | [**MerchantAccountDataOneOf7Plusgiro**](MerchantAccountDataOneOf7Plusgiro.md) |  | 

## Example

```python
from hyperswitch.models.merchant_account_data import MerchantAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantAccountData from a JSON string
merchant_account_data_instance = MerchantAccountData.from_json(json)
# print the JSON string representation of the object
print(MerchantAccountData.to_json())

# convert the object into a dict
merchant_account_data_dict = merchant_account_data_instance.to_dict()
# create an instance of MerchantAccountData from a dict
merchant_account_data_from_dict = MerchantAccountData.from_dict(merchant_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


