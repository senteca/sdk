/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import {  } from '../../../models';

export const MyVouchersGetMy = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-vouchers`,
        method: 'GET',
        query: toQueryString(query),
    });
    
}

