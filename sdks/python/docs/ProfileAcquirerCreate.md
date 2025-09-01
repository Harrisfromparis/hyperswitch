# ProfileAcquirerCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_assigned_merchant_id** | **str** | The merchant id assigned by the acquirer | 
**merchant_name** | **str** | merchant name | 
**network** | **str** | Network provider | 
**acquirer_bin** | **str** | Acquirer bin | 
**acquirer_ica** | **str** | Acquirer ica provided by acquirer | [optional] 
**acquirer_fraud_rate** | **float** | Fraud rate for the particular acquirer configuration | 
**profile_id** | **str** | Parent profile id to link the acquirer account with | 

## Example

```python
from hyperswitch.models.profile_acquirer_create import ProfileAcquirerCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileAcquirerCreate from a JSON string
profile_acquirer_create_instance = ProfileAcquirerCreate.from_json(json)
# print the JSON string representation of the object
print(ProfileAcquirerCreate.to_json())

# convert the object into a dict
profile_acquirer_create_dict = profile_acquirer_create_instance.to_dict()
# create an instance of ProfileAcquirerCreate from a dict
profile_acquirer_create_from_dict = ProfileAcquirerCreate.from_dict(profile_acquirer_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


