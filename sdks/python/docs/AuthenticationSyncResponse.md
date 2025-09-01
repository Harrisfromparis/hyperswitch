# AuthenticationSyncResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_id** | **str** | The unique identifier for this authentication. | 
**merchant_id** | **str** | This is an identifier for the merchant account. | 
**status** | [**AuthenticationStatus**](AuthenticationStatus.md) |  | 
**client_secret** | **str** | The client secret for this authentication. | [optional] 
**amount** | **int** | This Unit struct represents MinorUnit in which core amount works | 
**currency** | [**Currency**](Currency.md) |  | 
**authentication_connector** | [**AuthenticationConnectors**](AuthenticationConnectors.md) |  | [optional] 
**force_3ds_challenge** | **bool** | Whether 3DS challenge was forced. | [optional] 
**return_url** | **str** | The URL to which the user should be redirected after authentication. | [optional] 
**created_at** | **datetime** |  | 
**profile_id** | **str** | The business profile that is associated with this authentication. | 
**psd2_sca_exemption_type** | [**ScaExemptionType**](ScaExemptionType.md) |  | [optional] 
**acquirer_details** | [**AcquirerDetails**](AcquirerDetails.md) |  | [optional] 
**threeds_server_transaction_id** | **str** | The unique identifier from the 3DS server. | [optional] 
**maximum_supported_3ds_version** | **str** | The maximum supported 3DS version. | [optional] 
**connector_authentication_id** | **str** | The unique identifier from the connector. | [optional] 
**three_ds_method_data** | **str** | The data required to perform the 3DS method. | [optional] 
**three_ds_method_url** | **str** | The URL for the 3DS method. | [optional] 
**message_version** | **str** | The version of the message. | [optional] 
**connector_metadata** | **object** | The metadata for this authentication. | [optional] 
**directory_server_id** | **str** | The unique identifier for the directory server. | [optional] 
**billing** | [**Address**](Address.md) |  | [optional] 
**shipping** | [**Address**](Address.md) |  | [optional] 
**browser_information** | [**BrowserInformation**](BrowserInformation.md) |  | [optional] 
**email** | **str** | Email. | [optional] 
**trans_status** | [**TransactionStatus**](TransactionStatus.md) |  | [optional] 
**acs_url** | **str** | Access Server URL for challenge submission. | [optional] 
**challenge_request** | **str** | Challenge request to be sent to acs_url. | [optional] 
**acs_reference_number** | **str** | Unique identifier assigned by EMVCo. | [optional] 
**acs_trans_id** | **str** | Unique identifier assigned by the ACS. | [optional] 
**acs_signed_content** | **str** | JWS object created by the ACS for the ARes message. | [optional] 
**three_ds_requestor_url** | **str** | Three DS Requestor URL. | [optional] 
**three_ds_requestor_app_url** | **str** | Merchant app URL for OOB authentication. | [optional] 
**authentication_value** | **str** | The authentication value for this authentication, only available in case of server to server request. Unavailable in case of client request due to security concern. | [optional] 
**eci** | **str** | ECI value for this authentication, only available in case of server to server request. Unavailable in case of client request due to security concern. | [optional] 
**error_message** | **str** | Error message if any. | [optional] 
**error_code** | **str** | Error code if any. | [optional] 
**profile_acquirer_id** | **str** | Profile Acquirer ID | [optional] 

## Example

```python
from hyperswitch.models.authentication_sync_response import AuthenticationSyncResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationSyncResponse from a JSON string
authentication_sync_response_instance = AuthenticationSyncResponse.from_json(json)
# print the JSON string representation of the object
print(AuthenticationSyncResponse.to_json())

# convert the object into a dict
authentication_sync_response_dict = authentication_sync_response_instance.to_dict()
# create an instance of AuthenticationSyncResponse from a dict
authentication_sync_response_from_dict = AuthenticationSyncResponse.from_dict(authentication_sync_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


