# GpayEcryptedTokenizationData

This struct represents the encrypted Gpay payment data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the token | 
**token** | **str** | Token generated for the wallet | 

## Example

```python
from hyperswitch.models.gpay_ecrypted_tokenization_data import GpayEcryptedTokenizationData

# TODO update the JSON string below
json = "{}"
# create an instance of GpayEcryptedTokenizationData from a JSON string
gpay_ecrypted_tokenization_data_instance = GpayEcryptedTokenizationData.from_json(json)
# print the JSON string representation of the object
print(GpayEcryptedTokenizationData.to_json())

# convert the object into a dict
gpay_ecrypted_tokenization_data_dict = gpay_ecrypted_tokenization_data_instance.to_dict()
# create an instance of GpayEcryptedTokenizationData from a dict
gpay_ecrypted_tokenization_data_from_dict = GpayEcryptedTokenizationData.from_dict(gpay_ecrypted_tokenization_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


