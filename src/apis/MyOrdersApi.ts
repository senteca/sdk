/* tslint:disable */
/* eslint-disable */
/**
 * Auth
 * Auth API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    MakePaymentResponse,
    MakePaymentResponseFromJSON,
    MakePaymentResponseToJSON,
    OrderDTO,
    OrderDTOFromJSON,
    OrderDTOToJSON,
    VerifyPaymentResultRequest,
    VerifyPaymentResultRequestFromJSON,
    VerifyPaymentResultRequestToJSON,
} from '../models';

export interface GetMyOrdersRequest {
    filter?: Array<string>;
    sort?: Array<string>;
    expand?: Array<string>;
    project?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface PayMyOrderRequest {
    orderId: string;
    paymentId: string;
}

export interface VerifyMyPaymentResultRequest {
    verifyPaymentResultRequest: VerifyPaymentResultRequest;
}

/**
 * 
 */
export class MyOrdersApi extends runtime.BaseAPI {

    /**
     * Creates a new order from current customer\'s cart.
     */
    async createMyOrderFromCartRaw(): Promise<runtime.ApiResponse<OrderDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fulfillment/my/orders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new order from current customer\'s cart.
     */
    async createMyOrderFromCart(): Promise<OrderDTO> {
        const response = await this.createMyOrderFromCartRaw();
        return await response.value();
    }

    /**
     * Lists all orders per current customer.
     */
    async getMyOrdersRaw(requestParameters: GetMyOrdersRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.project) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fulfillment/my/orders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all orders per current customer.
     */
    async getMyOrders(requestParameters: GetMyOrdersRequest): Promise<void> {
        await this.getMyOrdersRaw(requestParameters);
    }

    /**
     * Creates a new payment transaction per order id and payment id.
     */
    async payMyOrderRaw(requestParameters: PayMyOrderRequest): Promise<runtime.ApiResponse<MakePaymentResponse>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling payMyOrder.');
        }

        if (requestParameters.paymentId === null || requestParameters.paymentId === undefined) {
            throw new runtime.RequiredError('paymentId','Required parameter requestParameters.paymentId was null or undefined when calling payMyOrder.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fulfillment/my/orders/{orderId}/payments/{paymentId}/pay`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))).replace(`{${"paymentId"}}`, encodeURIComponent(String(requestParameters.paymentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MakePaymentResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new payment transaction per order id and payment id.
     */
    async payMyOrder(requestParameters: PayMyOrderRequest): Promise<MakePaymentResponse> {
        const response = await this.payMyOrderRaw(requestParameters);
        return await response.value();
    }

    /**
     * Verifies payment transaction result.
     */
    async verifyMyPaymentResultRaw(requestParameters: VerifyMyPaymentResultRequest): Promise<runtime.ApiResponse<MakePaymentResponse>> {
        if (requestParameters.verifyPaymentResultRequest === null || requestParameters.verifyPaymentResultRequest === undefined) {
            throw new runtime.RequiredError('verifyPaymentResultRequest','Required parameter requestParameters.verifyPaymentResultRequest was null or undefined when calling verifyMyPaymentResult.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fulfillment/my/orders/verify-payment-result`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyPaymentResultRequestToJSON(requestParameters.verifyPaymentResultRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MakePaymentResponseFromJSON(jsonValue));
    }

    /**
     * Verifies payment transaction result.
     */
    async verifyMyPaymentResult(requestParameters: VerifyMyPaymentResultRequest): Promise<MakePaymentResponse> {
        const response = await this.verifyMyPaymentResultRaw(requestParameters);
        return await response.value();
    }

}
