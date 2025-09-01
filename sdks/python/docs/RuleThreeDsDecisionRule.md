# RuleThreeDsDecisionRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**connector_selection** | [**ThreeDSDecision**](ThreeDSDecision.md) |  | 
**statements** | [**List[IfStatement]**](IfStatement.md) |  | 

## Example

```python
from hyperswitch.models.rule_three_ds_decision_rule import RuleThreeDsDecisionRule

# TODO update the JSON string below
json = "{}"
# create an instance of RuleThreeDsDecisionRule from a JSON string
rule_three_ds_decision_rule_instance = RuleThreeDsDecisionRule.from_json(json)
# print the JSON string representation of the object
print(RuleThreeDsDecisionRule.to_json())

# convert the object into a dict
rule_three_ds_decision_rule_dict = rule_three_ds_decision_rule_instance.to_dict()
# create an instance of RuleThreeDsDecisionRule from a dict
rule_three_ds_decision_rule_from_dict = RuleThreeDsDecisionRule.from_dict(rule_three_ds_decision_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


