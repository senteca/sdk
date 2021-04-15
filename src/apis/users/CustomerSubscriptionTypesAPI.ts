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
       return (response as unknown) as CustomerSubscriptionTypeDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerSubscriptionTypeFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CustomerSubscriptionTypeFilterResultDTO;
   }

   async getByKey (key: string): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomerSubscriptionTypeDTO;
   }

   async getById (id: string): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomerSubscriptionTypeDTO;
   }

   async update (id: string, dto: CustomerSubscriptionTypeDTO): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerSubscriptionTypeDTO;
   }

   async delete (id: string): Promise<CustomerSubscriptionTypeDTO> {
       const response = await this._request({
           path: `/users/customer-subscription-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CustomerSubscriptionTypeDTO;
   }

}
