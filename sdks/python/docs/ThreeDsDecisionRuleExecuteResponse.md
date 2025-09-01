# ThreeDsDecisionRuleExecuteResponse

Represents the response from executing a 3DS decision rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | [**ThreeDSDecision**](ThreeDSDecision.md) |  | 

## Example

```python
from hyperswitch.models.three_ds_decision_rule_execute_response import ThreeDsDecisionRuleExecuteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ThreeDsDecisionRuleExecuteResponse from a JSON string
three_ds_decision_rule_execute_response_instance = ThreeDsDecisionRuleExecuteResponse.from_json(json)
# print the JSON string representation of the object
print(ThreeDsDecisionRuleExecuteResponse.to_json())

# convert the object into a dict
three_ds_decision_rule_execute_response_dict = three_ds_decision_rule_execute_response_instance.to_dict()
# create an instance of ThreeDsDecisionRuleExecuteResponse from a dict
three_ds_decision_rule_execute_response_from_dict = ThreeDsDecisionRuleExecuteResponse.from_dict(three_ds_decision_rule_execute_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


