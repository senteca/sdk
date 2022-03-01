/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CategoryDraftDTO, CategoryDTO, CategoryFilterResultDTO, CategoryImportDraftDTO, CategorySearchResultDTO, SetCustomFieldDTO } from '../../../models';

export const CategoriesCreate = async (dto: CategoryDraftDTO): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CategoryFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CategoryFilterResultDTO;
}

export const CategoriesImport = async (dto: CategoryImportDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const CategoriesSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<CategorySearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CategorySearchResultDTO;
}

export const CategoriesGetBySlug = async (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, unscopedFields?: string[] }): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/slug=${encodeURIComponent(slug)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesGetByExternalId = async (externalId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesUpdateByExternalId = async (externalId: string, dto: CategoryDraftDTO): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesDeleteByExternalId = async (externalId: string): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesUpdateById = async (id: string, dto: CategoryDraftDTO): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesDeleteById = async (id: string): Promise<CategoryDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CategoryDTO;
}

export const CategoriesSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const CategoriesSetAddonData = async (id: string, dto: string[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/categories/${encodeURIComponent(id)}/addon-data`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

