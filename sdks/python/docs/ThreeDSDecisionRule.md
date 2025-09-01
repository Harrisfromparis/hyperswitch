# ThreeDSDecisionRule

Struct representing the output configuration for the 3DS Decision Rule Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | [**ThreeDSDecision**](ThreeDSDecision.md) |  | 

## Example

```python
from hyperswitch.models.three_ds_decision_rule import ThreeDSDecisionRule

# TODO update the JSON string below
json = "{}"
# create an instance of ThreeDSDecisionRule from a JSON string
three_ds_decision_rule_instance = ThreeDSDecisionRule.from_json(json)
# print the JSON string representation of the object
print(ThreeDSDecisionRule.to_json())

# convert the object into a dict
three_ds_decision_rule_dict = three_ds_decision_rule_instance.to_dict()
# create an instance of ThreeDSDecisionRule from a dict
three_ds_decision_rule_from_dict = ThreeDSDecisionRule.from_dict(three_ds_decision_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


