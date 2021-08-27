import { BaseAPI } from '../../runtime';
import { DiscountCodeFilterResultDTO } from '@models';

export class MyDiscountCodesAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountCodeFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/my-discount-codes`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as DiscountCodeFilterResultDTO;
   }

}
