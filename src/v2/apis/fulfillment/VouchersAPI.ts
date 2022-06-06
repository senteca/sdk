/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { VoucherFilterResultDTO, VoucherDraftDTO, VoucherDTO, VoucherBulkCreateDTO, SetCustomFieldDTO } from '../../../models';

export const VouchersFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<VoucherFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/vouchers`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as VoucherFilterResultDTO;
}

export const VouchersCreate = async (dto: VoucherDraftDTO): Promise<VoucherDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/vouchers`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as VoucherDTO;
}

export const VouchersGetById = async (id: string): Promise<VoucherDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/vouchers/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as VoucherDTO;
}

export const VouchersUpdateById = async (id: string, dto: VoucherDraftDTO): Promise<VoucherDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/vouchers/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as VoucherDTO;
}

export const VouchersDeleteById = async (id: string): Promise<VoucherDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/vouchers/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as VoucherDTO;
}

export const VouchersCreateBulk = async (dto: VoucherBulkCreateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/vouchers/bulk`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const VouchersSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/vouchers/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

