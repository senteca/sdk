import { BaseAPI } from '../../runtime';
import { OrderFilterResultDTO, SendOrderDTO, OrderDTO, ShippingModulesInfo, ShippingMethodsInfo, StockLocationsInfo, ReturnRequestDTO } from '../../models';

export class MyOrdersAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderFilterResultDTO;
   }

   async create (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: SendOrderDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getAvailableShippingModules (): Promise<ShippingModulesInfo> {
       const response = await this._request({
           path: `/fulfillment/my-orders/available-shipping-modules`,
           method: 'GET',
        });
       return (response as unknown) as ShippingModulesInfo;
   }

   async getAvailableShippingMethods (): Promise<ShippingMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/my-orders/available-shipping-methods`,
           method: 'GET',
        });
       return (response as unknown) as ShippingMethodsInfo;
   }

   async getAvailableStockLocations (): Promise<StockLocationsInfo> {
       const response = await this._request({
           path: `/fulfillment/my-orders/available-stock-locations`,
           method: 'GET',
        });
       return (response as unknown) as StockLocationsInfo;
   }

   async exportMyOrders (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, columnDelimiter?: string, recordDelimiter?: string, prettyKeys?: boolean, prettyValues?: boolean }): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/my-orders/export`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as any;
   }

   async getById (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as OrderDTO;
   }

   async submitReturnRequest (dto: ReturnRequestDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/my-orders/submit-return-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
