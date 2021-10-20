/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { AttributeDraftDTO, AttributeDTO, AttributeFilterResultDTO, AttributeSearchResultDTO, UpdateAttributeDTO, AttributeValueDraftDTO, AttributeValueDTO, AttributeValueMoveDTO } from '../../../models';

export const AttributesCreate = async (dto: AttributeDraftDTO): Promise<AttributeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AttributeDTO;
}

export const AttributesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeFilterResultDTO;
}

export const AttributesImport = async (dto: AttributeDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributesSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<AttributeSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeSearchResultDTO;
}

export const AttributesGetByName = async (name: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<AttributeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/name=${encodeURIComponent(name)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeDTO;
}

export const AttributesUpdateByName = async (name: string, dto: UpdateAttributeDTO): Promise<AttributeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/name=${encodeURIComponent(name)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AttributeDTO;
}

export const AttributesDeleteByName = async (name: string): Promise<AttributeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/name=${encodeURIComponent(name)}`,
        method: 'DELETE',
    });
    return (response as unknown) as AttributeDTO;
}

export const AttributesGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeDTO;
}

export const AttributesUpdateById = async (id: string, dto: UpdateAttributeDTO): Promise<AttributeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AttributeDTO;
}

export const AttributesDeleteById = async (id: string): Promise<AttributeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as AttributeDTO;
}

export const AttributesAddAttributeValue = async (id: string, dto: AttributeValueDraftDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/${encodeURIComponent(id)}/value`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributesUpdateAttributeValue = async (id: string, dto: AttributeValueDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/${encodeURIComponent(id)}/value`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributesMoveAttributeValue = async (id: string, dto: AttributeValueMoveDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/${encodeURIComponent(id)}/value/move`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributesDeleteAttributeValue = async (id: string, value: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attributes/${encodeURIComponent(id)}/value/${encodeURIComponent(value)}`,
        method: 'DELETE',
    });
    
}

