# ThreeDsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**three_ds_server_transaction_id** | **str** | The unique identifier for this authentication from the 3DS server. | 
**maximum_supported_3ds_version** | **str** | The maximum supported 3DS version. | 
**connector_authentication_id** | **str** | The unique identifier for this authentication from the connector. | 
**three_ds_method_data** | **str** | The data required to perform the 3DS method. | 
**three_ds_method_url** | **str** | The URL to which the user should be redirected after authentication. | 
**message_version** | **str** | The version of the message. | 
**directory_server_id** | **str** | The unique identifier for this authentication. | 

## Example

```python
from hyperswitch.models.three_ds_data import ThreeDsData

# TODO update the JSON string below
json = "{}"
# create an instance of ThreeDsData from a JSON string
three_ds_data_instance = ThreeDsData.from_json(json)
# print the JSON string representation of the object
print(ThreeDsData.to_json())

# convert the object into a dict
three_ds_data_dict = three_ds_data_instance.to_dict()
# create an instance of ThreeDsData from a dict
three_ds_data_from_dict = ThreeDsData.from_dict(three_ds_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


