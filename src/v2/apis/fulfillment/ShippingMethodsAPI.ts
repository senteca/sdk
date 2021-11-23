/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ShippingMethodDraftDTO, ShippingMethodDTO, ShippingMethodFilterResultDTO } from '../../../models';

export const ShippingMethodsCreate = async (dto: ShippingMethodDraftDTO): Promise<ShippingMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-methods`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingMethodDTO;
}

export const ShippingMethodsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ShippingMethodFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-methods`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ShippingMethodFilterResultDTO;
}

export const ShippingMethodsGetById = async (id: string): Promise<ShippingMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-methods/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as ShippingMethodDTO;
}

export const ShippingMethodsUpdate = async (id: string, dto: ShippingMethodDraftDTO): Promise<ShippingMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-methods/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingMethodDTO;
}

export const ShippingMethodsDelete = async (id: string): Promise<ShippingMethodDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-methods/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ShippingMethodDTO;
}

