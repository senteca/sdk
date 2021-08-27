/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { LabelDraftDTO,LabelDTO,LabelFilterResultDTO } from '../../../models';

export const LabelsCreate = async (dto: LabelDraftDTO): Promise<LabelDTO> => {
    const response = await HttpClient.request({
        path: `/config/labels`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as LabelDTO;
}

export const LabelsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<LabelFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/labels`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as LabelFilterResultDTO;
}

export const LabelsGetById = async (id: string): Promise<LabelDTO> => {
    const response = await HttpClient.request({
        path: `/config/labels/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as LabelDTO;
}

export const LabelsDeleteById = async (id: string): Promise<LabelDTO> => {
    const response = await HttpClient.request({
        path: `/config/labels/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as LabelDTO;
}

