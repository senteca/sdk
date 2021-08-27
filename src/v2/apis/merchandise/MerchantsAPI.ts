/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { MerchantFilterResultDTO, MerchantDraftDTO, MerchantDTO } from '../../../models';

export const MerchantsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<MerchantFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/merchants`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as MerchantFilterResultDTO;
}

export const MerchantsCreate = async (dto: MerchantDraftDTO): Promise<MerchantDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/merchants`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as MerchantDTO;
}

export const MerchantsGetByKey = async (key: string): Promise<MerchantDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/merchants/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as MerchantDTO;
}

export const MerchantsGetById = async (id: string): Promise<MerchantDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/merchants/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as MerchantDTO;
}

export const MerchantsUpdate = async (id: string, dto: MerchantDraftDTO): Promise<MerchantDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/merchants/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as MerchantDTO;
}

export const MerchantsDelete = async (id: string): Promise<MerchantDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/merchants/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as MerchantDTO;
}

