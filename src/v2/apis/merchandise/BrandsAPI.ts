/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { BrandDraftDTO } from '@models';
import { BrandDTO } from '@models';
import { BrandFilterResultDTO } from '@models';
import { BrandImportDraftDTO } from '@models';
import { BrandSearchResultDTO } from '@models';
import { SetCustomFieldDTO } from '@models';

export const BrandsCreate = async (dto: BrandDraftDTO): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<BrandFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as BrandFilterResultDTO;
}

export const BrandsImport = async (dto: BrandImportDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/import`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

export const BrandsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<BrandSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/search`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as BrandSearchResultDTO;
}

export const BrandsGetBySlug = async (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/slug=${encodeURIComponent(slug)}`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsGetByExternalId = async (externalId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/externalId=${encodeURIComponent(externalId)}`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsUpdateByExternalId = async (externalId: string, dto: BrandDraftDTO): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/externalId=${encodeURIComponent(externalId)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsDeleteByExternalId = async (externalId: string): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/externalId=${encodeURIComponent(externalId)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsUpdateById = async (id: string, dto: BrandDraftDTO): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsDeleteById = async (id: string): Promise<BrandDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as BrandDTO;
}

export const BrandsSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/brands/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

