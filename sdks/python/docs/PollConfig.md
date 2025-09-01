# PollConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delay_in_secs** | **int** | Interval of the poll | 
**frequency** | **int** | Frequency of the poll | 

## Example

```python
from hyperswitch.models.poll_config import PollConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PollConfig from a JSON string
poll_config_instance = PollConfig.from_json(json)
# print the JSON string representation of the object
print(PollConfig.to_json())

# convert the object into a dict
poll_config_dict = poll_config_instance.to_dict()
# create an instance of PollConfig from a dict
poll_config_from_dict = PollConfig.from_dict(poll_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


