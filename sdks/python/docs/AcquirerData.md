# AcquirerData

Represents data about the acquirer used in the 3DS decision rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**Country**](Country.md) |  | 
**fraud_rate** | **float** | The fraud rate associated with the acquirer. | [optional] 

## Example

```python
from hyperswitch.models.acquirer_data import AcquirerData

# TODO update the JSON string below
json = "{}"
# create an instance of AcquirerData from a JSON string
acquirer_data_instance = AcquirerData.from_json(json)
# print the JSON string representation of the object
print(AcquirerData.to_json())

# convert the object into a dict
acquirer_data_dict = acquirer_data_instance.to_dict()
# create an instance of AcquirerData from a dict
acquirer_data_from_dict = AcquirerData.from_dict(acquirer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


