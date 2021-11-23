/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CmsRedirectDraftDTO, CmsRedirectDTO, CmsRedirectFilterResultDTO } from '../../../models';

export const RedirectsCreate = async (dto: CmsRedirectDraftDTO): Promise<CmsRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/redirects`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CmsRedirectDTO;
}

export const RedirectsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CmsRedirectFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/redirects`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CmsRedirectFilterResultDTO;
}

export const RedirectsImport = async (dto: CmsRedirectDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/cms/redirects/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const RedirectsGetByFrom = async (from: string): Promise<CmsRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/redirects/from=${encodeURIComponent(from)}`,
        method: 'GET',
    });
    return (response as unknown) as CmsRedirectDTO;
}

export const RedirectsGetById = async (id: string): Promise<CmsRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/redirects/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as CmsRedirectDTO;
}

export const RedirectsUpdate = async (id: string, dto: CmsRedirectDraftDTO): Promise<CmsRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/redirects/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CmsRedirectDTO;
}

export const RedirectsDelete = async (id: string): Promise<CmsRedirectDTO> => {
    const response = await HttpClient.request({
        path: `/cms/redirects/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CmsRedirectDTO;
}

