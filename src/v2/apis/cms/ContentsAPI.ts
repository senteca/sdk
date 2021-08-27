/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CmsContentDraftDTO } from '@models';
import { CmsContentDTO } from '@models';
import { CmsContentFilterResultDTO } from '@models';

export const ContentsCreate = async (dto: CmsContentDraftDTO): Promise<CmsContentDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CmsContentDTO;
}

export const ContentsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CmsContentFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CmsContentFilterResultDTO;
}

export const ContentsGetByKey = async (key: string): Promise<CmsContentDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CmsContentDTO;
}

export const ContentsGetById = async (id: string): Promise<CmsContentDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CmsContentDTO;
}

export const ContentsUpdate = async (id: string, dto: CmsContentDraftDTO): Promise<CmsContentDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CmsContentDTO;
}

export const ContentsDelete = async (id: string): Promise<CmsContentDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as CmsContentDTO;
}

