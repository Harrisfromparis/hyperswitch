# RoutingEvaluateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** |  | 
**parameters** | **object** | Parameters that can be used in the routing evaluate request. eg: {\&quot;parameters\&quot;: { \&quot;payment_method\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;card\&quot;}, \&quot;payment_method_type\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;credit\&quot;}, \&quot;amount\&quot;: {\&quot;type\&quot;: \&quot;number\&quot;, \&quot;value\&quot;: 10}, \&quot;currency\&quot;: {\&quot;type\&quot;: \&quot;str_value\&quot;, \&quot;value\&quot;: \&quot;INR\&quot;}, \&quot;authentication_type\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;three_ds\&quot;}, \&quot;card_bin\&quot;: {\&quot;type\&quot;: \&quot;str_value\&quot;, \&quot;value\&quot;: \&quot;424242\&quot;}, \&quot;capture_method\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;scheduled\&quot;}, \&quot;business_country\&quot;: {\&quot;type\&quot;: \&quot;str_value\&quot;, \&quot;value\&quot;: \&quot;IN\&quot;}, \&quot;billing_country\&quot;: {\&quot;type\&quot;: \&quot;str_value\&quot;, \&quot;value\&quot;: \&quot;IN\&quot;}, \&quot;business_label\&quot;: {\&quot;type\&quot;: \&quot;str_value\&quot;, \&quot;value\&quot;: \&quot;business_label\&quot;}, \&quot;setup_future_usage\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;off_session\&quot;}, \&quot;card_network\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;visa\&quot;}, \&quot;payment_type\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;recurring_mandate\&quot;}, \&quot;mandate_type\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;single_use\&quot;}, \&quot;mandate_acceptance_type\&quot;: {\&quot;type\&quot;: \&quot;enum_variant\&quot;, \&quot;value\&quot;: \&quot;online\&quot;}, \&quot;metadata\&quot;:{\&quot;type\&quot;: \&quot;metadata_variant\&quot;, \&quot;value\&quot;: {\&quot;key\&quot;: \&quot;key1\&quot;, \&quot;value\&quot;: \&quot;value1\&quot;}} }} | 
**fallback_output** | [**List[DeRoutableConnectorChoice]**](DeRoutableConnectorChoice.md) |  | 

## Example

```python
from hyperswitch.models.routing_evaluate_request import RoutingEvaluateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingEvaluateRequest from a JSON string
routing_evaluate_request_instance = RoutingEvaluateRequest.from_json(json)
# print the JSON string representation of the object
print(RoutingEvaluateRequest.to_json())

# convert the object into a dict
routing_evaluate_request_dict = routing_evaluate_request_instance.to_dict()
# create an instance of RoutingEvaluateRequest from a dict
routing_evaluate_request_from_dict = RoutingEvaluateRequest.from_dict(routing_evaluate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


