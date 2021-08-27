/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { StoreViewDraftDTO } from '@models';
import { StoreViewDTO } from '@models';
import { StoreViewFilterResultDTO } from '@models';

export const StoreViewsCreate = async (dto: StoreViewDraftDTO): Promise<StoreViewDTO> => {
    const response = await HttpClient.request({
        path: `/config/store-views`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as StoreViewDTO;
}

export const StoreViewsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StoreViewFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/store-views`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as StoreViewFilterResultDTO;
}

export const StoreViewsGetById = async (id: string): Promise<StoreViewDTO> => {
    const response = await HttpClient.request({
        path: `/config/store-views/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as StoreViewDTO;
}

export const StoreViewsUpdate = async (id: string, dto: StoreViewDraftDTO): Promise<StoreViewDTO> => {
    const response = await HttpClient.request({
        path: `/config/store-views/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as StoreViewDTO;
}

export const StoreViewsDelete = async (id: string): Promise<StoreViewDTO> => {
    const response = await HttpClient.request({
        path: `/config/store-views/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as StoreViewDTO;
}

