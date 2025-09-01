# ValueTypeOneOf6


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**value** | **List[str]** | Similar to NumberArray but for enum variants eg: payment.method.cardtype &#x3D; (debit, credit) | 

## Example

```python
from hyperswitch.models.value_type_one_of6 import ValueTypeOneOf6

# TODO update the JSON string below
json = "{}"
# create an instance of ValueTypeOneOf6 from a JSON string
value_type_one_of6_instance = ValueTypeOneOf6.from_json(json)
# print the JSON string representation of the object
print(ValueTypeOneOf6.to_json())

# convert the object into a dict
value_type_one_of6_dict = value_type_one_of6_instance.to_dict()
# create an instance of ValueTypeOneOf6 from a dict
value_type_one_of6_from_dict = ValueTypeOneOf6.from_dict(value_type_one_of6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


