import { BaseAPI } from '../../runtime';

export class FulfillmentAPI extends BaseAPI {
   async getShippingsInfo (): Promise<object[]> {
       const response = await this.request({
           path: `/config/fulfillment/shipping-types`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as object[];
   }

   async getPaymentsInfo (): Promise<object[]> {
       const response = await this.request({
           path: `/config/fulfillment/payment-types`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as object[];
   }

}
