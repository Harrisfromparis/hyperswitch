# StaticRoutingAlgorithm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**data** | [**ProgramThreeDsDecisionRule**](ProgramThreeDsDecisionRule.md) |  | 

## Example

```python
from hyperswitch.models.static_routing_algorithm import StaticRoutingAlgorithm

# TODO update the JSON string below
json = "{}"
# create an instance of StaticRoutingAlgorithm from a JSON string
static_routing_algorithm_instance = StaticRoutingAlgorithm.from_json(json)
# print the JSON string representation of the object
print(StaticRoutingAlgorithm.to_json())

# convert the object into a dict
static_routing_algorithm_dict = static_routing_algorithm_instance.to_dict()
# create an instance of StaticRoutingAlgorithm from a dict
static_routing_algorithm_from_dict = StaticRoutingAlgorithm.from_dict(static_routing_algorithm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


