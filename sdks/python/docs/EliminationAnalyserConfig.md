# EliminationAnalyserConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **int** |  | [optional] 
**bucket_leak_interval_in_secs** | **int** |  | [optional] 

## Example

```python
from hyperswitch.models.elimination_analyser_config import EliminationAnalyserConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EliminationAnalyserConfig from a JSON string
elimination_analyser_config_instance = EliminationAnalyserConfig.from_json(json)
# print the JSON string representation of the object
print(EliminationAnalyserConfig.to_json())

# convert the object into a dict
elimination_analyser_config_dict = elimination_analyser_config_instance.to_dict()
# create an instance of EliminationAnalyserConfig from a dict
elimination_analyser_config_from_dict = EliminationAnalyserConfig.from_dict(elimination_analyser_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


