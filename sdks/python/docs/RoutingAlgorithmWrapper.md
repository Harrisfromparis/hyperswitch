# RoutingAlgorithmWrapper


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
from hyperswitch.models.routing_algorithm_wrapper import RoutingAlgorithmWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingAlgorithmWrapper from a JSON string
routing_algorithm_wrapper_instance = RoutingAlgorithmWrapper.from_json(json)
# print the JSON string representation of the object
print(RoutingAlgorithmWrapper.to_json())

# convert the object into a dict
routing_algorithm_wrapper_dict = routing_algorithm_wrapper_instance.to_dict()
# create an instance of RoutingAlgorithmWrapper from a dict
routing_algorithm_wrapper_from_dict = RoutingAlgorithmWrapper.from_dict(routing_algorithm_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


