# DecideGatewayResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decided_gateway** | **str** |  | [optional] 
**gateway_priority_map** | **object** |  | [optional] 
**filter_wise_gateways** | **object** |  | [optional] 
**priority_logic_tag** | **str** |  | [optional] 
**routing_approach** | **str** |  | [optional] 
**gateway_before_evaluation** | **str** |  | [optional] 
**priority_logic_output** | [**PriorityLogicOutput**](PriorityLogicOutput.md) |  | [optional] 
**reset_approach** | **str** |  | [optional] 
**routing_dimension** | **str** |  | [optional] 
**routing_dimension_level** | **str** |  | [optional] 
**is_scheduled_outage** | **bool** |  | [optional] 
**is_dynamic_mga_enabled** | **bool** |  | [optional] 
**gateway_mga_id_map** | **object** |  | [optional] 

## Example

```python
from hyperswitch.models.decide_gateway_response import DecideGatewayResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DecideGatewayResponse from a JSON string
decide_gateway_response_instance = DecideGatewayResponse.from_json(json)
# print the JSON string representation of the object
print(DecideGatewayResponse.to_json())

# convert the object into a dict
decide_gateway_response_dict = decide_gateway_response_instance.to_dict()
# create an instance of DecideGatewayResponse from a dict
decide_gateway_response_from_dict = DecideGatewayResponse.from_dict(decide_gateway_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


