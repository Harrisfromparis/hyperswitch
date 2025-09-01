# AuthenticationSyncRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_secret** | **str** | The client secret for this authentication. | 

## Example

```python
from hyperswitch.models.authentication_sync_request import AuthenticationSyncRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationSyncRequest from a JSON string
authentication_sync_request_instance = AuthenticationSyncRequest.from_json(json)
# print the JSON string representation of the object
print(AuthenticationSyncRequest.to_json())

# convert the object into a dict
authentication_sync_request_dict = authentication_sync_request_instance.to_dict()
# create an instance of AuthenticationSyncRequest from a dict
authentication_sync_request_from_dict = AuthenticationSyncRequest.from_dict(authentication_sync_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


