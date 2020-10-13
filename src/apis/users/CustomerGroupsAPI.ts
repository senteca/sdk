import { BaseAPI } from '../../runtime';
import { CustomerGroupDTO } from '../../models/CustomerGroupDTO';

export class CustomerGroupsAPI extends BaseAPI {
   async createCustomerGroup (dto: CustomerGroupDTO): Promise<object> {
       const response = await this.request({
           path: `/users/customer-groups`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async filterCustomerGroups (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/customer-groups`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findCustomerGroupById (id: string): Promise<CustomerGroupDTO> {
       const response = await this.request({
           path: `/users/customer-groups/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as CustomerGroupDTO;
   }

   async updateCustomerGroupById (id: string, dto: CustomerGroupDTO): Promise<object> {
       const response = await this.request({
           path: `/users/customer-groups/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async deleteCustomerGroupById (id: string): Promise<object> {
       const response = await this.request({
           path: `/users/customer-groups/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as object;
   }

}
