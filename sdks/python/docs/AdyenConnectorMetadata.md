# AdyenConnectorMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**testing** | [**AdyenTestingData**](AdyenTestingData.md) |  | 

## Example

```python
from hyperswitch.models.adyen_connector_metadata import AdyenConnectorMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AdyenConnectorMetadata from a JSON string
adyen_connector_metadata_instance = AdyenConnectorMetadata.from_json(json)
# print the JSON string representation of the object
print(AdyenConnectorMetadata.to_json())

# convert the object into a dict
adyen_connector_metadata_dict = adyen_connector_metadata_instance.to_dict()
# create an instance of AdyenConnectorMetadata from a dict
adyen_connector_metadata_from_dict = AdyenConnectorMetadata.from_dict(adyen_connector_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


