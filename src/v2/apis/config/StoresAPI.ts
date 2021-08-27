/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { StoreDraftDTO } from '@models';
import { StoreDTO } from '@models';
import { StoreFilterResultDTO } from '@models';

export const StoresCreate = async (dto: StoreDraftDTO): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/config/stores`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as StoreDTO;
}

export const StoresFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StoreFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/stores`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as StoreFilterResultDTO;
}

export const StoresGetByKey = async (key: string): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/config/stores/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as StoreDTO;
}

export const StoresGetById = async (id: string): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/config/stores/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as StoreDTO;
}

export const StoresUpdate = async (id: string, dto: StoreDraftDTO): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/config/stores/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as StoreDTO;
}

export const StoresDelete = async (id: string): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/config/stores/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as StoreDTO;
}

