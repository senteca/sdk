/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { OrderFilterResultDTO } from '../../models/OrderFilterResultDTO';
import { SendOrderDTO } from '../../models/SendOrderDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { ShippingModulesInfo } from '../../models/ShippingModulesInfo';
import { ShippingMethodsInfo } from '../../models/ShippingMethodsInfo';
import { StockLocationsInfo } from '../../models/StockLocationsInfo';

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

export const MyOrdersGetById = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyOrdersExportMyOrders = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-orders/export`,
        method: 'POST',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as any;
}

