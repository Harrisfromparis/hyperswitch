# AuthenticationEligibilityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_method_data** | [**PaymentMethodData**](PaymentMethodData.md) |  | 
**payment_method** | [**PaymentMethod**](PaymentMethod.md) |  | 
**client_secret** | **str** | Optional secret value used to identify and authorize the client making the request. This can help ensure that the payment session is secure and valid. | [optional] 
**profile_id** | **str** | Optional identifier for the business profile associated with the payment. This determines which configurations, rules, and branding are applied to the transaction. | [optional] 
**billing** | [**Address**](Address.md) |  | [optional] 
**shipping** | [**Address**](Address.md) |  | [optional] 
**browser_information** | [**BrowserInformation**](BrowserInformation.md) |  | [optional] 
**email** | **str** | Optional email address of the customer. Used for customer identification, communication, and possibly for 3DS or fraud checks. | [optional] 

## Example

```python
from hyperswitch.models.authentication_eligibility_request import AuthenticationEligibilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationEligibilityRequest from a JSON string
authentication_eligibility_request_instance = AuthenticationEligibilityRequest.from_json(json)
# print the JSON string representation of the object
print(AuthenticationEligibilityRequest.to_json())

# convert the object into a dict
authentication_eligibility_request_dict = authentication_eligibility_request_instance.to_dict()
# create an instance of AuthenticationEligibilityRequest from a dict
authentication_eligibility_request_from_dict = AuthenticationEligibilityRequest.from_dict(authentication_eligibility_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


