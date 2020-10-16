import { BaseAPI } from '../../runtime';

export class FulfillmentAPI extends BaseAPI {
   async getShippingsInfo (): Promise<object[]> {
       const response = await this._request({
           path: `/config/fulfillment/shipping-info`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object[];
   }

   async getPaymentsInfo (): Promise<object[]> {
       const response = await this._request({
           path: `/config/fulfillment/payment-info`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object[];
   }

}
