/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { TaxCategoryDraftDTO } from '@models';
import { TaxCategoryDTO } from '@models';
import { TaxCategoryFilterResultDTO } from '@models';

export const TaxCategoriesCreate = async (dto: TaxCategoryDraftDTO): Promise<TaxCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/tax-categories`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TaxCategoryDTO;
}

export const TaxCategoriesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<TaxCategoryFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/tax-categories`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as TaxCategoryFilterResultDTO;
}

export const TaxCategoriesGetByKey = async (key: string): Promise<TaxCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/tax-categories/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as TaxCategoryDTO;
}

export const TaxCategoriesGetById = async (id: string): Promise<TaxCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/tax-categories/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as TaxCategoryDTO;
}

export const TaxCategoriesUpdate = async (id: string, dto: TaxCategoryDTO): Promise<TaxCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/tax-categories/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TaxCategoryDTO;
}

export const TaxCategoriesDelete = async (id: string): Promise<TaxCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/tax-categories/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as TaxCategoryDTO;
}

