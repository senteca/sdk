import { BaseAPI } from '../../runtime';

export class FulfillmentAPI extends BaseAPI {
   async getShippingsInfo (): Promise<void> {
       const response = await this.request({
           path: `/config/fulfillment/shipping-types`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async getPaymentsInfo (): Promise<void> {
       const response = await this.request({
           path: `/config/fulfillment/payment-types`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

}
