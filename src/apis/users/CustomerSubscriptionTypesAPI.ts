import { BaseAPI } from '../../runtime';
import { CustomerSubscriptionTypeDTO } from '../../models/CustomerSubscriptionTypeDTO';

export class CustomerSubscriptionTypesAPI extends BaseAPI {
   async create (dto: CustomerSubscriptionTypeDTO): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/users/customer-subscription-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async getById (id: string): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

   async update (id: string, dto: CustomerSubscriptionTypeDTO): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

   async delete (id: string): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

}
