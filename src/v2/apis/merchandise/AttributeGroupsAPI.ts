/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { AttributeGroupDraftDTO, AttributeGroupDTO, AttributeGroupFilterResultDTO, AttributeGroupSearchResultDTO, UpdateAttributeGroupDTO, AttributeGroupValueDraftDTO, AttributeGroupValueDTO, AttributeGroupValueMoveDTO } from '../../../models';

export const AttributeGroupsCreate = async (dto: AttributeGroupDraftDTO): Promise<AttributeGroupDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AttributeGroupDTO;
}

export const AttributeGroupsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeGroupFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeGroupFilterResultDTO;
}

export const AttributeGroupsImport = async (dto: AttributeGroupDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributeGroupsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<AttributeGroupSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeGroupSearchResultDTO;
}

export const AttributeGroupsGetByName = async (name: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeGroupDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/name=${encodeURIComponent(name)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeGroupDTO;
}

export const AttributeGroupsUpdateByName = async (name: string, dto: UpdateAttributeGroupDTO): Promise<AttributeGroupDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/name=${encodeURIComponent(name)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AttributeGroupDTO;
}

export const AttributeGroupsDeleteByName = async (name: string): Promise<AttributeGroupDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/name=${encodeURIComponent(name)}`,
        method: 'DELETE',
    });
    return (response as unknown) as AttributeGroupDTO;
}

export const AttributeGroupsGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeGroupDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as AttributeGroupDTO;
}

export const AttributeGroupsUpdateById = async (id: string, dto: UpdateAttributeGroupDTO): Promise<AttributeGroupDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AttributeGroupDTO;
}

export const AttributeGroupsDeleteById = async (id: string): Promise<AttributeGroupDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as AttributeGroupDTO;
}

export const AttributeGroupsAddAttributeGroupValue = async (id: string, dto: AttributeGroupValueDraftDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributeGroupsUpdateAttributeGroupValue = async (id: string, dto: AttributeGroupValueDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributeGroupsMoveAttributeGroupValue = async (id: string, dto: AttributeGroupValueMoveDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value/move`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const AttributeGroupsDeleteAttributeGroupValue = async (id: string, value: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value/${encodeURIComponent(value)}`,
        method: 'DELETE',
    });
    
}

