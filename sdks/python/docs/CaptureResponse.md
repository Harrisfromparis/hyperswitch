# CaptureResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_id** | **str** | A unique identifier for this specific capture operation. | 
**status** | [**CaptureStatus**](CaptureStatus.md) |  | 
**amount** | **int** | The capture amount. Amount for the payment in lowest denomination of the currency. (i.e) in cents for USD denomination, in paisa for INR denomination etc., | 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**connector** | **str** | The name of the payment connector that processed this capture. | 
**authorized_attempt_id** | **str** | The ID of the payment attempt that was successfully authorized and subsequently captured by this operation. | 
**connector_capture_id** | **str** | A unique identifier for this capture provided by the connector | [optional] 
**capture_sequence** | **int** | Sequence number of this capture, in the series of captures made for the parent attempt | 
**error_message** | **str** | A human-readable message from the connector explaining why this capture operation failed, if applicable. | [optional] 
**error_code** | **str** | The error code returned by the connector if this capture operation failed. This code is connector-specific. | [optional] 
**error_reason** | **str** | A more detailed reason from the connector explaining the capture failure, if available. | [optional] 
**reference_id** | **str** | The connector&#39;s own reference or transaction ID for this specific capture operation. Useful for reconciliation. | [optional] 

## Example

```python
from hyperswitch.models.capture_response import CaptureResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CaptureResponse from a JSON string
capture_response_instance = CaptureResponse.from_json(json)
# print the JSON string representation of the object
print(CaptureResponse.to_json())

# convert the object into a dict
capture_response_dict = capture_response_instance.to_dict()
# create an instance of CaptureResponse from a dict
capture_response_from_dict = CaptureResponse.from_dict(capture_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


