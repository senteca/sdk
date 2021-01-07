import { BaseAPI } from '../../runtime';
import { OrderFilterResultDTO } from '../../models/OrderFilterResultDTO';
import { OrderDTO } from '../../models/OrderDTO';

export class MyOrdersAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as OrderFilterResultDTO;
   }

   async create (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'POST',
           
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

}
