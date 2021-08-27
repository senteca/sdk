/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerConsentDTO } from '../../../models';

export const ConsentsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/consents`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomerConsentDTO[];
}

