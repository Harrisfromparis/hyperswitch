# GsmFeatureData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retry** | [**RetryFeatureData**](RetryFeatureData.md) |  | 

## Example

```python
from hyperswitch.models.gsm_feature_data import GsmFeatureData

# TODO update the JSON string below
json = "{}"
# create an instance of GsmFeatureData from a JSON string
gsm_feature_data_instance = GsmFeatureData.from_json(json)
# print the JSON string representation of the object
print(GsmFeatureData.to_json())

# convert the object into a dict
gsm_feature_data_dict = gsm_feature_data_instance.to_dict()
# create an instance of GsmFeatureData from a dict
gsm_feature_data_from_dict = GsmFeatureData.from_dict(gsm_feature_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


