/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { PriceListDraftDTO,PriceListDTO,PriceListFilterResultDTO } from '../../../models';

export const PriceListsCreate = async (dto: PriceListDraftDTO): Promise<PriceListDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/price-lists`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PriceListDTO;
}

export const PriceListsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<PriceListFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/price-lists`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as PriceListFilterResultDTO;
}

export const PriceListsGetByKey = async (key: string): Promise<PriceListDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/price-lists/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as PriceListDTO;
}

export const PriceListsGetById = async (id: string): Promise<PriceListDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/price-lists/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as PriceListDTO;
}

export const PriceListsUpdate = async (id: string, dto: PriceListDraftDTO): Promise<PriceListDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/price-lists/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PriceListDTO;
}

export const PriceListsDelete = async (id: string): Promise<PriceListDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/price-lists/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as PriceListDTO;
}

