/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { WalletSearchResultDTO, WalletFilterResultDTO, WalletDraftDTO, WalletDTO, SetCustomFieldDTO } from '../../../models';

export const WalletsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as WalletSearchResultDTO;
}

export const WalletsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as WalletFilterResultDTO;
}

export const WalletsCreate = async (dto: WalletDraftDTO): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WalletDTO;
}

export const WalletsGetByKey = async (key: string): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as WalletDTO;
}

export const WalletsDeleteByKey = async (key: string): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets/key=${encodeURIComponent(key)}`,
        method: 'DELETE',
    });
    return (response as unknown) as WalletDTO;
}

export const WalletsGetById = async (id: string): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as WalletDTO;
}

export const WalletsUpdate = async (id: string, dto: WalletDraftDTO): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WalletDTO;
}

export const WalletsDelete = async (id: string): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as WalletDTO;
}

export const WalletsSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/wallets/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WalletDTO;
}

export const WalletsImport = async (dto: WalletDraftDTO[]): Promise<WalletDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/wallets/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WalletDTO[];
}

