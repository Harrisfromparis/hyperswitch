# ThreeDsDecisionRuleExecuteRequest

Represents the request to execute a 3DS decision rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_id** | **str** | The ID of the routing algorithm to be executed. | 
**payment** | [**PaymentData**](PaymentData.md) |  | 
**payment_method** | [**PaymentMethodMetaData**](PaymentMethodMetaData.md) |  | [optional] 
**customer_device** | [**CustomerDeviceData**](CustomerDeviceData.md) |  | [optional] 
**issuer** | [**IssuerData**](IssuerData.md) |  | [optional] 
**acquirer** | [**AcquirerData**](AcquirerData.md) |  | [optional] 

## Example

```python
from hyperswitch.models.three_ds_decision_rule_execute_request import ThreeDsDecisionRuleExecuteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ThreeDsDecisionRuleExecuteRequest from a JSON string
three_ds_decision_rule_execute_request_instance = ThreeDsDecisionRuleExecuteRequest.from_json(json)
# print the JSON string representation of the object
print(ThreeDsDecisionRuleExecuteRequest.to_json())

# convert the object into a dict
three_ds_decision_rule_execute_request_dict = three_ds_decision_rule_execute_request_instance.to_dict()
# create an instance of ThreeDsDecisionRuleExecuteRequest from a dict
three_ds_decision_rule_execute_request_from_dict = ThreeDsDecisionRuleExecuteRequest.from_dict(three_ds_decision_rule_execute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


