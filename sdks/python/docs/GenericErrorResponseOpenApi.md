# GenericErrorResponseOpenApi


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_type** | **str** |  | 
**message** | **str** |  | 
**code** | **str** |  | 

## Example

```python
from hyperswitch.models.generic_error_response_open_api import GenericErrorResponseOpenApi

# TODO update the JSON string below
json = "{}"
# create an instance of GenericErrorResponseOpenApi from a JSON string
generic_error_response_open_api_instance = GenericErrorResponseOpenApi.from_json(json)
# print the JSON string representation of the object
print(GenericErrorResponseOpenApi.to_json())

# convert the object into a dict
generic_error_response_open_api_dict = generic_error_response_open_api_instance.to_dict()
# create an instance of GenericErrorResponseOpenApi from a dict
generic_error_response_open_api_from_dict = GenericErrorResponseOpenApi.from_dict(generic_error_response_open_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


