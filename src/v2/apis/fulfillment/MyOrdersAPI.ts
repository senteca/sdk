/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { OrderFilterResultDTO, SendOrderDTO, OrderDTO, ShippingModulesInfo, ShippingMethodsInfo, StockLocationsInfo, PaymentMethodDTO, PaymentMethodsInfo, PlatformMethodUpdateDTO, ReturnRequestDTO } from '../../../models';

export const MyOrdersFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as OrderFilterResultDTO;
}

export const MyOrdersCreate = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: SendOrderDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyOrdersGetAvailableShippingModules = async (): Promise<ShippingModulesInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/available-shipping-modules`,
        method: 'GET',
    });
    return (response as unknown) as ShippingModulesInfo;
}

export const MyOrdersGetAvailableShippingMethods = async (): Promise<ShippingMethodsInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/available-shipping-methods`,
        method: 'GET',
    });
    return (response as unknown) as ShippingMethodsInfo;
}

export const MyOrdersGetAvailableStockLocations = async (): Promise<StockLocationsInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/available-stock-locations`,
        method: 'GET',
    });
    return (response as unknown) as StockLocationsInfo;
}

export const MyOrdersGetAvailablePlatformPaymentMethods = async (): Promise<PaymentMethodDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/available-platform-payment-methods`,
        method: 'GET',
    });
    return (response as unknown) as PaymentMethodDTO[];
}

export const MyOrdersExportMyOrders = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, columnDelimiter?: string, recordDelimiter?: string, prettyKeys?: boolean, prettyValues?: boolean }): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/export`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as any;
}

export const MyOrdersGetById = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as OrderDTO;
}

export const MyOrdersGetPaymentMethods = async (id: string): Promise<PaymentMethodsInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/${encodeURIComponent(id)}/payment-methods`,
        method: 'GET',
    });
    return (response as unknown) as PaymentMethodsInfo;
}

export const MyOrdersSetPlatformPaymentMethod = async (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/${encodeURIComponent(id)}/platform-payment-method`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyOrdersGetPlatformPaymentMethod = async (id: string): Promise<PaymentMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/${encodeURIComponent(id)}/platform-payment-method`,
        method: 'GET',
    });
    return (response as unknown) as PaymentMethodDTO;
}

export const MyOrdersReOrder = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/${encodeURIComponent(id)}/re-order`,
        method: 'POST',
    });
    return (response as unknown) as OrderDTO;
}

export const MyOrdersSubmitReturnRequest = async (dto: ReturnRequestDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/submit-return-request`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

