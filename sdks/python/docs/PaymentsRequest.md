# PaymentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The primary amount for the payment, provided in the lowest denomination of the specified currency (e.g., 6540 for $65.40 USD). This field is mandatory for creating a payment. | [optional] 
**order_tax_amount** | **int** | Total tax amount applicable to the order, in the lowest denomination of the currency. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**amount_to_capture** | **int** | The amount to be captured from the user&#39;s payment method, in the lowest denomination. If not provided, and &#x60;capture_method&#x60; is &#x60;automatic&#x60;, the full payment &#x60;amount&#x60; will be captured. If &#x60;capture_method&#x60; is &#x60;manual&#x60;, this can be specified in the &#x60;/capture&#x60; call. Must be less than or equal to the authorized amount. | [optional] 
**shipping_cost** | **int** | The shipping cost for the payment. This is required for tax calculation in some regions. | [optional] 
**payment_id** | **str** | Optional. A merchant-provided unique identifier for the payment, contains 30 characters long (e.g., \&quot;pay_mbabizu24mvu3mela5njyhpit4\&quot;). If provided, it ensures idempotency for the payment creation request. If omitted, Hyperswitch generates a unique ID for the payment. | [optional] 
**merchant_id** | **str** | This is an identifier for the merchant account. This is inferred from the API key provided during the request | [optional] 
**routing** | [**StraightThroughAlgorithm**](StraightThroughAlgorithm.md) |  | [optional] 
**connector** | [**List[Connector]**](Connector.md) | This allows to manually select a connector with which the payment can go through. | [optional] 
**capture_method** | [**CaptureMethod**](CaptureMethod.md) |  | [optional] 
**authentication_type** | [**AuthenticationType**](AuthenticationType.md) |  | [optional] 
**billing** | [**Address**](Address.md) |  | [optional] 
**capture_on** | **datetime** | A timestamp (ISO 8601 code) that determines when the payment should be captured. Providing this field will automatically set &#x60;capture&#x60; to true | [optional] 
**confirm** | **bool** | If set to &#x60;true&#x60;, Hyperswitch attempts to confirm and authorize the payment immediately after creation, provided sufficient payment method details are included. If &#x60;false&#x60; or omitted (default is &#x60;false&#x60;), the payment is created with a status such as &#x60;requires_payment_method&#x60; or &#x60;requires_confirmation&#x60;, and a separate &#x60;POST /payments/{payment_id}/confirm&#x60; call is necessary to proceed with authorization. | [optional] [default to False]
**customer** | [**CustomerDetails**](CustomerDetails.md) |  | [optional] 
**customer_id** | **str** | The identifier for the customer | [optional] 
**email** | **str** | The customer&#39;s email address. This field will be deprecated soon, use the customer object instead | [optional] 
**name** | **str** | The customer&#39;s name. This field will be deprecated soon, use the customer object instead. | [optional] 
**phone** | **str** | The customer&#39;s phone number This field will be deprecated soon, use the customer object instead | [optional] 
**phone_country_code** | **str** | The country code for the customer phone number This field will be deprecated soon, use the customer object instead | [optional] 
**off_session** | **bool** | Set to true to indicate that the customer is not in your checkout flow during this payment, and therefore is unable to authenticate. This parameter is intended for scenarios where you collect card details and charge them later. When making a recurring payment by passing a mandate_id, this parameter is mandatory | [optional] 
**description** | **str** | An arbitrary string attached to the payment. Often useful for displaying to users or for your own internal record-keeping. | [optional] 
**return_url** | **str** | The URL to redirect the customer to after they complete the payment process or authentication. This is crucial for flows that involve off-site redirection (e.g., 3DS, some bank redirects, wallet payments). | [optional] 
**setup_future_usage** | [**FutureUsage**](FutureUsage.md) |  | [optional] 
**payment_method_data** | [**PaymentMethodDataRequest**](PaymentMethodDataRequest.md) |  | [optional] 
**payment_method** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**payment_token** | **str** | As Hyperswitch tokenises the sensitive details about the payments method, it provides the payment_token as a reference to a stored payment method, ensuring that the sensitive details are not exposed in any manner. | [optional] 
**card_cvc** | **str** | This is used along with the payment_token field while collecting during saved card payments. This field will be deprecated soon, use the payment_method_data.card_token object instead | [optional] 
**shipping** | [**Address**](Address.md) |  | [optional] 
**statement_descriptor_name** | **str** | For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters. | [optional] 
**statement_descriptor_suffix** | **str** | Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor. | [optional] 
**order_details** | [**List[OrderDetailsWithAmount]**](OrderDetailsWithAmount.md) | Use this object to capture the details about the different products for which the payment is being made. The sum of amount across different products here should be equal to the overall payment amount | [optional] 
**client_secret** | **str** | It&#39;s a token used for client side verification. | [optional] 
**mandate_data** | [**MandateData**](MandateData.md) |  | [optional] 
**customer_acceptance** | [**CustomerAcceptance**](CustomerAcceptance.md) |  | [optional] 
**mandate_id** | **str** | A unique identifier to link the payment to a mandate. To do Recurring payments after a mandate has been created, pass the mandate_id instead of payment_method_data | [optional] 
**browser_info** | [**BrowserInformation**](BrowserInformation.md) |  | [optional] 
**payment_experience** | [**PaymentExperience**](PaymentExperience.md) |  | [optional] 
**payment_method_type** | [**PaymentMethodType**](PaymentMethodType.md) |  | [optional] 
**business_country** | [**CountryAlpha2**](CountryAlpha2.md) |  | [optional] 
**business_label** | **str** | Business label of the merchant for this payment. To be deprecated soon. Pass the profile_id instead | [optional] 
**merchant_connector_details** | [**MerchantConnectorDetailsWrap**](MerchantConnectorDetailsWrap.md) |  | [optional] 
**allowed_payment_method_types** | [**List[PaymentMethodType]**](PaymentMethodType.md) | Use this parameter to restrict the Payment Method Types to show for a given PaymentIntent | [optional] 
**business_sub_label** | **str** | Business sub label for the payment | [optional] 
**retry_action** | [**RetryAction**](RetryAction.md) |  | [optional] 
**metadata** | **object** | You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. Metadata is useful for storing additional, structured information on an object. | [optional] 
**connector_metadata** | [**ConnectorMetadata**](ConnectorMetadata.md) |  | [optional] 
**feature_metadata** | [**FeatureMetadata**](FeatureMetadata.md) |  | [optional] 
**payment_link** | **bool** | Whether to generate the payment link for this payment or not (if applicable) | [optional] [default to False]
**payment_link_config** | [**PaymentCreatePaymentLinkConfig**](PaymentCreatePaymentLinkConfig.md) |  | [optional] 
**payment_link_config_id** | **str** | Custom payment link config id set at business profile, send only if business_specific_configs is configured | [optional] 
**profile_id** | **str** | The business profile to be used for this payment, if not passed the default business profile associated with the merchant account will be used. It is mandatory in case multiple business profiles have been set up. | [optional] 
**surcharge_details** | [**RequestSurchargeDetails**](RequestSurchargeDetails.md) |  | [optional] 
**payment_type** | [**PaymentType**](PaymentType.md) |  | [optional] 
**request_incremental_authorization** | **bool** | Request an incremental authorization, i.e., increase the authorized amount on a confirmed payment before you capture it. | [optional] 
**session_expiry** | **int** | Will be used to expire client secret after certain amount of time to be supplied in seconds (900) for 15 mins | [optional] 
**frm_metadata** | **object** | Additional data related to some frm(Fraud Risk Management) connectors | [optional] 
**request_external_three_ds_authentication** | **bool** | Whether to perform external authentication (if applicable) | [optional] 
**recurring_details** | [**RecurringDetails**](RecurringDetails.md) |  | [optional] 
**split_payments** | [**SplitPaymentsRequest**](SplitPaymentsRequest.md) |  | [optional] 
**request_extended_authorization** | **bool** | Optional boolean value to extent authorization period of this payment  capture method must be manual or manual_multiple | [optional] [default to False]
**merchant_order_reference_id** | **str** | Your unique identifier for this payment or order. This ID helps you reconcile payments on your system. If provided, it is passed to the connector if supported. | [optional] 
**skip_external_tax_calculation** | **bool** | Whether to calculate tax for this payment intent | [optional] 
**psd2_sca_exemption_type** | [**ScaExemptionType**](ScaExemptionType.md) |  | [optional] 
**ctp_service_details** | [**CtpServiceDetails**](CtpServiceDetails.md) |  | [optional] 
**force_3ds_challenge** | **bool** | Indicates if 3ds challenge is forced | [optional] 
**threeds_method_comp_ind** | [**ThreeDsCompletionIndicator**](ThreeDsCompletionIndicator.md) |  | [optional] 
**is_iframe_redirection_enabled** | **bool** | Indicates if the redirection has to open in the iframe | [optional] 
**all_keys_required** | **bool** | If enabled, provides whole connector response | [optional] 
**payment_channel** | [**PaymentChannel**](PaymentChannel.md) |  | [optional] 
**tax_status** | [**TaxStatus**](TaxStatus.md) |  | [optional] 
**discount_amount** | **int** | Total amount of the discount you have applied to the order or transaction. | [optional] 
**shipping_amount_tax** | **int** | This Unit struct represents MinorUnit in which core amount works | [optional] 
**duty_amount** | **int** | This Unit struct represents MinorUnit in which core amount works | [optional] 
**order_date** | **datetime** | Date the payer placed the order. | [optional] 
**enable_partial_authorization** | **bool** | Allow partial authorization for this payment | [optional] 

## Example

```python
from hyperswitch.models.payments_request import PaymentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentsRequest from a JSON string
payments_request_instance = PaymentsRequest.from_json(json)
# print the JSON string representation of the object
print(PaymentsRequest.to_json())

# convert the object into a dict
payments_request_dict = payments_request_instance.to_dict()
# create an instance of PaymentsRequest from a dict
payments_request_from_dict = PaymentsRequest.from_dict(payments_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


