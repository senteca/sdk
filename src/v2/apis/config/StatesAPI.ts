/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { StateDraftDTO, StateDTO, StateFilterResultDTO } from '../../../models';

export const StatesCreate = async (dto: StateDraftDTO): Promise<StateDTO> => {
    const response = await HttpClient.request({
        path: `/config/states`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as StateDTO;
}

export const StatesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StateFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/states`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as StateFilterResultDTO;
}

export const StatesGetByKey = async (key: string): Promise<StateDTO> => {
    const response = await HttpClient.request({
        path: `/config/states/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as StateDTO;
}

export const StatesGetById = async (id: string): Promise<StateDTO> => {
    const response = await HttpClient.request({
        path: `/config/states/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as StateDTO;
}

export const StatesUpdate = async (id: string, dto: StateDraftDTO): Promise<StateDTO> => {
    const response = await HttpClient.request({
        path: `/config/states/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as StateDTO;
}

export const StatesDelete = async (id: string): Promise<StateDTO> => {
    const response = await HttpClient.request({
        path: `/config/states/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as StateDTO;
}

