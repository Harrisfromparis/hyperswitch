# PlatformAccountCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_name** | **str** |  | 

## Example

```python
from hyperswitch.models.platform_account_create_request import PlatformAccountCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformAccountCreateRequest from a JSON string
platform_account_create_request_instance = PlatformAccountCreateRequest.from_json(json)
# print the JSON string representation of the object
print(PlatformAccountCreateRequest.to_json())

# convert the object into a dict
platform_account_create_request_dict = platform_account_create_request_instance.to_dict()
# create an instance of PlatformAccountCreateRequest from a dict
platform_account_create_request_from_dict = PlatformAccountCreateRequest.from_dict(platform_account_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


