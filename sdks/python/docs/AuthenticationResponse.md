# AuthenticationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_id** | **str** | The unique identifier for this authentication. | 
**merchant_id** | **str** | This is an identifier for the merchant account. This is inferred from the API key provided during the request | 
**status** | [**AuthenticationStatus**](AuthenticationStatus.md) |  | 
**client_secret** | **str** | The client secret for this authentication, to be used for client-side operations. | [optional] 
**amount** | **int** | This Unit struct represents MinorUnit in which core amount works | 
**currency** | [**Currency**](Currency.md) |  | 
**authentication_connector** | [**AuthenticationConnectors**](AuthenticationConnectors.md) |  | [optional] 
**force_3ds_challenge** | **bool** | Whether 3DS challenge was forced. | [optional] 
**return_url** | **str** | The URL to which the user should be redirected after authentication, if provided. | [optional] 
**created_at** | **datetime** |  | [optional] 
**error_code** | **str** |  | [optional] 
**error_message** | **str** | If there was an error while calling the connector the error message is received here | [optional] 
**profile_id** | **str** | The business profile that is associated with this payment | [optional] 
**psd2_sca_exemption_type** | [**ScaExemptionType**](ScaExemptionType.md) |  | [optional] 
**acquirer_details** | [**AcquirerDetails**](AcquirerDetails.md) |  | [optional] 
**profile_acquirer_id** | **str** | Profile Acquirer ID get from profile acquirer configuration | [optional] 

## Example

```python
from hyperswitch.models.authentication_response import AuthenticationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationResponse from a JSON string
authentication_response_instance = AuthenticationResponse.from_json(json)
# print the JSON string representation of the object
print(AuthenticationResponse.to_json())

# convert the object into a dict
authentication_response_dict = authentication_response_instance.to_dict()
# create an instance of AuthenticationResponse from a dict
authentication_response_from_dict = AuthenticationResponse.from_dict(authentication_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


