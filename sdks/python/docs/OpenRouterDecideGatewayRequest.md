# OpenRouterDecideGatewayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_info** | [**PaymentInfo**](PaymentInfo.md) |  | 
**merchant_id** | **str** |  | 
**eligible_gateway_list** | **List[str]** |  | [optional] 
**ranking_algorithm** | [**RankingAlgorithm**](RankingAlgorithm.md) |  | [optional] 
**elimination_enabled** | **bool** |  | [optional] 

## Example

```python
from hyperswitch.models.open_router_decide_gateway_request import OpenRouterDecideGatewayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OpenRouterDecideGatewayRequest from a JSON string
open_router_decide_gateway_request_instance = OpenRouterDecideGatewayRequest.from_json(json)
# print the JSON string representation of the object
print(OpenRouterDecideGatewayRequest.to_json())

# convert the object into a dict
open_router_decide_gateway_request_dict = open_router_decide_gateway_request_instance.to_dict()
# create an instance of OpenRouterDecideGatewayRequest from a dict
open_router_decide_gateway_request_from_dict = OpenRouterDecideGatewayRequest.from_dict(open_router_decide_gateway_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


