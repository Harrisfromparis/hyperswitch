# PlatformAccountCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_id** | **str** |  | 
**org_name** | **str** |  | [optional] 
**org_type** | [**OrganizationType**](OrganizationType.md) |  | 
**merchant_id** | **str** |  | 
**merchant_account_type** | [**MerchantAccountType**](MerchantAccountType.md) |  | 

## Example

```python
from hyperswitch.models.platform_account_create_response import PlatformAccountCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformAccountCreateResponse from a JSON string
platform_account_create_response_instance = PlatformAccountCreateResponse.from_json(json)
# print the JSON string representation of the object
print(PlatformAccountCreateResponse.to_json())

# convert the object into a dict
platform_account_create_response_dict = platform_account_create_response_instance.to_dict()
# create an instance of PlatformAccountCreateResponse from a dict
platform_account_create_response_from_dict = PlatformAccountCreateResponse.from_dict(platform_account_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


