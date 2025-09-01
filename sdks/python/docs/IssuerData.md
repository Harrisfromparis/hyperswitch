# IssuerData

Represents data about the issuer used in the 3DS decision rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the issuer. | [optional] 
**country** | [**Country**](Country.md) |  | 

## Example

```python
from hyperswitch.models.issuer_data import IssuerData

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerData from a JSON string
issuer_data_instance = IssuerData.from_json(json)
# print the JSON string representation of the object
print(IssuerData.to_json())

# convert the object into a dict
issuer_data_dict = issuer_data_instance.to_dict()
# create an instance of IssuerData from a dict
issuer_data_from_dict = IssuerData.from_dict(issuer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


