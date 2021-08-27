import { BaseAPI } from '../../runtime';
import { CustomerGroupDraftDTO,CustomerGroupDTO,CustomerGroupFilterResultDTO } from '../../models';

export class CustomerGroupsAPI extends BaseAPI {
   async create (dto: CustomerGroupDraftDTO): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerGroupDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerGroupFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-groups`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CustomerGroupFilterResultDTO;
   }

   async getByKey (key: string): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomerGroupDTO;
   }

   async getById (id: string): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomerGroupDTO;
   }

   async update (id: string, dto: CustomerGroupDTO): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerGroupDTO;
   }

   async delete (id: string): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CustomerGroupDTO;
   }

}
