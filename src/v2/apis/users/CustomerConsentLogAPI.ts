/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerConsentTypeFilterResultDTO } from '../../models/CustomerConsentTypeFilterResultDTO';

export const CustomerConsentLogFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentTypeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-log`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CustomerConsentTypeFilterResultDTO;
}

