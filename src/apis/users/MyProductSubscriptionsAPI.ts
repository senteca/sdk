import { BaseAPI } from '../../runtime';
import { CustomerProductSubscriptionCreateDTO } from '../../models/CustomerProductSubscriptionCreateDTO';
import { CustomerProductSubscriptionDTO } from '../../models/CustomerProductSubscriptionDTO';

export class MyProductSubscriptionsAPI extends BaseAPI {
   async subscribe (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: CustomerProductSubscriptionCreateDTO): Promise<CustomerProductSubscriptionDTO> {
       const response = await this._request({
           path: `/users/my-product-subscriptions/subscribe`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerProductSubscriptionDTO;
   }

   async unsubscribe (): Promise<void> {
       const response = await this._request({
           path: `/users/my-product-subscriptions/unsubscribe`,
           method: 'DELETE',
           
           
           
           
        });
       
   }

}
