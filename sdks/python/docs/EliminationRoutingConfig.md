# EliminationRoutingConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | [**List[DynamicRoutingConfigParams]**](DynamicRoutingConfigParams.md) |  | [optional] 
**elimination_analyser_config** | [**EliminationAnalyserConfig**](EliminationAnalyserConfig.md) |  | [optional] 
**decision_engine_configs** | [**DecisionEngineEliminationData**](DecisionEngineEliminationData.md) |  | 

## Example

```python
from hyperswitch.models.elimination_routing_config import EliminationRoutingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EliminationRoutingConfig from a JSON string
elimination_routing_config_instance = EliminationRoutingConfig.from_json(json)
# print the JSON string representation of the object
print(EliminationRoutingConfig.to_json())

# convert the object into a dict
elimination_routing_config_dict = elimination_routing_config_instance.to_dict()
# create an instance of EliminationRoutingConfig from a dict
elimination_routing_config_from_dict = EliminationRoutingConfig.from_dict(elimination_routing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


