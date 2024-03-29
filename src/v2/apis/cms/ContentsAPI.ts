/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CmsContentDraftDTO, CmsContentDTO, CmsContentFilterResultDTO, CmsContentImportDTO } from '../../../models';

export const ContentsCreate = async (dto: CmsContentDraftDTO): Promise<CmsContentDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CmsContentDTO;
}

export const ContentsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CmsContentFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/contents`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CmsContentFilterResultDTO;
}

export const ContentsImport = async (dto: CmsContentImportDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/cms/contents/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
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

export const ContentsDeleteAllByTypeName = async (typeName: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/cms/contents/typeName=${encodeURIComponent(typeName)}`,
        method: 'DELETE',
    });
    
}

