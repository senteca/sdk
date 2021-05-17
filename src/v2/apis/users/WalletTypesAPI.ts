/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { WalletTypeFilterResultDTO } from '../../models/WalletTypeFilterResultDTO';
import { WalletTypeDraftDTO } from '../../models/WalletTypeDraftDTO';
import { WalletTypeDTO } from '../../models/WalletTypeDTO';
import { WalletTypeSearchResultDTO } from '../../models/WalletTypeSearchResultDTO';

export const WalletTypesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletTypeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallet-types`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as WalletTypeFilterResultDTO;
}

export const WalletTypesCreate = async (dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallet-types`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as WalletTypeDTO;
}

export const WalletTypesSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletTypeSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallet-types/search`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as WalletTypeSearchResultDTO;
}

export const WalletTypesGetByKey = async (key: string): Promise<WalletTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallet-types/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as WalletTypeDTO;
}

export const WalletTypesGetById = async (id: string): Promise<WalletTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallet-types/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as WalletTypeDTO;
}

export const WalletTypesUpdate = async (id: string, dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallet-types/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as WalletTypeDTO;
}

export const WalletTypesDelete = async (id: string): Promise<WalletTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallet-types/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as WalletTypeDTO;
}

