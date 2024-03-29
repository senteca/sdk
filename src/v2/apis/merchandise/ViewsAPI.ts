/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ViewDraftDTO, ViewDTO, ViewFilterResultDTO, ViewSearchResultDTO, SetCustomFieldDTO } from '../../../models';

export const ViewsCreate = async (dto: ViewDraftDTO): Promise<ViewDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ViewDTO;
}

export const ViewsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ViewFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ViewFilterResultDTO;
}

export const ViewsImport = async (dto: ViewDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ViewsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<ViewSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ViewSearchResultDTO;
}

export const ViewsGetByTag = async (tag: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<ViewFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/tag=${encodeURIComponent(tag)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ViewFilterResultDTO;
}

export const ViewsGetBySlug = async (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, unscopedFields?: string[] }): Promise<ViewDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/slug=${encodeURIComponent(slug)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ViewDTO;
}

export const ViewsGetByKey = async (key: string): Promise<ViewDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as ViewDTO;
}

export const ViewsGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<ViewDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ViewDTO;
}

export const ViewsUpdateById = async (id: string, dto: ViewDraftDTO): Promise<ViewDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ViewDTO;
}

export const ViewsDeleteById = async (id: string): Promise<ViewDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ViewDTO;
}

export const ViewsSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/views/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

