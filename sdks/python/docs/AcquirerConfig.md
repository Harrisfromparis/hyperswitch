# AcquirerConfig

Acquirer configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_assigned_merchant_id** | **str** | The merchant id assigned by the acquirer | 
**merchant_name** | **str** | merchant name | 
**network** | **str** | Network provider | 
**acquirer_bin** | **str** | Acquirer bin | 
**acquirer_ica** | **str** | Acquirer ica provided by acquirer | [optional] 
**acquirer_fraud_rate** | **str** | Fraud rate for the particular acquirer configuration | 

## Example

```python
from hyperswitch.models.acquirer_config import AcquirerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AcquirerConfig from a JSON string
acquirer_config_instance = AcquirerConfig.from_json(json)
# print the JSON string representation of the object
print(AcquirerConfig.to_json())

# convert the object into a dict
acquirer_config_dict = acquirer_config_instance.to_dict()
# create an instance of AcquirerConfig from a dict
acquirer_config_from_dict = AcquirerConfig.from_dict(acquirer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


