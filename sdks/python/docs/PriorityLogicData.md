# PriorityLogicData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**failure_reason** | **str** |  | [optional] 

## Example

```python
from hyperswitch.models.priority_logic_data import PriorityLogicData

# TODO update the JSON string below
json = "{}"
# create an instance of PriorityLogicData from a JSON string
priority_logic_data_instance = PriorityLogicData.from_json(json)
# print the JSON string representation of the object
print(PriorityLogicData.to_json())

# convert the object into a dict
priority_logic_data_dict = priority_logic_data_instance.to_dict()
# create an instance of PriorityLogicData from a dict
priority_logic_data_from_dict = PriorityLogicData.from_dict(priority_logic_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


