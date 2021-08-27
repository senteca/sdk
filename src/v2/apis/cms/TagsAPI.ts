/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { TagDraftDTO } from '@models';
import { TagDTO } from '@models';
import { TagFilterResultDTO } from '@models';

export const TagsCreate = async (dto: TagDraftDTO): Promise<TagDTO> => {
    const response = await HttpClient.request({
        path: `/cms/tags`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TagDTO;
}

export const TagsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<TagFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/tags`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as TagFilterResultDTO;
}

export const TagsUpdate = async (id: string, dto: TagDraftDTO): Promise<TagDTO> => {
    const response = await HttpClient.request({
        path: `/cms/tags/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TagDTO;
}

export const TagsDelete = async (id: string): Promise<TagDTO> => {
    const response = await HttpClient.request({
        path: `/cms/tags/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as TagDTO;
}

