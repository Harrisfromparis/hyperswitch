# AuthenticationEligibilityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_id** | **str** | The unique identifier for this authentication. | 
**next_action** | [**NextAction**](NextAction.md) |  | 
**status** | [**AuthenticationStatus**](AuthenticationStatus.md) |  | 
**eligibility_response_params** | [**EligibilityResponseParams**](EligibilityResponseParams.md) |  | [optional] 
**connector_metadata** | **object** | The metadata for this authentication. | 
**profile_id** | **str** | The unique identifier for this authentication. | 
**error_message** | **str** | The error message for this authentication. | [optional] 
**error_code** | **str** | The error code for this authentication. | [optional] 
**authentication_connector** | [**AuthenticationConnectors**](AuthenticationConnectors.md) |  | [optional] 
**billing** | [**Address**](Address.md) |  | [optional] 
**shipping** | [**Address**](Address.md) |  | [optional] 
**browser_information** | [**BrowserInformation**](BrowserInformation.md) |  | [optional] 
**email** | **str** | Email | [optional] 
**acquirer_details** | [**AcquirerDetails**](AcquirerDetails.md) |  | [optional] 

## Example

```python
from hyperswitch.models.authentication_eligibility_response import AuthenticationEligibilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationEligibilityResponse from a JSON string
authentication_eligibility_response_instance = AuthenticationEligibilityResponse.from_json(json)
# print the JSON string representation of the object
print(AuthenticationEligibilityResponse.to_json())

# convert the object into a dict
authentication_eligibility_response_dict = authentication_eligibility_response_instance.to_dict()
# create an instance of AuthenticationEligibilityResponse from a dict
authentication_eligibility_response_from_dict = AuthenticationEligibilityResponse.from_dict(authentication_eligibility_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


