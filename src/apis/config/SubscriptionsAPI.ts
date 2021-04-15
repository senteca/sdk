import { BaseAPI } from '../../runtime';
import { SubscriptionDraftDTO } from '../../models/SubscriptionDraftDTO';
import { SubscriptionDTO } from '../../models/SubscriptionDTO';

export class SubscriptionsAPI extends BaseAPI {
   async create (dto: SubscriptionDraftDTO): Promise<SubscriptionDTO> {
       const response = await this._request({
           path: `/config/subscriptions`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as SubscriptionDTO;
   }

   async filter (): Promise<SubscriptionDTO[]> {
       const response = await this._request({
           path: `/config/subscriptions`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as SubscriptionDTO[];
   }

   async getByKey (key: string): Promise<SubscriptionDTO> {
       const response = await this._request({
           path: `/config/subscriptions/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as SubscriptionDTO;
   }

   async getById (id: string): Promise<SubscriptionDTO> {
       const response = await this._request({
           path: `/config/subscriptions/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as SubscriptionDTO;
   }

   async update (id: string, dto: SubscriptionDraftDTO): Promise<SubscriptionDTO> {
       const response = await this._request({
           path: `/config/subscriptions/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as SubscriptionDTO;
   }

   async delete (id: string): Promise<SubscriptionDTO> {
       const response = await this._request({
           path: `/config/subscriptions/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as SubscriptionDTO;
   }

}
