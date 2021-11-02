/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ContentTypeDraftDTO, ContentTypeDTO, ContentTypeFilterResultDTO } from '../../../models';

export const ContentTypesCreate = async (dto: ContentTypeDraftDTO): Promise<ContentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-types`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ContentTypeDTO;
}

export const ContentTypesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ContentTypeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-types`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ContentTypeFilterResultDTO;
}

export const ContentTypesUpdate = async (id: string, dto: ContentTypeDraftDTO): Promise<ContentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-types/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ContentTypeDTO;
}

export const ContentTypesDelete = async (id: string): Promise<ContentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/content-types/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ContentTypeDTO;
}

