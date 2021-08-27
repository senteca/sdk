/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { DiscountCodeFilterResultDTO } from '../../../models';

export const MyDiscountCodesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountCodeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-discount-codes`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as DiscountCodeFilterResultDTO;
}

