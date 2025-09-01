# hyperswitch.RoutingApi

All URIs are relative to *https://sandbox.hyperswitch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_a_routing_config**](RoutingApi.md#activate_a_routing_config) | **POST** /routing/{routing_algorithm_id}/activate | Routing - Activate config
[**create_a_routing_config**](RoutingApi.md#create_a_routing_config) | **POST** /routing | Routing - Create
[**deactivate_a_routing_config**](RoutingApi.md#deactivate_a_routing_config) | **POST** /routing/deactivate | Routing - Deactivate
[**evaluate_routing_rules**](RoutingApi.md#evaluate_routing_rules) | **POST** /routing/evaluate | Routing - Evaluate
[**evaluate_routing_rules__alternative**](RoutingApi.md#evaluate_routing_rules__alternative) | **POST** /routing/rule/evaluate | Routing - Rule Evaluate
[**list_routing_configs**](RoutingApi.md#list_routing_configs) | **GET** /routing | Routing - List
[**retrieve_a_routing_config**](RoutingApi.md#retrieve_a_routing_config) | **GET** /routing/{routing_algorithm_id} | Routing - Retrieve
[**retrieve_active_config**](RoutingApi.md#retrieve_active_config) | **GET** /routing/active | Routing - Retrieve Config
[**retrieve_default_configs_for_all_profiles**](RoutingApi.md#retrieve_default_configs_for_all_profiles) | **GET** /routing/default/profile | Routing - Retrieve Default For Profile
[**retrieve_default_fallback_config**](RoutingApi.md#retrieve_default_fallback_config) | **GET** /routing/default | Routing - Retrieve Default Config
[**toggle_contract_routing_algorithm**](RoutingApi.md#toggle_contract_routing_algorithm) | **POST** /account/{account_id}/business_profile/{profile_id}/dynamic_routing/contracts/toggle | Routing - Toggle Contract routing for profile
[**toggle_elimination_routing_algorithm**](RoutingApi.md#toggle_elimination_routing_algorithm) | **POST** /account/{account_id}/business_profile/{profile_id}/dynamic_routing/elimination/toggle | Routing - Toggle elimination routing for profile
[**toggle_success_based_dynamic_routing_algorithm**](RoutingApi.md#toggle_success_based_dynamic_routing_algorithm) | **POST** /account/{account_id}/business_profile/{profile_id}/dynamic_routing/success_based/toggle | Routing - Toggle success based dynamic routing for profile
[**update_contract_based_dynamic_routing_configs**](RoutingApi.md#update_contract_based_dynamic_routing_configs) | **PATCH** /account/{account_id}/business_profile/{profile_id}/dynamic_routing/contracts/config/{algorithm_id} | Routing - Update contract based dynamic routing config for profile
[**update_default_configs_for_all_profiles**](RoutingApi.md#update_default_configs_for_all_profiles) | **POST** /routing/default/profile/{profile_id} | Routing - Update Default For Profile
[**update_default_fallback_config**](RoutingApi.md#update_default_fallback_config) | **POST** /routing/default | Routing - Update Default Config
[**update_gateway_scores**](RoutingApi.md#update_gateway_scores) | **POST** /routing/feedback | Routing - Feedback
[**update_success_based_dynamic_routing_configs**](RoutingApi.md#update_success_based_dynamic_routing_configs) | **PATCH** /account/{account_id}/business_profile/{profile_id}/dynamic_routing/success_based/config/{algorithm_id} | Routing - Update success based dynamic routing config for profile


# **activate_a_routing_config**
> RoutingDictionaryRecord activate_a_routing_config(routing_algorithm_id)

Routing - Activate config

Activate a routing config

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    routing_algorithm_id = 'routing_algorithm_id_example' # str | The unique identifier for a config

    try:
        # Routing - Activate config
        api_response = api_instance.activate_a_routing_config(routing_algorithm_id)
        print("The response of RoutingApi->activate_a_routing_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->activate_a_routing_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routing_algorithm_id** | **str**| The unique identifier for a config | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing config activated |  -  |
**400** | Bad request |  -  |
**404** | Resource missing |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_a_routing_config**
> RoutingDictionaryRecord create_a_routing_config(routing_config_request)

Routing - Create

Create a routing config

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routing_config_request import RoutingConfigRequest
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    routing_config_request = hyperswitch.RoutingConfigRequest() # RoutingConfigRequest | 

    try:
        # Routing - Create
        api_response = api_instance.create_a_routing_config(routing_config_request)
        print("The response of RoutingApi->create_a_routing_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->create_a_routing_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routing_config_request** | [**RoutingConfigRequest**](RoutingConfigRequest.md)|  | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing config created |  -  |
**400** | Request body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_a_routing_config**
> RoutingDictionaryRecord deactivate_a_routing_config(routing_config_request)

Routing - Deactivate

Deactivates a routing config

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routing_config_request import RoutingConfigRequest
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    routing_config_request = hyperswitch.RoutingConfigRequest() # RoutingConfigRequest | 

    try:
        # Routing - Deactivate
        api_response = api_instance.deactivate_a_routing_config(routing_config_request)
        print("The response of RoutingApi->deactivate_a_routing_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->deactivate_a_routing_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routing_config_request** | [**RoutingConfigRequest**](RoutingConfigRequest.md)|  | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deactivated routing config |  -  |
**400** | Malformed request |  -  |
**403** | Malformed request |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **evaluate_routing_rules**
> DecideGatewayResponse evaluate_routing_rules(open_router_decide_gateway_request)

Routing - Evaluate

Evaluate routing rules

### Example

* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.decide_gateway_response import DecideGatewayResponse
from hyperswitch.models.open_router_decide_gateway_request import OpenRouterDecideGatewayRequest
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
    api_instance = hyperswitch.RoutingApi(api_client)
    open_router_decide_gateway_request = hyperswitch.OpenRouterDecideGatewayRequest() # OpenRouterDecideGatewayRequest | 

    try:
        # Routing - Evaluate
        api_response = api_instance.evaluate_routing_rules(open_router_decide_gateway_request)
        print("The response of RoutingApi->evaluate_routing_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->evaluate_routing_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **open_router_decide_gateway_request** | [**OpenRouterDecideGatewayRequest**](OpenRouterDecideGatewayRequest.md)|  | 

### Return type

[**DecideGatewayResponse**](DecideGatewayResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing rules evaluated successfully |  -  |
**400** | Request body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **evaluate_routing_rules__alternative**
> RoutingEvaluateResponse evaluate_routing_rules__alternative(routing_evaluate_request)

Routing - Rule Evaluate

Evaluate routing rules

### Example

* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routing_evaluate_request import RoutingEvaluateRequest
from hyperswitch.models.routing_evaluate_response import RoutingEvaluateResponse
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
    api_instance = hyperswitch.RoutingApi(api_client)
    routing_evaluate_request = hyperswitch.RoutingEvaluateRequest() # RoutingEvaluateRequest | 

    try:
        # Routing - Rule Evaluate
        api_response = api_instance.evaluate_routing_rules__alternative(routing_evaluate_request)
        print("The response of RoutingApi->evaluate_routing_rules__alternative:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->evaluate_routing_rules__alternative: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routing_evaluate_request** | [**RoutingEvaluateRequest**](RoutingEvaluateRequest.md)|  | 

### Return type

[**RoutingEvaluateResponse**](RoutingEvaluateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing rules evaluated successfully |  -  |
**400** | Request body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_routing_configs**
> RoutingKind list_routing_configs(limit=limit, offset=offset, profile_id=profile_id)

Routing - List

List all routing configs

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routing_kind import RoutingKind
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    limit = 56 # int | The number of records to be returned (optional)
    offset = 56 # int | The record offset from which to start gathering of results (optional)
    profile_id = 'profile_id_example' # str | The unique identifier for a merchant profile (optional)

    try:
        # Routing - List
        api_response = api_instance.list_routing_configs(limit=limit, offset=offset, profile_id=profile_id)
        print("The response of RoutingApi->list_routing_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->list_routing_configs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The number of records to be returned | [optional] 
 **offset** | **int**| The record offset from which to start gathering of results | [optional] 
 **profile_id** | **str**| The unique identifier for a merchant profile | [optional] 

### Return type

[**RoutingKind**](RoutingKind.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched routing configs |  -  |
**404** | Resource missing |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_a_routing_config**
> MerchantRoutingAlgorithm retrieve_a_routing_config(routing_algorithm_id)

Routing - Retrieve

Retrieve a routing algorithm

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.merchant_routing_algorithm import MerchantRoutingAlgorithm
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    routing_algorithm_id = 'routing_algorithm_id_example' # str | The unique identifier for a config

    try:
        # Routing - Retrieve
        api_response = api_instance.retrieve_a_routing_config(routing_algorithm_id)
        print("The response of RoutingApi->retrieve_a_routing_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->retrieve_a_routing_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routing_algorithm_id** | **str**| The unique identifier for a config | 

### Return type

[**MerchantRoutingAlgorithm**](MerchantRoutingAlgorithm.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched routing config |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_active_config**
> LinkedRoutingConfigRetrieveResponse retrieve_active_config(profile_id=profile_id)

Routing - Retrieve Config

Retrieve active config

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.linked_routing_config_retrieve_response import LinkedRoutingConfigRetrieveResponse
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    profile_id = 'profile_id_example' # str | The unique identifier for a merchant profile (optional)

    try:
        # Routing - Retrieve Config
        api_response = api_instance.retrieve_active_config(profile_id=profile_id)
        print("The response of RoutingApi->retrieve_active_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->retrieve_active_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The unique identifier for a merchant profile | [optional] 

### Return type

[**LinkedRoutingConfigRetrieveResponse**](LinkedRoutingConfigRetrieveResponse.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved active config |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_default_configs_for_all_profiles**
> ProfileDefaultRoutingConfig retrieve_default_configs_for_all_profiles()

Routing - Retrieve Default For Profile

Retrieve default config for profiles

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.profile_default_routing_config import ProfileDefaultRoutingConfig
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)

    try:
        # Routing - Retrieve Default For Profile
        api_response = api_instance.retrieve_default_configs_for_all_profiles()
        print("The response of RoutingApi->retrieve_default_configs_for_all_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->retrieve_default_configs_for_all_profiles: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ProfileDefaultRoutingConfig**](ProfileDefaultRoutingConfig.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved default config |  -  |
**404** | Resource missing |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_default_fallback_config**
> List[RoutableConnectorChoice] retrieve_default_fallback_config()

Routing - Retrieve Default Config

Retrieve default fallback config

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routable_connector_choice import RoutableConnectorChoice
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)

    try:
        # Routing - Retrieve Default Config
        api_response = api_instance.retrieve_default_fallback_config()
        print("The response of RoutingApi->retrieve_default_fallback_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->retrieve_default_fallback_config: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[RoutableConnectorChoice]**](RoutableConnectorChoice.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved default config |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggle_contract_routing_algorithm**
> RoutingDictionaryRecord toggle_contract_routing_algorithm(account_id, profile_id, enable, contract_based_routing_config)

Routing - Toggle Contract routing for profile

Create a Contract based dynamic routing algorithm

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.contract_based_routing_config import ContractBasedRoutingConfig
from hyperswitch.models.dynamic_routing_features import DynamicRoutingFeatures
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    account_id = 'account_id_example' # str | Merchant id
    profile_id = 'profile_id_example' # str | Profile id under which Dynamic routing needs to be toggled
    enable = hyperswitch.DynamicRoutingFeatures() # DynamicRoutingFeatures | Feature to enable for contract based routing
    contract_based_routing_config = hyperswitch.ContractBasedRoutingConfig() # ContractBasedRoutingConfig | 

    try:
        # Routing - Toggle Contract routing for profile
        api_response = api_instance.toggle_contract_routing_algorithm(account_id, profile_id, enable, contract_based_routing_config)
        print("The response of RoutingApi->toggle_contract_routing_algorithm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->toggle_contract_routing_algorithm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Merchant id | 
 **profile_id** | **str**| Profile id under which Dynamic routing needs to be toggled | 
 **enable** | [**DynamicRoutingFeatures**](.md)| Feature to enable for contract based routing | 
 **contract_based_routing_config** | [**ContractBasedRoutingConfig**](ContractBasedRoutingConfig.md)|  | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing Algorithm created |  -  |
**400** | Request body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggle_elimination_routing_algorithm**
> RoutingDictionaryRecord toggle_elimination_routing_algorithm(account_id, profile_id, enable)

Routing - Toggle elimination routing for profile

Create a elimination based dynamic routing algorithm

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.dynamic_routing_features import DynamicRoutingFeatures
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    account_id = 'account_id_example' # str | Merchant id
    profile_id = 'profile_id_example' # str | Profile id under which Dynamic routing needs to be toggled
    enable = hyperswitch.DynamicRoutingFeatures() # DynamicRoutingFeatures | Feature to enable for elimination based routing

    try:
        # Routing - Toggle elimination routing for profile
        api_response = api_instance.toggle_elimination_routing_algorithm(account_id, profile_id, enable)
        print("The response of RoutingApi->toggle_elimination_routing_algorithm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->toggle_elimination_routing_algorithm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Merchant id | 
 **profile_id** | **str**| Profile id under which Dynamic routing needs to be toggled | 
 **enable** | [**DynamicRoutingFeatures**](.md)| Feature to enable for elimination based routing | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing Algorithm created |  -  |
**400** | Request body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggle_success_based_dynamic_routing_algorithm**
> RoutingDictionaryRecord toggle_success_based_dynamic_routing_algorithm(account_id, profile_id, enable)

Routing - Toggle success based dynamic routing for profile

Create a success based dynamic routing algorithm

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.dynamic_routing_features import DynamicRoutingFeatures
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    account_id = 'account_id_example' # str | Merchant id
    profile_id = 'profile_id_example' # str | Profile id under which Dynamic routing needs to be toggled
    enable = hyperswitch.DynamicRoutingFeatures() # DynamicRoutingFeatures | Feature to enable for success based routing

    try:
        # Routing - Toggle success based dynamic routing for profile
        api_response = api_instance.toggle_success_based_dynamic_routing_algorithm(account_id, profile_id, enable)
        print("The response of RoutingApi->toggle_success_based_dynamic_routing_algorithm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->toggle_success_based_dynamic_routing_algorithm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Merchant id | 
 **profile_id** | **str**| Profile id under which Dynamic routing needs to be toggled | 
 **enable** | [**DynamicRoutingFeatures**](.md)| Feature to enable for success based routing | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing Algorithm created |  -  |
**400** | Request body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_contract_based_dynamic_routing_configs**
> RoutingDictionaryRecord update_contract_based_dynamic_routing_configs(account_id, profile_id, algorithm_id, contract_based_routing_config)

Routing - Update contract based dynamic routing config for profile

Update contract based dynamic routing algorithm

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.contract_based_routing_config import ContractBasedRoutingConfig
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    account_id = 'account_id_example' # str | Merchant id
    profile_id = 'profile_id_example' # str | Profile id under which Dynamic routing needs to be toggled
    algorithm_id = 'algorithm_id_example' # str | Contract based routing algorithm id which was last activated to update the config
    contract_based_routing_config = hyperswitch.ContractBasedRoutingConfig() # ContractBasedRoutingConfig | 

    try:
        # Routing - Update contract based dynamic routing config for profile
        api_response = api_instance.update_contract_based_dynamic_routing_configs(account_id, profile_id, algorithm_id, contract_based_routing_config)
        print("The response of RoutingApi->update_contract_based_dynamic_routing_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_contract_based_dynamic_routing_configs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Merchant id | 
 **profile_id** | **str**| Profile id under which Dynamic routing needs to be toggled | 
 **algorithm_id** | **str**| Contract based routing algorithm id which was last activated to update the config | 
 **contract_based_routing_config** | [**ContractBasedRoutingConfig**](ContractBasedRoutingConfig.md)|  | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing Algorithm updated |  -  |
**400** | Update body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_default_configs_for_all_profiles**
> ProfileDefaultRoutingConfig update_default_configs_for_all_profiles(profile_id, routable_connector_choice)

Routing - Update Default For Profile

Update default config for profiles

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.profile_default_routing_config import ProfileDefaultRoutingConfig
from hyperswitch.models.routable_connector_choice import RoutableConnectorChoice
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    profile_id = 'profile_id_example' # str | The unique identifier for a profile
    routable_connector_choice = [hyperswitch.RoutableConnectorChoice()] # List[RoutableConnectorChoice] | 

    try:
        # Routing - Update Default For Profile
        api_response = api_instance.update_default_configs_for_all_profiles(profile_id, routable_connector_choice)
        print("The response of RoutingApi->update_default_configs_for_all_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_default_configs_for_all_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The unique identifier for a profile | 
 **routable_connector_choice** | [**List[RoutableConnectorChoice]**](RoutableConnectorChoice.md)|  | 

### Return type

[**ProfileDefaultRoutingConfig**](ProfileDefaultRoutingConfig.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated default config for profile |  -  |
**400** | Malformed request |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_default_fallback_config**
> List[RoutableConnectorChoice] update_default_fallback_config(routable_connector_choice)

Routing - Update Default Config

Update default fallback config

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routable_connector_choice import RoutableConnectorChoice
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    routable_connector_choice = [hyperswitch.RoutableConnectorChoice()] # List[RoutableConnectorChoice] | 

    try:
        # Routing - Update Default Config
        api_response = api_instance.update_default_fallback_config(routable_connector_choice)
        print("The response of RoutingApi->update_default_fallback_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_default_fallback_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routable_connector_choice** | [**List[RoutableConnectorChoice]**](RoutableConnectorChoice.md)|  | 

### Return type

[**List[RoutableConnectorChoice]**](RoutableConnectorChoice.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated default config |  -  |
**400** | Malformed request |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_gateway_scores**
> UpdateScoreResponse update_gateway_scores(update_score_payload)

Routing - Feedback

Update gateway scores for dynamic routing

### Example

* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.update_score_payload import UpdateScorePayload
from hyperswitch.models.update_score_response import UpdateScoreResponse
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
    api_instance = hyperswitch.RoutingApi(api_client)
    update_score_payload = hyperswitch.UpdateScorePayload() # UpdateScorePayload | 

    try:
        # Routing - Feedback
        api_response = api_instance.update_gateway_scores(update_score_payload)
        print("The response of RoutingApi->update_gateway_scores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_gateway_scores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_score_payload** | [**UpdateScorePayload**](UpdateScorePayload.md)|  | 

### Return type

[**UpdateScoreResponse**](UpdateScoreResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gateway score updated successfully |  -  |
**400** | Request body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_success_based_dynamic_routing_configs**
> RoutingDictionaryRecord update_success_based_dynamic_routing_configs(account_id, profile_id, algorithm_id, success_based_routing_config)

Routing - Update success based dynamic routing config for profile

Update success based dynamic routing algorithm

### Example

* Bearer (JWT) Authentication (jwt_key):
* Api Key Authentication (api_key):

```python
import hyperswitch
from hyperswitch.models.routing_dictionary_record import RoutingDictionaryRecord
from hyperswitch.models.success_based_routing_config import SuccessBasedRoutingConfig
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with hyperswitch.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hyperswitch.RoutingApi(api_client)
    account_id = 'account_id_example' # str | Merchant id
    profile_id = 'profile_id_example' # str | Profile id under which Dynamic routing needs to be toggled
    algorithm_id = 'algorithm_id_example' # str | Success based routing algorithm id which was last activated to update the config
    success_based_routing_config = hyperswitch.SuccessBasedRoutingConfig() # SuccessBasedRoutingConfig | 

    try:
        # Routing - Update success based dynamic routing config for profile
        api_response = api_instance.update_success_based_dynamic_routing_configs(account_id, profile_id, algorithm_id, success_based_routing_config)
        print("The response of RoutingApi->update_success_based_dynamic_routing_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_success_based_dynamic_routing_configs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Merchant id | 
 **profile_id** | **str**| Profile id under which Dynamic routing needs to be toggled | 
 **algorithm_id** | **str**| Success based routing algorithm id which was last activated to update the config | 
 **success_based_routing_config** | [**SuccessBasedRoutingConfig**](SuccessBasedRoutingConfig.md)|  | 

### Return type

[**RoutingDictionaryRecord**](RoutingDictionaryRecord.md)

### Authorization

[jwt_key](../README.md#jwt_key), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing Algorithm updated |  -  |
**400** | Update body is malformed |  -  |
**403** | Forbidden |  -  |
**404** | Resource missing |  -  |
**422** | Unprocessable request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

