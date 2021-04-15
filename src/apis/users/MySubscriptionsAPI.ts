import { BaseAPI } from '../../runtime';
import { CustomerSubscriptionDTO } from '../../models/CustomerSubscriptionDTO';
import { CustomerSubscribeDTO } from '../../models/CustomerSubscribeDTO';

export class MySubscriptionsAPI extends BaseAPI {
   async getMySubscriptions (): Promise<CustomerSubscriptionDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomerSubscriptionDTO;
   }

   async subscribe (dto: CustomerSubscribeDTO): Promise<CustomerSubscriptionDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions/subscribe`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerSubscriptionDTO;
   }

   async unsubscribe (dto: CustomerSubscribeDTO): Promise<CustomerSubscriptionDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions/unsubscribe`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerSubscriptionDTO;
   }

}
