# PriorityLogicOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enforcement** | **bool** |  | [optional] 
**gws** | **List[str]** |  | [optional] 
**priority_logic_tag** | **str** |  | [optional] 
**gateway_reference_ids** | **Dict[str, str]** |  | [optional] 
**primary_logic** | [**PriorityLogicData**](PriorityLogicData.md) |  | [optional] 
**fallback_logic** | [**PriorityLogicData**](PriorityLogicData.md) |  | [optional] 

## Example

```python
from hyperswitch.models.priority_logic_output import PriorityLogicOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PriorityLogicOutput from a JSON string
priority_logic_output_instance = PriorityLogicOutput.from_json(json)
# print the JSON string representation of the object
print(PriorityLogicOutput.to_json())

# convert the object into a dict
priority_logic_output_dict = priority_logic_output_instance.to_dict()
# create an instance of PriorityLogicOutput from a dict
priority_logic_output_from_dict = PriorityLogicOutput.from_dict(priority_logic_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


