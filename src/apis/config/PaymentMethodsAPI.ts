import { BaseAPI } from '../../runtime';
import { PaymentMethodDraftDTO } from '../../models/PaymentMethodDraftDTO';
import { PaymentMethodDTO } from '../../models/PaymentMethodDTO';
import { PaymentMethodFilterResultDTO } from '../../models/PaymentMethodFilterResultDTO';

export class PaymentMethodsAPI extends BaseAPI {
   async create (dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/config/payment-methods`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<PaymentMethodFilterResultDTO> {
       const response = await this._request({
           path: `/config/payment-methods`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as PaymentMethodFilterResultDTO;
   }

   async getById (id: string): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/config/payment-methods/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

   async update (id: string, dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/config/payment-methods/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

   async delete (id: string): Promise<PaymentMethodDTO> {
       const response = await this._request({
           path: `/config/payment-methods/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

}
