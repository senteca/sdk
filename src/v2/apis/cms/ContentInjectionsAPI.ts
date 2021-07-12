/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CmsContentInjectionDraftDTO } from '../../models/CmsContentInjectionDraftDTO';
import { CmsContentInjectionDTO } from '../../models/CmsContentInjectionDTO';
import { CmsContentInjectionsFilterResultDTO } from '../../models/CmsContentInjectionsFilterResultDTO';

export const ContentInjectionsCreate = async (dto: CmsContentInjectionDraftDTO): Promise<CmsContentInjectionDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-injections`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CmsContentInjectionDTO;
}

export const ContentInjectionsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CmsContentInjectionsFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-injections`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CmsContentInjectionsFilterResultDTO;
}

export const ContentInjectionsBaseFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CmsContentInjectionsFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-injections/base-filter`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CmsContentInjectionsFilterResultDTO;
}

export const ContentInjectionsGetById = async (id: string): Promise<CmsContentInjectionDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-injections/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CmsContentInjectionDTO;
}

export const ContentInjectionsUpdateById = async (id: string, dto: CmsContentInjectionDraftDTO): Promise<CmsContentInjectionDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-injections/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CmsContentInjectionDTO;
}

export const ContentInjectionsDeleteById = async (id: string): Promise<CmsContentInjectionDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-injections/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as CmsContentInjectionDTO;
}

