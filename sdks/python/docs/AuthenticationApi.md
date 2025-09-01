# hyperswitch.AuthenticationApi

All URIs are relative to *https://sandbox.hyperswitch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_an_authentication**](AuthenticationApi.md#create_an_authentication) | **POST** /authentication | Authentication - Create


# **create_an_authentication**
> AuthenticationResponse create_an_authentication(authentication_create_request)

Authentication - Create

Create a new authentication for accessing our APIs from your servers.


### Example

* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.authentication_create_request import AuthenticationCreateRequest
from hyperswitch.models.authentication_response import AuthenticationResponse
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
    api_instance = hyperswitch.AuthenticationApi(api_client)
    authentication_create_request = hyperswitch.AuthenticationCreateRequest() # AuthenticationCreateRequest | 

    try:
        # Authentication - Create
        api_response = api_instance.create_an_authentication(authentication_create_request)
        print("The response of AuthenticationApi->create_an_authentication:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->create_an_authentication: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authentication_create_request** | [**AuthenticationCreateRequest**](AuthenticationCreateRequest.md)|  | 

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authentication created |  -  |
**400** | Invalid data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

