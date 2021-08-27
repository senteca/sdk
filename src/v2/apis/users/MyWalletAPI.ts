/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { WalletDTO, WalletDraftDTO } from '../../../models';

export const MyWalletGetByType = async (type: string): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-wallet/type=${encodeURIComponent(type)}`,
        method: 'GET',
    });
    return (response as unknown) as WalletDTO;
}

export const MyWalletRequest = async (dto: WalletDraftDTO): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-wallet/request`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WalletDTO;
}

export const MyWalletAdd = async (dto: WalletDraftDTO): Promise<WalletDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-wallet/add`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WalletDTO;
}

