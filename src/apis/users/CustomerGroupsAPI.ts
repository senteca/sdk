import { BaseAPI } from '../../runtime';
import { CustomerGroupDraftDTO } from '../../models/CustomerGroupDraftDTO';
import { CustomerGroupDTO } from '../../models/CustomerGroupDTO';
import { CustomerGroupFilterResultDTO } from '../../models/CustomerGroupFilterResultDTO';

export class CustomerGroupsAPI extends BaseAPI {
   async create (dto: CustomerGroupDraftDTO): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerGroupDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerGroupFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-groups`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomerGroupFilterResultDTO;
   }

   async getByKey (key: string): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerGroupDTO;
   }

   async getById (id: string): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerGroupDTO;
   }

   async update (id: string, dto: CustomerGroupDTO): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerGroupDTO;
   }

   async delete (id: string): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerGroupDTO;
   }

}
