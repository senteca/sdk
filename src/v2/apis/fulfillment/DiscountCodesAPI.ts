/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { DiscountCodeDTO, DiscountCodeSearchResultDTO, DiscountCodeFilterResultDTO, DiscountCodeDraftDTO, DiscountCodeBulkCreateDTO, SetCustomFieldDTO, DiscountCodeBulkDeleteDTO, FilterQueryDTO, DiscountCodeBulkSetIsActiveDTO, DiscountCodeBulkSetValidRangeDTO } from '../../../models';

export const DiscountCodesImport = async (dto: string[]): Promise<DiscountCodeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as DiscountCodeDTO[];
}

export const DiscountCodesGetPublic = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<DiscountCodeSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/public`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as DiscountCodeSearchResultDTO;
}

export const DiscountCodesSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountCodeSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as DiscountCodeSearchResultDTO;
}

export const DiscountCodesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountCodeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as DiscountCodeFilterResultDTO;
}

export const DiscountCodesCreate = async (dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as DiscountCodeDTO;
}

export const DiscountCodesGetById = async (id: string): Promise<DiscountCodeDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as DiscountCodeDTO;
}

export const DiscountCodesUpdate = async (id: string, dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as DiscountCodeDTO;
}

export const DiscountCodesDelete = async (id: string): Promise<DiscountCodeDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as DiscountCodeDTO;
}

export const DiscountCodesCreateBulk = async (dto: DiscountCodeBulkCreateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/bulk`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const DiscountCodesSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const DiscountCodesBulkDelete = async (dto: DiscountCodeBulkDeleteDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/bulk/delete`,
        method: 'DELETE',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const DiscountCodesExportToCSV = async (dto: FilterQueryDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/export/csv`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

export const DiscountCodesBulkSetIsActive = async (dto: DiscountCodeBulkSetIsActiveDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/bulk/active`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const DiscountCodesBulkSetValidRange = async (dto: DiscountCodeBulkSetValidRangeDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-codes/bulk/valid`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

