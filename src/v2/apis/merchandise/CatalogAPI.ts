/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CatalogFilterResultDTO, CatalogSearchResultDTO, CatalogAggregateResponseDTO, CustomSortDraftDTO, CustomSortDTO, CustomSortFilterResultDTO, SynonymDraftDTO, SynonymDTO, SynonymFilterResultDTO } from '../../../models';

export const CatalogFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, postFilter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, limit?: number, offset?: number, sort?: string, secondarySort?: string, geographicalCoordinates?: string }): Promise<CatalogFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/filter`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CatalogFilterResultDTO;
}

export const CatalogSearch = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, text: string, fuzzy?: boolean, fuzzyLevel?: string, includeProducts?: boolean, includeBrands?: boolean, includeCategories?: boolean, limit?: number }): Promise<CatalogSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CatalogSearchResultDTO;
}

export const CatalogAggregate = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, postFilter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, unfilterSelected?: boolean, terms: string, ranges: string, stats: string }): Promise<CatalogAggregateResponseDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/aggregate`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CatalogAggregateResponseDTO;
}

export const CatalogCreateCustomSort = async (dto: CustomSortDraftDTO): Promise<CustomSortDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/custom-sorts`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomSortDTO;
}

export const CatalogFilterCustomSorts = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomSortFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/custom-sorts`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomSortFilterResultDTO;
}

export const CatalogGetCustomSortById = async (id: string): Promise<CustomSortDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as CustomSortDTO;
}

export const CatalogUpdateCustomSortById = async (id: string, dto: CustomSortDraftDTO): Promise<CustomSortDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomSortDTO;
}

export const CatalogDeleteCustomSortById = async (id: string): Promise<CustomSortDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CustomSortDTO;
}

export const CatalogCreateSynonym = async (dto: SynonymDraftDTO): Promise<SynonymDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/synonyms`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as SynonymDTO;
}

export const CatalogFilterSynonyms = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<SynonymFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/synonyms`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as SynonymFilterResultDTO;
}

export const CatalogUpdateSynonym = async (synonymId: string, dto: SynonymDraftDTO): Promise<SynonymDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/synonyms/${encodeURIComponent(synonymId)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as SynonymDTO;
}

export const CatalogDeleteSynonym = async (id: string): Promise<SynonymDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/synonyms/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as SynonymDTO;
}

export const CatalogSyncSynonyms = async (): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/catalog/synonyms/sync`,
        method: 'POST',
    });
    
}

