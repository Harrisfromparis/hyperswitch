# hyperswitch.3DSDecisionRuleApi

All URIs are relative to *https://sandbox.hyperswitch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**execute_3_ds_decision_rule**](3DSDecisionRuleApi.md#execute_3_ds_decision_rule) | **POST** /three_ds_decision/execute | 3DS Decision - Execute


# **execute_3_ds_decision_rule**
> ThreeDsDecisionRuleExecuteResponse execute_3_ds_decision_rule(three_ds_decision_rule_execute_request)

3DS Decision - Execute

### Example

* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.three_ds_decision_rule_execute_request import ThreeDsDecisionRuleExecuteRequest
from hyperswitch.models.three_ds_decision_rule_execute_response import ThreeDsDecisionRuleExecuteResponse
from hyperswitch.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sandbox.hyperswitch.io
# See configuration.py for a list of all supported configuration parameters.
configuration = hyperswitch.Configuration(
    host = "https://sandbox.hyperswitch.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.3DSDecisionRuleApi(api_client)
    three_ds_decision_rule_execute_request = hyperswitch.ThreeDsDecisionRuleExecuteRequest() # ThreeDsDecisionRuleExecuteRequest | 

    try:
        # 3DS Decision - Execute
        api_response = api_instance.execute_3_ds_decision_rule(three_ds_decision_rule_execute_request)
        print("The response of 3DSDecisionRuleApi->execute_3_ds_decision_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 3DSDecisionRuleApi->execute_3_ds_decision_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **three_ds_decision_rule_execute_request** | [**ThreeDsDecisionRuleExecuteRequest**](ThreeDsDecisionRuleExecuteRequest.md)|  | 

### Return type

[**ThreeDsDecisionRuleExecuteResponse**](ThreeDsDecisionRuleExecuteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 3DS Decision Rule Executed Successfully |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

