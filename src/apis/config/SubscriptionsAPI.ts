import { BaseAPI } from '../../runtime';
import { SubscriptionDTO } from '../../models/SubscriptionDTO';

export class SubscriptionsAPI extends BaseAPI {
   async createSubscription (dto: SubscriptionDTO): Promise<object> {
       const response = await this.request({
           path: `/config/subscriptions`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async filterSubscriptions (): Promise<object[]> {
       const response = await this.request({
           path: `/config/subscriptions`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object[];
   }

   async findSubscriptionByKey (key: string): Promise<object> {
       const response = await this.request({
           path: `/config/subscriptions/key=${key}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async findSubscriptionById (id: string): Promise<object> {
       const response = await this.request({
           path: `/config/subscriptions/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async updateSubscriptionById (id: string, dto: SubscriptionDTO): Promise<object> {
       const response = await this.request({
           path: `/config/subscriptions/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async deleteSubscriptionById (id: string): Promise<object> {
       const response = await this.request({
           path: `/config/subscriptions/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
