# AcquirerDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_bin** | **str** | The bin of the card. | [optional] 
**acquirer_merchant_id** | **str** | The merchant id of the card. | [optional] 
**merchant_country_code** | **str** | The country code of the card. | [optional] 

## Example

```python
from hyperswitch.models.acquirer_details import AcquirerDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AcquirerDetails from a JSON string
acquirer_details_instance = AcquirerDetails.from_json(json)
# print the JSON string representation of the object
print(AcquirerDetails.to_json())

# convert the object into a dict
acquirer_details_dict = acquirer_details_instance.to_dict()
# create an instance of AcquirerDetails from a dict
acquirer_details_from_dict = AcquirerDetails.from_dict(acquirer_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


