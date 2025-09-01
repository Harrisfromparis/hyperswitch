# BHNGiftCardDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | The gift card or account number | 
**pin** | **str** | The security PIN for gift cards requiring it | 
**cvv2** | **str** | The CVV2 code for Open Loop/VPLN products | 
**expiration_date** | **str** | The expiration date in MMYYYY format for Open Loop/VPLN products | 

## Example

```python
from hyperswitch.models.bhn_gift_card_details import BHNGiftCardDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BHNGiftCardDetails from a JSON string
bhn_gift_card_details_instance = BHNGiftCardDetails.from_json(json)
# print the JSON string representation of the object
print(BHNGiftCardDetails.to_json())

# convert the object into a dict
bhn_gift_card_details_dict = bhn_gift_card_details_instance.to_dict()
# create an instance of BHNGiftCardDetails from a dict
bhn_gift_card_details_from_dict = BHNGiftCardDetails.from_dict(bhn_gift_card_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


