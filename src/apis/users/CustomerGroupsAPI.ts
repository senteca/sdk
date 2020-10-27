import { BaseAPI } from '../../runtime';
import { CustomerGroupDTO } from '../../models/CustomerGroupDTO';
import { CustomerGroupFilterResultDTO } from '../../models/CustomerGroupFilterResultDTO';

export class CustomerGroupsAPI extends BaseAPI {
   async create (dto: CustomerGroupDTO): Promise<CustomerGroupDTO> {
       const response = await this._request({
           path: `/users/customer-groups`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CustomerGroupDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CustomerGroupFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-groups`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as CustomerGroupFilterResultDTO;
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
