/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerConsentLogFilterResultDTO } from '../../../models';

export const MyConsentLogGetMyConsentLog = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentLogFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-consent-log`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomerConsentLogFilterResultDTO;
}

