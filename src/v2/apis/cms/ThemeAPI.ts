/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { StoreDTO, ThemeDTO, ThemeDraftDTO, ThemeFilterResultDTO } from '../../../models';

export const ThemeInstall = async (themeId: string, storeKey: string, interfaceKey: string): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/install/themeId=${encodeURIComponent(themeId)}/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
        method: 'POST',
    });
    return (response as unknown) as StoreDTO;
}

export const ThemeUninstall = async (storeKey: string, interfaceKey: string): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/uninstall/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
        method: 'POST',
    });
    return (response as unknown) as StoreDTO;
}

export const ThemeCheck = async (themeKey: string, themeVersion: string): Promise<ThemeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/check/themeKey=${encodeURIComponent(themeKey)}/themeVersion=${encodeURIComponent(themeVersion)}`,
        method: 'GET',
    });
    return (response as unknown) as ThemeDTO;
}

export const ThemeSync = async (themeId: string, storeKey: string, interfaceKey: string): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/sync/themeId=${encodeURIComponent(themeId)}/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
        method: 'POST',
    });
    return (response as unknown) as StoreDTO;
}

export const ThemeSetConfig = async (storeKey: string, interfaceKey: string, dto: any): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/config/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as StoreDTO;
}

export const ThemeUpdateTemplate = async (storeKey: string, interfaceKey: string, componentName: string, templateName: string, dto: any): Promise<StoreDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/template/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}/componentName=${encodeURIComponent(componentName)}/templateName=${encodeURIComponent(templateName)}`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as StoreDTO;
}

export const ThemeCreate = async (dto: ThemeDraftDTO): Promise<ThemeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ThemeDTO;
}

export const ThemeFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ThemeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ThemeFilterResultDTO;
}

export const ThemeGetVersion = async (key: string, version: string): Promise<ThemeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/key=${encodeURIComponent(key)}/versions/version:=version`,
        method: 'GET',
    });
    return (response as unknown) as ThemeDTO;
}

export const ThemeGetById = async (id: string): Promise<ThemeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as ThemeDTO;
}

export const ThemeDelete = async (id: string): Promise<ThemeDTO> => {
    const response = await HttpClient.request({
        path: `/cms/theme/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ThemeDTO;
}

