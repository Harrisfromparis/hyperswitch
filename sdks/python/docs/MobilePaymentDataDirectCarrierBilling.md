# MobilePaymentDataDirectCarrierBilling


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msisdn** | **str** | The phone number of the user | 
**client_uid** | **str** | Unique user id | [optional] 

## Example

```python
from hyperswitch.models.mobile_payment_data_direct_carrier_billing import MobilePaymentDataDirectCarrierBilling

# TODO update the JSON string below
json = "{}"
# create an instance of MobilePaymentDataDirectCarrierBilling from a JSON string
mobile_payment_data_direct_carrier_billing_instance = MobilePaymentDataDirectCarrierBilling.from_json(json)
# print the JSON string representation of the object
print(MobilePaymentDataDirectCarrierBilling.to_json())

# convert the object into a dict
mobile_payment_data_direct_carrier_billing_dict = mobile_payment_data_direct_carrier_billing_instance.to_dict()
# create an instance of MobilePaymentDataDirectCarrierBilling from a dict
mobile_payment_data_direct_carrier_billing_from_dict = MobilePaymentDataDirectCarrierBilling.from_dict(mobile_payment_data_direct_carrier_billing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


