/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { StockLocationSearchResultDTO, StockLocationDraftDTO, StockLocationDTO, StockLocationFilterResultDTO } from '../../../models';

export const StockLocationsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<StockLocationSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as StockLocationSearchResultDTO;
}

export const StockLocationsCreate = async (dto: StockLocationDraftDTO): Promise<StockLocationDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as StockLocationDTO;
}

export const StockLocationsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StockLocationFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as StockLocationFilterResultDTO;
}

export const StockLocationsImport = async (dto: StockLocationDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const StockLocationsGetByKey = async (key: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StockLocationDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations/key=${encodeURIComponent(key)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as StockLocationDTO;
}

export const StockLocationsUpdateByKey = async (key: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations/key=${encodeURIComponent(key)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as StockLocationDTO;
}

export const StockLocationsGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StockLocationDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as StockLocationDTO;
}

export const StockLocationsUpdateById = async (id: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as StockLocationDTO;
}

export const StockLocationsDeleteById = async (id: string): Promise<StockLocationDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as StockLocationDTO;
}

