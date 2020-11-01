import { BaseAPI } from '../../runtime';
import { CustomerSubscriptionTypeDraftDTO } from '../../models/CustomerSubscriptionTypeDraftDTO';
import { CustomerSubscriptionTypeDTO } from '../../models/CustomerSubscriptionTypeDTO';
import { CustomerSubscriptionTypeFilterResultDTO } from '../../models/CustomerSubscriptionTypeFilterResultDTO';

export class CustomerSubscriptionTypesAPI extends BaseAPI {
   async create (dto: CustomerSubscriptionTypeDraftDTO): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CustomerSubscriptionTypeFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeFilterResultDTO;
   }

   async getById (id: string): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

   async update (id: string, dto: CustomerSubscriptionTypeDTO): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

   async delete (id: string): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerSubscriptionTypeDTO;
   }

}
