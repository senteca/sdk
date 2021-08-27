/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomFieldDraftDTO, CustomFieldDTO, CustomFieldFilterResultDTO } from '../../../models';

export const CustomFieldsCreate = async (dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> => {
    const response = await HttpClient.request({
        path: `/config/custom-fields`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomFieldDTO;
}

export const CustomFieldsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomFieldFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/custom-fields`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomFieldFilterResultDTO;
}

export const CustomFieldsGetById = async (id: string): Promise<CustomFieldDTO> => {
    const response = await HttpClient.request({
        path: `/config/custom-fields/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as CustomFieldDTO;
}

export const CustomFieldsUpdate = async (id: string, dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> => {
    const response = await HttpClient.request({
        path: `/config/custom-fields/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomFieldDTO;
}

export const CustomFieldsDelete = async (id: string): Promise<CustomFieldDTO> => {
    const response = await HttpClient.request({
        path: `/config/custom-fields/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CustomFieldDTO;
}

