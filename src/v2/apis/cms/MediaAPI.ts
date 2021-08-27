/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { MediaDTO, MediaFilterResultDTO, MediaDeleteDTO } from '../../../models';

export const MediaUploadAssets = async (folderId: string, dto: any): Promise<MediaDTO[]> => {
    const response = await HttpClient.request({
        path: `/cms/media/${encodeURIComponent(folderId)}`,
        method: 'POST',
        body: dto,
        contentType: 'multipart/form-data',
    });
    return (response as unknown) as MediaDTO[];
}

export const MediaFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<MediaFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/media`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as MediaFilterResultDTO;
}

export const MediaDelete = async (dto: MediaDeleteDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/cms/media`,
        method: 'DELETE',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

