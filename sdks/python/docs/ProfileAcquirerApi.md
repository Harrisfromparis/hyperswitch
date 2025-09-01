# hyperswitch.ProfileAcquirerApi

All URIs are relative to *https://sandbox.hyperswitch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_a_profile_acquirer**](ProfileAcquirerApi.md#create_a_profile_acquirer) | **POST** /profile_acquirers | Profile Acquirer - Create
[**update_a_profile_acquirer**](ProfileAcquirerApi.md#update_a_profile_acquirer) | **POST** /profile_acquirers/{profile_id}/{profile_acquirer_id} | Profile Acquirer - Update


# **create_a_profile_acquirer**
> ProfileAcquirerResponse create_a_profile_acquirer(profile_acquirer_create)

Profile Acquirer - Create

Create a new Profile Acquirer for accessing our APIs from your servers.

### Example

* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.profile_acquirer_create import ProfileAcquirerCreate
from hyperswitch.models.profile_acquirer_response import ProfileAcquirerResponse
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
    api_instance = hyperswitch.ProfileAcquirerApi(api_client)
    profile_acquirer_create = hyperswitch.ProfileAcquirerCreate() # ProfileAcquirerCreate | 

    try:
        # Profile Acquirer - Create
        api_response = api_instance.create_a_profile_acquirer(profile_acquirer_create)
        print("The response of ProfileAcquirerApi->create_a_profile_acquirer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileAcquirerApi->create_a_profile_acquirer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_acquirer_create** | [**ProfileAcquirerCreate**](ProfileAcquirerCreate.md)|  | 

### Return type

[**ProfileAcquirerResponse**](ProfileAcquirerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile Acquirer created |  -  |
**400** | Invalid data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_a_profile_acquirer**
> ProfileAcquirerResponse update_a_profile_acquirer(profile_id, profile_acquirer_id, profile_acquirer_update)

Profile Acquirer - Update

Update a Profile Acquirer for accessing our APIs from your servers.

### Example

* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.profile_acquirer_response import ProfileAcquirerResponse
from hyperswitch.models.profile_acquirer_update import ProfileAcquirerUpdate
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
    api_instance = hyperswitch.ProfileAcquirerApi(api_client)
    profile_id = 'profile_id_example' # str | The unique identifier for the Profile
    profile_acquirer_id = 'profile_acquirer_id_example' # str | The unique identifier for the Profile Acquirer
    profile_acquirer_update = hyperswitch.ProfileAcquirerUpdate() # ProfileAcquirerUpdate | 

    try:
        # Profile Acquirer - Update
        api_response = api_instance.update_a_profile_acquirer(profile_id, profile_acquirer_id, profile_acquirer_update)
        print("The response of ProfileAcquirerApi->update_a_profile_acquirer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileAcquirerApi->update_a_profile_acquirer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The unique identifier for the Profile | 
 **profile_acquirer_id** | **str**| The unique identifier for the Profile Acquirer | 
 **profile_acquirer_update** | [**ProfileAcquirerUpdate**](ProfileAcquirerUpdate.md)|  | 

### Return type

[**ProfileAcquirerResponse**](ProfileAcquirerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile Acquirer updated |  -  |
**400** | Invalid data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

