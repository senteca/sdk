/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CollectionDraftDTO } from '../../models/CollectionDraftDTO';
import { CollectionDTO } from '../../models/CollectionDTO';
import { CollectionFilterResultDTO } from '../../models/CollectionFilterResultDTO';
import { CollectionSearchResultDTO } from '../../models/CollectionSearchResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export const CollectionsCreate = async (dto: CollectionDraftDTO): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CollectionFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CollectionFilterResultDTO;
}

export const CollectionsImport = async (dto: CollectionDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/import`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

export const CollectionsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<CollectionSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/search`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CollectionSearchResultDTO;
}

export const CollectionsGetBySlug = async (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/slug=${encodeURIComponent(slug)}`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsGetByExternalId = async (externalId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/externalId=${encodeURIComponent(externalId)}`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsUpdateByExternalId = async (externalId: string, dto: CollectionDraftDTO): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/externalId=${encodeURIComponent(externalId)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsDeleteByExternalId = async (externalId: string): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/externalId=${encodeURIComponent(externalId)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsUpdateById = async (id: string, dto: CollectionDraftDTO): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsDeleteById = async (id: string): Promise<CollectionDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as CollectionDTO;
}

export const CollectionsSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/collections/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

