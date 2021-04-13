import { BaseAPI } from '../../runtime';
import { CustomerConsentDTO } from '../../models/CustomerConsentDTO';
import { CustomerSubscribeDTO } from '../../models/CustomerSubscribeDTO';

export class MySubscriptionsAPI extends BaseAPI {
   async getMySubscriptions (): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerConsentDTO;
   }

   async subscribe (dto: CustomerSubscribeDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions/subscribe`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerConsentDTO;
   }

   async unsubscribe (dto: CustomerSubscribeDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions/unsubscribe`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerConsentDTO;
   }

}
