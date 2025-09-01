# ApplePayPaymentData

This enum is used to represent the Apple Pay payment data, which can either be encrypted or decrypted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_primary_account_number** | **str** | The primary account number | 
**application_expiration_month** | **str** | The application expiration date (PAN expiry month) | 
**application_expiration_year** | **str** | The application expiration date (PAN expiry year) | 
**payment_data** | [**ApplePayCryptogramData**](ApplePayCryptogramData.md) |  | 

## Example

```python
from hyperswitch.models.apple_pay_payment_data import ApplePayPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of ApplePayPaymentData from a JSON string
apple_pay_payment_data_instance = ApplePayPaymentData.from_json(json)
# print the JSON string representation of the object
print(ApplePayPaymentData.to_json())

# convert the object into a dict
apple_pay_payment_data_dict = apple_pay_payment_data_instance.to_dict()
# create an instance of ApplePayPaymentData from a dict
apple_pay_payment_data_from_dict = ApplePayPaymentData.from_dict(apple_pay_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


