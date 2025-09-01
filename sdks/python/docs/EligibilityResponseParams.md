# EligibilityResponseParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**three_ds_data** | [**ThreeDsData**](ThreeDsData.md) |  | 

## Example

```python
from hyperswitch.models.eligibility_response_params import EligibilityResponseParams

# TODO update the JSON string below
json = "{}"
# create an instance of EligibilityResponseParams from a JSON string
eligibility_response_params_instance = EligibilityResponseParams.from_json(json)
# print the JSON string representation of the object
print(EligibilityResponseParams.to_json())

# convert the object into a dict
eligibility_response_params_dict = eligibility_response_params_instance.to_dict()
# create an instance of EligibilityResponseParams from a dict
eligibility_response_params_from_dict = EligibilityResponseParams.from_dict(eligibility_response_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


