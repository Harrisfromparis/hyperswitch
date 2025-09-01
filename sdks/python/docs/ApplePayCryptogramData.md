# ApplePayCryptogramData

This struct represents the cryptogram data for Apple Pay transactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**online_payment_cryptogram** | **str** | The online payment cryptogram | 
**eci_indicator** | **str** | The ECI (Electronic Commerce Indicator) value | 

## Example

```python
from hyperswitch.models.apple_pay_cryptogram_data import ApplePayCryptogramData

# TODO update the JSON string below
json = "{}"
# create an instance of ApplePayCryptogramData from a JSON string
apple_pay_cryptogram_data_instance = ApplePayCryptogramData.from_json(json)
# print the JSON string representation of the object
print(ApplePayCryptogramData.to_json())

# convert the object into a dict
apple_pay_cryptogram_data_dict = apple_pay_cryptogram_data_instance.to_dict()
# create an instance of ApplePayCryptogramData from a dict
apple_pay_cryptogram_data_from_dict = ApplePayCryptogramData.from_dict(apple_pay_cryptogram_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


