import { BaseAPI } from '../../runtime';
import { PaymentMethodDraftDTO } from '../../models/PaymentMethodDraftDTO';
import { PaymentMethodDTO } from '../../models/PaymentMethodDTO';

export class PaymentMethodsAPI extends BaseAPI {
   async createPaymentMethod (dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> {
       const response = await this.request({
           path: `/config/payment-methods`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

   async filterPaymentMethods (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/config/payment-methods`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async findPaymentMethodById (id: string): Promise<PaymentMethodDTO> {
       const response = await this.request({
           path: `/config/payment-methods/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

   async updatePaymentMethodById (id: string, dto: PaymentMethodDraftDTO): Promise<PaymentMethodDTO> {
       const response = await this.request({
           path: `/config/payment-methods/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

   async deletePaymentMethodById (id: string): Promise<PaymentMethodDTO> {
       const response = await this.request({
           path: `/config/payment-methods/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as PaymentMethodDTO;
   }

}
