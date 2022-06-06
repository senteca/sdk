import { BaseAPI } from '../../runtime';
import {  } from '../../models';

export class MyVouchersAPI extends BaseAPI {
   async getMy (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/my-vouchers`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       
   }

}
