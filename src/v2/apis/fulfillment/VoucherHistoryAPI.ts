/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { VoucherHistoryFilterResultDTO, VoucherHistoryDTO, MoneyDTO, TotalUsesDTO } from '../../../models';

export const VoucherHistoryFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<VoucherHistoryFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-history`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as VoucherHistoryFilterResultDTO;
}

export const VoucherHistoryGetById = async (id: string): Promise<VoucherHistoryDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-history/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as VoucherHistoryDTO;
}

export const VoucherHistoryGetAmountUsed = async (id: string): Promise<MoneyDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-history/${encodeURIComponent(id)}/amount-used`,
        method: 'GET',
    });
    return (response as unknown) as MoneyDTO;
}

export const VoucherHistoryGetTotalUses = async (id: string): Promise<TotalUsesDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-history/${encodeURIComponent(id)}/times-used`,
        method: 'GET',
    });
    return (response as unknown) as TotalUsesDTO;
}

