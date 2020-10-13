import { BaseAPI } from '../../runtime';
import { SubscriptionDTO } from '../../models/SubscriptionDTO';

export class SubscriptionsAPI extends BaseAPI {
   async createSubscription (dto: SubscriptionDTO): Promise<void> {
       const response = await this.request({
           path: `/config/subscriptions`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async filterSubscriptions (): Promise<void> {
       const response = await this.request({
           path: `/config/subscriptions`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async findSubscriptionByKey (key: string): Promise<void> {
       const response = await this.request({
           path: `/config/subscriptions/key=${key}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async findSubscriptionById (id: string): Promise<void> {
       const response = await this.request({
           path: `/config/subscriptions/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async updateSubscriptionById (id: string, dto: SubscriptionDTO): Promise<void> {
       const response = await this.request({
           path: `/config/subscriptions/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async deleteSubscriptionById (id: string): Promise<void> {
       const response = await this.request({
           path: `/config/subscriptions/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as void;
   }

}