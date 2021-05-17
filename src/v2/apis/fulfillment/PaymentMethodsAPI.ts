/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { PaymentMethodDraftDTO } from '../../models/PaymentMethodDraftDTO';
import { PaymentMethodDTO } from '../../models/PaymentMethodDTO';
import { PaymentMethodFilterResultDTO } from '../../models/PaymentMethodFilterResultDTO';

export const PaymentMethodsCreate = async (dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/payment-methods`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PaymentMethodDTO;
}

export const PaymentMethodsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<PaymentMethodFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/payment-methods`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as PaymentMethodFilterResultDTO;
}

export const PaymentMethodsGetByKey = async (key: string): Promise<PaymentMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/payment-methods/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as PaymentMethodDTO;
}

export const PaymentMethodsGetById = async (id: string): Promise<PaymentMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/payment-methods/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as PaymentMethodDTO;
}

export const PaymentMethodsUpdate = async (id: string, dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/payment-methods/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PaymentMethodDTO;
}

export const PaymentMethodsDelete = async (id: string): Promise<PaymentMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/payment-methods/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as PaymentMethodDTO;
}

