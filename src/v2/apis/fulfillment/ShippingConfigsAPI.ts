/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ShippingConfigDraftDTO, ShippingConfigDTO, ShippingConfigFilterResultDTO, PatchDTO } from '../../../models';

export const ShippingConfigsCreate = async (dto: ShippingConfigDraftDTO): Promise<ShippingConfigDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-configs`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingConfigDTO;
}

export const ShippingConfigsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ShippingConfigFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-configs`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ShippingConfigFilterResultDTO;
}

export const ShippingConfigsGetById = async (id: string): Promise<ShippingConfigDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-configs/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as ShippingConfigDTO;
}

export const ShippingConfigsUpdate = async (id: string, dto: ShippingConfigDraftDTO): Promise<ShippingConfigDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-configs/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingConfigDTO;
}

export const ShippingConfigsDelete = async (id: string): Promise<ShippingConfigDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-configs/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ShippingConfigDTO;
}

export const ShippingConfigsGetHistoryById = async (id: string): Promise<PatchDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-configs/history/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as PatchDTO[];
}

