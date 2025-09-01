# NextActionDataOneOf8

Contains the information regarding three_ds_method_data submission, three_ds authentication, and authorization flows

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**three_ds_data** | [**ThreeDsData**](ThreeDsData.md) |  | 
**type** | **str** |  | 

## Example

```python
from hyperswitch.models.next_action_data_one_of8 import NextActionDataOneOf8

# TODO update the JSON string below
json = "{}"
# create an instance of NextActionDataOneOf8 from a JSON string
next_action_data_one_of8_instance = NextActionDataOneOf8.from_json(json)
# print the JSON string representation of the object
print(NextActionDataOneOf8.to_json())

# convert the object into a dict
next_action_data_one_of8_dict = next_action_data_one_of8_instance.to_dict()
# create an instance of NextActionDataOneOf8 from a dict
next_action_data_one_of8_from_dict = NextActionDataOneOf8.from_dict(next_action_data_one_of8_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


