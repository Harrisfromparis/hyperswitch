# DecisionEngineSRSubLevelInputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_method_type** | **str** |  | [optional] 
**payment_method** | **str** |  | [optional] 
**latency_threshold** | **float** |  | [optional] 
**bucket_size** | **int** |  | [optional] 
**hedging_percent** | **float** |  | [optional] 
**lower_reset_factor** | **float** |  | [optional] 
**upper_reset_factor** | **float** |  | [optional] 
**gateway_extra_score** | [**List[DecisionEngineGatewayWiseExtraScore]**](DecisionEngineGatewayWiseExtraScore.md) |  | [optional] 

## Example

```python
from hyperswitch.models.decision_engine_sr_sub_level_input_config import DecisionEngineSRSubLevelInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DecisionEngineSRSubLevelInputConfig from a JSON string
decision_engine_sr_sub_level_input_config_instance = DecisionEngineSRSubLevelInputConfig.from_json(json)
# print the JSON string representation of the object
print(DecisionEngineSRSubLevelInputConfig.to_json())

# convert the object into a dict
decision_engine_sr_sub_level_input_config_dict = decision_engine_sr_sub_level_input_config_instance.to_dict()
# create an instance of DecisionEngineSRSubLevelInputConfig from a dict
decision_engine_sr_sub_level_input_config_from_dict = DecisionEngineSRSubLevelInputConfig.from_dict(decision_engine_sr_sub_level_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


