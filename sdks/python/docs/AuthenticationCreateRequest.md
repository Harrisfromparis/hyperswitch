# AuthenticationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_id** | **str** | The unique identifier for this authentication. | [optional] 
**profile_id** | **str** | The business profile that is associated with this authentication | [optional] 
**customer** | [**CustomerDetails**](CustomerDetails.md) |  | [optional] 
**amount** | **int** | This Unit struct represents MinorUnit in which core amount works | 
**authentication_connector** | [**AuthenticationConnectors**](AuthenticationConnectors.md) |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | 
**return_url** | **str** | The URL to which the user should be redirected after authentication. | [optional] 
**force_3ds_challenge** | **bool** | Force 3DS challenge. | [optional] 
**psd2_sca_exemption_type** | [**ScaExemptionType**](ScaExemptionType.md) |  | [optional] 
**profile_acquirer_id** | **str** | Profile Acquirer ID get from profile acquirer configuration | [optional] 
**acquirer_details** | [**AcquirerDetails**](AcquirerDetails.md) |  | [optional] 

## Example

```python
from hyperswitch.models.authentication_create_request import AuthenticationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationCreateRequest from a JSON string
authentication_create_request_instance = AuthenticationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AuthenticationCreateRequest.to_json())

# convert the object into a dict
authentication_create_request_dict = authentication_create_request_instance.to_dict()
# create an instance of AuthenticationCreateRequest from a dict
authentication_create_request_from_dict = AuthenticationCreateRequest.from_dict(authentication_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


