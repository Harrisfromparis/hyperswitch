# RoutingEvaluateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**output** | **object** |  | 
**evaluated_output** | [**List[RoutableConnectorChoice]**](RoutableConnectorChoice.md) |  | 
**eligible_connectors** | [**List[RoutableConnectorChoice]**](RoutableConnectorChoice.md) |  | 

## Example

```python
from hyperswitch.models.routing_evaluate_response import RoutingEvaluateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingEvaluateResponse from a JSON string
routing_evaluate_response_instance = RoutingEvaluateResponse.from_json(json)
# print the JSON string representation of the object
print(RoutingEvaluateResponse.to_json())

# convert the object into a dict
routing_evaluate_response_dict = routing_evaluate_response_instance.to_dict()
# create an instance of RoutingEvaluateResponse from a dict
routing_evaluate_response_from_dict = RoutingEvaluateResponse.from_dict(routing_evaluate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


