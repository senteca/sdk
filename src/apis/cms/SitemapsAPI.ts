import { BaseAPI } from '../../runtime';

export class SitemapsAPI extends BaseAPI {
   async getSitemapFiles (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<string[]> {
       const response = await this._request({
           path: `/cms/sitemaps`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

}
