# DeRoutableConnectorChoice

Routable Connector chosen for a payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_name** | [**RoutableConnectors**](RoutableConnectors.md) |  | 
**gateway_id** | **str** |  | 

## Example

```python
from hyperswitch.models.de_routable_connector_choice import DeRoutableConnectorChoice

# TODO update the JSON string below
json = "{}"
# create an instance of DeRoutableConnectorChoice from a JSON string
de_routable_connector_choice_instance = DeRoutableConnectorChoice.from_json(json)
# print the JSON string representation of the object
print(DeRoutableConnectorChoice.to_json())

# convert the object into a dict
de_routable_connector_choice_dict = de_routable_connector_choice_instance.to_dict()
# create an instance of DeRoutableConnectorChoice from a dict
de_routable_connector_choice_from_dict = DeRoutableConnectorChoice.from_dict(de_routable_connector_choice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


