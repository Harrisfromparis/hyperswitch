# DynamicRoutingAlgorithm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | [**List[DynamicRoutingConfigParams]**](DynamicRoutingConfigParams.md) |  | [optional] 
**elimination_analyser_config** | [**EliminationAnalyserConfig**](EliminationAnalyserConfig.md) |  | [optional] 
**decision_engine_configs** | [**DecisionEngineSuccessRateData**](DecisionEngineSuccessRateData.md) |  | 
**config** | [**ContractBasedRoutingConfigBody**](ContractBasedRoutingConfigBody.md) |  | [optional] 
**label_info** | [**List[LabelInformation]**](LabelInformation.md) |  | [optional] 

## Example

```python
from hyperswitch.models.dynamic_routing_algorithm import DynamicRoutingAlgorithm

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicRoutingAlgorithm from a JSON string
dynamic_routing_algorithm_instance = DynamicRoutingAlgorithm.from_json(json)
# print the JSON string representation of the object
print(DynamicRoutingAlgorithm.to_json())

# convert the object into a dict
dynamic_routing_algorithm_dict = dynamic_routing_algorithm_instance.to_dict()
# create an instance of DynamicRoutingAlgorithm from a dict
dynamic_routing_algorithm_from_dict = DynamicRoutingAlgorithm.from_dict(dynamic_routing_algorithm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


