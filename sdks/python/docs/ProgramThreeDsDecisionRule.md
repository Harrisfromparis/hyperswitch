# ProgramThreeDsDecisionRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_selection** | [**ThreeDSDecisionRule**](ThreeDSDecisionRule.md) |  | 
**rules** | [**RuleThreeDsDecisionRule**](RuleThreeDsDecisionRule.md) |  | 
**metadata** | **Dict[str, object]** |  | 

## Example

```python
from hyperswitch.models.program_three_ds_decision_rule import ProgramThreeDsDecisionRule

# TODO update the JSON string below
json = "{}"
# create an instance of ProgramThreeDsDecisionRule from a JSON string
program_three_ds_decision_rule_instance = ProgramThreeDsDecisionRule.from_json(json)
# print the JSON string representation of the object
print(ProgramThreeDsDecisionRule.to_json())

# convert the object into a dict
program_three_ds_decision_rule_dict = program_three_ds_decision_rule_instance.to_dict()
# create an instance of ProgramThreeDsDecisionRule from a dict
program_three_ds_decision_rule_from_dict = ProgramThreeDsDecisionRule.from_dict(program_three_ds_decision_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


