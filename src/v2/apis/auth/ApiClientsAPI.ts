/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ApiClientFilterResultDTO,ApiClientDraftDTO,ApiClientDTO } from '../../../models';

export const ApiClientsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ApiClientFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/auth/api-clients`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as ApiClientFilterResultDTO;
}

export const ApiClientsCreate = async (dto: ApiClientDraftDTO): Promise<ApiClientDTO> => {
    const response = await HttpClient.request({
        path: `/auth/api-clients`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ApiClientDTO;
}

export const ApiClientsGetById = async (id: string): Promise<ApiClientDTO> => {
    const response = await HttpClient.request({
        path: `/auth/api-clients/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ApiClientDTO;
}

export const ApiClientsUpdate = async (id: string, dto: ApiClientDraftDTO): Promise<ApiClientDTO> => {
    const response = await HttpClient.request({
        path: `/auth/api-clients/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ApiClientDTO;
}

export const ApiClientsDelete = async (id: string): Promise<ApiClientDTO> => {
    const response = await HttpClient.request({
        path: `/auth/api-clients/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as ApiClientDTO;
}

