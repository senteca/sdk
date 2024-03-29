import { BaseAPI } from '../../runtime';
import { OrderFilterResultDTO, SendOrderDTO, OrderDTO, OrderGrandTotalPrice, ShippingModulesInfo, ShippingMethodsInfo, StockLocationsInfo, PaymentMethodsInfo, PlatformMethodUpdateDTO, CustomLineItemDraftDTO, ReturnRequestDTO } from '../../models';

export class MyOrdersAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderFilterResultDTO;
   }

   async create (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: SendOrderDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getMyReferralOrders (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders/referrals`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderFilterResultDTO;
   }

   async getMyReferralOrdersGrandTotalPrice (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderGrandTotalPrice> {
       const response = await this._request({
           path: `/fulfillment/my-orders/referrals/grand-total-price`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderGrandTotalPrice;
   }

   async searchMyReferralOrdersPhones (query?: { limit?: number, offset?: number, phone?: number }): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/my-orders/referrals/search-phones`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       
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

   async exportMyOrders (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, columnDelimiter?: string, recordDelimiter?: string, prettyKeys?: boolean, prettyValues?: boolean }): Promise<any> {
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

   async getPaymentMethods (id: string): Promise<PaymentMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/my-orders/${encodeURIComponent(id)}/payment-methods`,
           method: 'GET',
        });
       return (response as unknown) as PaymentMethodsInfo;
   }

   async setPlatformPaymentMethod (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders/${encodeURIComponent(id)}/platform-payment-method`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getPlatformPaymentMethod (id: string): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/my-orders/${encodeURIComponent(id)}/platform-payment-method`,
           method: 'GET',
        });
       return (response as unknown) as any;
   }

   async updateCustomLineItem (id: string, customLineItemId: string, dto: CustomLineItemDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders/${encodeURIComponent(id)}/custom-line-items/${encodeURIComponent(customLineItemId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async reOrder (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, unscopedFields?: string[] }): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-orders/${encodeURIComponent(id)}/re-order`,
           method: 'POST',
           query: this._stringifyQuery(query),
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
