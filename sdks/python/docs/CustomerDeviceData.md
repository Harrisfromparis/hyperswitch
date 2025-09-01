# CustomerDeviceData

Represents data about the customer's device used in the 3DS decision rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform** | [**CustomerDevicePlatform**](CustomerDevicePlatform.md) |  | [optional] 
**device_type** | [**CustomerDeviceType**](CustomerDeviceType.md) |  | [optional] 
**display_size** | [**CustomerDeviceDisplaySize**](CustomerDeviceDisplaySize.md) |  | [optional] 

## Example

```python
from hyperswitch.models.customer_device_data import CustomerDeviceData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerDeviceData from a JSON string
customer_device_data_instance = CustomerDeviceData.from_json(json)
# print the JSON string representation of the object
print(CustomerDeviceData.to_json())

# convert the object into a dict
customer_device_data_dict = customer_device_data_instance.to_dict()
# create an instance of CustomerDeviceData from a dict
customer_device_data_from_dict = CustomerDeviceData.from_dict(customer_device_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


