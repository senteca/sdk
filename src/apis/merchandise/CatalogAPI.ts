import { BaseAPI } from '../../runtime';
import { CatalogSearchResultDTO } from '../../models/CatalogSearchResultDTO';

export class CatalogAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, limit?: number, offset?: number, sort?: string }): Promise<any> {
       const response = await this._request({
           path: `/merchandise/catalog/filter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as any;
   }

   async search (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, text: string, fuzzy?: boolean, fuzzyLevel?: string, includeProducts?: boolean, includeBrands?: boolean, includeCategories?: boolean, limit?: number }): Promise<CatalogSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CatalogSearchResultDTO;
   }

   async aggregate (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, postFilter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, unfilterSelected?: boolean, term: string, range: string, stats: string }): Promise<any> {
       const response = await this._request({
           path: `/merchandise/catalog/aggregate`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as any;
   }

}
