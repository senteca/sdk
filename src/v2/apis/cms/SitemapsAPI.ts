/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import {  } from '../../../models';

export const SitemapsGetSitemapFiles = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<string[]> => {
    const response = await HttpClient.request({
        path: `/cms/sitemaps`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as string[];
}

