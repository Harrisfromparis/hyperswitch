# ProfileAcquirerUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_assigned_merchant_id** | **str** |  | [optional] 
**merchant_name** | **str** |  | [optional] 
**network** | **str** |  | [optional] 
**acquirer_bin** | **str** |  | [optional] 
**acquirer_ica** | **str** |  | [optional] 
**acquirer_fraud_rate** | **float** |  | [optional] 

## Example

```python
from hyperswitch.models.profile_acquirer_update import ProfileAcquirerUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileAcquirerUpdate from a JSON string
profile_acquirer_update_instance = ProfileAcquirerUpdate.from_json(json)
# print the JSON string representation of the object
print(ProfileAcquirerUpdate.to_json())

# convert the object into a dict
profile_acquirer_update_dict = profile_acquirer_update_instance.to_dict()
# create an instance of ProfileAcquirerUpdate from a dict
profile_acquirer_update_from_dict = ProfileAcquirerUpdate.from_dict(profile_acquirer_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


