import { BaseAPI } from '../../runtime';
import { CustomerMessageDraftDTO, CustomerMessageDTO, CustomerMessageFilterResultDTO } from '../../models';

export class CustomerMessagesAPI extends BaseAPI {
   async create (dto: CustomerMessageDraftDTO): Promise<CustomerMessageDTO> {
       const response = await this._request({
           path: `/users/customer-messages`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerMessageDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerMessageFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-messages`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CustomerMessageFilterResultDTO;
   }

   async getById (id: string): Promise<CustomerMessageDTO> {
       const response = await this._request({
           path: `/users/customer-messages/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as CustomerMessageDTO;
   }

   async update (id: string, dto: CustomerMessageDTO): Promise<CustomerMessageDTO> {
       const response = await this._request({
           path: `/users/customer-messages/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerMessageDTO;
   }

   async delete (id: string): Promise<CustomerMessageDTO> {
       const response = await this._request({
           path: `/users/customer-messages/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CustomerMessageDTO;
   }

}
