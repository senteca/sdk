/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ScriptCategoryDraftDTO, ScriptCategoryDTO, ScriptCategoryFilterResultDTO, ScriptCategoryAggregatedDTO } from '../../../models';

export const ScriptCategoriesCreate = async (dto: ScriptCategoryDraftDTO): Promise<ScriptCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/script-categories`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ScriptCategoryDTO;
}

export const ScriptCategoriesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ScriptCategoryFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/script-categories`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ScriptCategoryFilterResultDTO;
}

export const ScriptCategoriesGetAggregated = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<ScriptCategoryAggregatedDTO[]> => {
    const response = await HttpClient.request({
        path: `/config/script-categories/aggregated`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ScriptCategoryAggregatedDTO[];
}

export const ScriptCategoriesGetByKey = async (key: string): Promise<ScriptCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/script-categories/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as ScriptCategoryDTO;
}

export const ScriptCategoriesGetById = async (id: string): Promise<ScriptCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/script-categories/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as ScriptCategoryDTO;
}

export const ScriptCategoriesUpdate = async (id: string, dto: ScriptCategoryDraftDTO): Promise<ScriptCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/script-categories/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ScriptCategoryDTO;
}

export const ScriptCategoriesDelete = async (id: string): Promise<ScriptCategoryDTO> => {
    const response = await HttpClient.request({
        path: `/config/script-categories/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ScriptCategoryDTO;
}

