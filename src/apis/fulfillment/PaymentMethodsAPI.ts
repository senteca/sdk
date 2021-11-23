import { BaseAPI } from '../../runtime';
import { PaymentMethodDraftDTO, PaymentMethodDTO, PaymentMethodFilterResultDTO } from '../../models';

export class PaymentMethodsAPI extends BaseAPI {
   async create (dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/fulfillment/payment-methods`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as PaymentMethodDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<PaymentMethodFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/payment-methods`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as PaymentMethodFilterResultDTO;
   }

   async getByKey (key: string): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/fulfillment/payment-methods/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as PaymentMethodDTO;
   }

   async getById (id: string): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/fulfillment/payment-methods/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as PaymentMethodDTO;
   }

   async update (id: string, dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/fulfillment/payment-methods/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as PaymentMethodDTO;
   }

   async delete (id: string): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/fulfillment/payment-methods/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as PaymentMethodDTO;
   }

}
