# MerchantAccountDataOneOf5Elixir

Polish Elixir payment system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Polish account number (26 digits) | 
**iban** | **str** | Polish IBAN (28 chars) | 
**name** | **str** | Account holder name | 
**connector_recipient_id** | **str** |  | [optional] 

## Example

```python
from hyperswitch.models.merchant_account_data_one_of5_elixir import MerchantAccountDataOneOf5Elixir

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantAccountDataOneOf5Elixir from a JSON string
merchant_account_data_one_of5_elixir_instance = MerchantAccountDataOneOf5Elixir.from_json(json)
# print the JSON string representation of the object
print(MerchantAccountDataOneOf5Elixir.to_json())

# convert the object into a dict
merchant_account_data_one_of5_elixir_dict = merchant_account_data_one_of5_elixir_instance.to_dict()
# create an instance of MerchantAccountDataOneOf5Elixir from a dict
merchant_account_data_one_of5_elixir_from_dict = MerchantAccountDataOneOf5Elixir.from_dict(merchant_account_data_one_of5_elixir_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


