# AdyenTestingData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holder_name** | **str** | Holder name to be sent to Adyen for a card payment(CIT) or a generic payment(MIT). This value overrides the values for card.card_holder_name and applies during both CIT and MIT payment transactions. | 

## Example

```python
from hyperswitch.models.adyen_testing_data import AdyenTestingData

# TODO update the JSON string below
json = "{}"
# create an instance of AdyenTestingData from a JSON string
adyen_testing_data_instance = AdyenTestingData.from_json(json)
# print the JSON string representation of the object
print(AdyenTestingData.to_json())

# convert the object into a dict
adyen_testing_data_dict = adyen_testing_data_instance.to_dict()
# create an instance of AdyenTestingData from a dict
adyen_testing_data_from_dict = AdyenTestingData.from_dict(adyen_testing_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


