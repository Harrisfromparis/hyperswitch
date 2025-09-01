# ProfileAcquirerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_acquirer_id** | **str** | The unique identifier of the profile acquirer | 
**acquirer_assigned_merchant_id** | **str** | The merchant id assigned by the acquirer | 
**merchant_name** | **str** | Merchant name | 
**network** | **str** | Network provider | 
**acquirer_bin** | **str** | Acquirer bin | 
**acquirer_ica** | **str** | Acquirer ica provided by acquirer | [optional] 
**acquirer_fraud_rate** | **float** | Fraud rate for the particular acquirer configuration | 
**profile_id** | **str** | Parent profile id to link the acquirer account with | 

## Example

```python
from hyperswitch.models.profile_acquirer_response import ProfileAcquirerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileAcquirerResponse from a JSON string
profile_acquirer_response_instance = ProfileAcquirerResponse.from_json(json)
# print the JSON string representation of the object
print(ProfileAcquirerResponse.to_json())

# convert the object into a dict
profile_acquirer_response_dict = profile_acquirer_response_instance.to_dict()
# create an instance of ProfileAcquirerResponse from a dict
profile_acquirer_response_from_dict = ProfileAcquirerResponse.from_dict(profile_acquirer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


