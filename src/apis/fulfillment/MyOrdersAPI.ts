import { BaseAPI } from '../../runtime';
import { OrderFilterResultDTO } from '../../models/OrderFilterResultDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { ShippingModulesInfo } from '../../models/ShippingModulesInfo';

export class MyOrdersAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as OrderFilterResultDTO;
   }

   async create (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'POST',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getAvailableShippingModules (): Promise<ShippingModulesInfo> {
       const response = await this._request({
           path: `/fulfillment/my-orders/available-shipping-modules`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ShippingModulesInfo;
   }

   async getById (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

}
