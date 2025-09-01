# hyperswitch.PlatformApi

All URIs are relative to *https://sandbox.hyperswitch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_a_platform_account**](PlatformApi.md#create_a_platform_account) | **POST** /user/create_platform | Platform - Create


# **create_a_platform_account**
> PlatformAccountCreateResponse create_a_platform_account(platform_account_create_request)

Platform - Create

Create a new platform account

### Example

* Bearer (JWT) Authentication (jwt_key):

```python
import hyperswitch
from hyperswitch.models.platform_account_create_request import PlatformAccountCreateRequest
from hyperswitch.models.platform_account_create_response import PlatformAccountCreateResponse
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

# Configure Bearer authorization (JWT): jwt_key
configuration = hyperswitch.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.PlatformApi(api_client)
    platform_account_create_request = {"organization_name":"organization_abc"} # PlatformAccountCreateRequest | Create a platform account with organization_name

    try:
        # Platform - Create
        api_response = api_instance.create_a_platform_account(platform_account_create_request)
        print("The response of PlatformApi->create_a_platform_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformApi->create_a_platform_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platform_account_create_request** | [**PlatformAccountCreateRequest**](PlatformAccountCreateRequest.md)| Create a platform account with organization_name | 

### Return type

[**PlatformAccountCreateResponse**](PlatformAccountCreateResponse.md)

### Authorization

[jwt_key](../README.md#jwt_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Platform Account Created |  -  |
**400** | Invalid data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

