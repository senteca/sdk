/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { RegexRedirectDraftDTO, RegexRedirectDTO, RegexRedirectFilterResultDTO } from '../../../models';

export const RegexRedirectCreate = async (dto: RegexRedirectDraftDTO): Promise<RegexRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/regex-redirect`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as RegexRedirectDTO;
}

export const RegexRedirectFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<RegexRedirectFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/regex-redirect`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as RegexRedirectFilterResultDTO;
}

export const RegexRedirectImport = async (dto: RegexRedirectDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/cms/regex-redirect/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const RegexRedirectGetByMatchingRegex = async (matchingRegex: string): Promise<RegexRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/regex-redirect/matchingRegex=${encodeURIComponent(matchingRegex)}`,
        method: 'GET',
    });
    return (response as unknown) as RegexRedirectDTO;
}

export const RegexRedirectGetById = async (id: string): Promise<RegexRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/regex-redirect/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as RegexRedirectDTO;
}

export const RegexRedirectUpdate = async (id: string, dto: RegexRedirectDraftDTO): Promise<RegexRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/regex-redirect/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as RegexRedirectDTO;
}

export const RegexRedirectDelete = async (id: string): Promise<RegexRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/regex-redirect/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as RegexRedirectDTO;
}

