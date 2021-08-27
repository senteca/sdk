/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ScriptDraftDTO, ScriptDTO, ScriptFilterResultDTO, CookieDraftDTO, CookieDTO } from '../../../models';

export const ScriptsCreate = async (dto: ScriptDraftDTO): Promise<ScriptDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ScriptDTO;
}

export const ScriptsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ScriptFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ScriptFilterResultDTO;
}

export const ScriptsGetByKey = async (key: string): Promise<ScriptDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as ScriptDTO;
}

export const ScriptsGetById = async (id: string): Promise<ScriptDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as ScriptDTO;
}

export const ScriptsUpdate = async (id: string, dto: ScriptDraftDTO): Promise<ScriptDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ScriptDTO;
}

export const ScriptsDelete = async (id: string): Promise<ScriptDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ScriptDTO;
}

export const ScriptsCreateCookie = async (id: string, dto: CookieDraftDTO): Promise<CookieDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}/cookies`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CookieDTO;
}

export const ScriptsGetCookies = async (id: string): Promise<CookieDTO[]> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}/cookies`,
        method: 'GET',
    });
    return (response as unknown) as CookieDTO[];
}

export const ScriptsGetCookieById = async (id: string, cookieId: string): Promise<CookieDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}/cookies/${encodeURIComponent(cookieId)}`,
        method: 'GET',
    });
    return (response as unknown) as CookieDTO;
}

export const ScriptsUpdateCookie = async (id: string, cookieId: string, dto: CookieDraftDTO): Promise<CookieDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}/cookies/${encodeURIComponent(cookieId)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CookieDTO;
}

export const ScriptsDeleteCookie = async (id: string, cookieId: string): Promise<CookieDTO> => {
    const response = await HttpClient.request({
        path: `/config/scripts/${encodeURIComponent(id)}/cookies/${encodeURIComponent(cookieId)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CookieDTO;
}

