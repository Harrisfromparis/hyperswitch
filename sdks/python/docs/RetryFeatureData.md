# RetryFeatureData

Represents the data associated with a retry feature in GSM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**step_up_possible** | **bool** | indicates if step_up retry is possible | 
**clear_pan_possible** | **bool** | indicates if retry with pan is possible | 
**alternate_network_possible** | **bool** | indicates if retry with alternate network possible | 
**decision** | [**GsmDecision**](GsmDecision.md) |  | 

## Example

```python
from hyperswitch.models.retry_feature_data import RetryFeatureData

# TODO update the JSON string below
json = "{}"
# create an instance of RetryFeatureData from a JSON string
retry_feature_data_instance = RetryFeatureData.from_json(json)
# print the JSON string representation of the object
print(RetryFeatureData.to_json())

# convert the object into a dict
retry_feature_data_dict = retry_feature_data_instance.to_dict()
# create an instance of RetryFeatureData from a dict
retry_feature_data_from_dict = RetryFeatureData.from_dict(retry_feature_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


