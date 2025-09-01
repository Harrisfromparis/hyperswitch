# DecisionEngineSuccessRateData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_latency_threshold** | **float** |  | [optional] 
**default_bucket_size** | **int** |  | [optional] 
**default_hedging_percent** | **float** |  | [optional] 
**default_lower_reset_factor** | **float** |  | [optional] 
**default_upper_reset_factor** | **float** |  | [optional] 
**default_gateway_extra_score** | [**List[DecisionEngineGatewayWiseExtraScore]**](DecisionEngineGatewayWiseExtraScore.md) |  | [optional] 
**sub_level_input_config** | [**List[DecisionEngineSRSubLevelInputConfig]**](DecisionEngineSRSubLevelInputConfig.md) |  | [optional] 

## Example

```python
from hyperswitch.models.decision_engine_success_rate_data import DecisionEngineSuccessRateData

# TODO update the JSON string below
json = "{}"
# create an instance of DecisionEngineSuccessRateData from a JSON string
decision_engine_success_rate_data_instance = DecisionEngineSuccessRateData.from_json(json)
# print the JSON string representation of the object
print(DecisionEngineSuccessRateData.to_json())

# convert the object into a dict
decision_engine_success_rate_data_dict = decision_engine_success_rate_data_instance.to_dict()
# create an instance of DecisionEngineSuccessRateData from a dict
decision_engine_success_rate_data_from_dict = DecisionEngineSuccessRateData.from_dict(decision_engine_success_rate_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


