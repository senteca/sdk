import { BaseAPI } from '../../runtime';
import { CustomerSubscriptionDTO } from '../../models/CustomerSubscriptionDTO';
import { CustomerSubscribeDTO } from '../../models/CustomerSubscribeDTO';

export class MySubscriptionsAPI extends BaseAPI {
   async getMySubscriptions (): Promise<CustomerSubscriptionDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerSubscriptionDTO;
   }

   async subscribe (dto: CustomerSubscribeDTO): Promise<CustomerSubscriptionDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions/subscribe`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerSubscriptionDTO;
   }

   async unsubscribe (dto: CustomerSubscribeDTO): Promise<CustomerSubscriptionDTO> {
       const response = await this._request({
           path: `/users/my-subscriptions/unsubscribe`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerSubscriptionDTO;
   }

}
