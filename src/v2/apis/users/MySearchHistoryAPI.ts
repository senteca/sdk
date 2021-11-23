/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerSearchHistoryFilterResultDTO, CustomerSearchHistoryCreateDraftDTO, CustomerSearchHistoryDTO } from '../../../models';

export const MySearchHistoryFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerSearchHistoryFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-search-history`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomerSearchHistoryFilterResultDTO;
}

export const MySearchHistoryAppendMySearchHistory = async (dto: CustomerSearchHistoryCreateDraftDTO): Promise<CustomerSearchHistoryDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-search-history`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerSearchHistoryDTO;
}

export const MySearchHistoryDeleteMySearchHistoryByIdx = async (id: string): Promise<CustomerSearchHistoryDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-search-history/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CustomerSearchHistoryDTO;
}

