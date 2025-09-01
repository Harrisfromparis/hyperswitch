# UpdateScorePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **str** |  | 
**gateway** | **str** |  | 
**status** | [**TxnStatus**](TxnStatus.md) |  | 
**payment_id** | **str** |  | 

## Example

```python
from hyperswitch.models.update_score_payload import UpdateScorePayload

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateScorePayload from a JSON string
update_score_payload_instance = UpdateScorePayload.from_json(json)
# print the JSON string representation of the object
print(UpdateScorePayload.to_json())

# convert the object into a dict
update_score_payload_dict = update_score_payload_instance.to_dict()
# create an instance of UpdateScorePayload from a dict
update_score_payload_from_dict = UpdateScorePayload.from_dict(update_score_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


