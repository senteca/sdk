import { BaseAPI } from '../../runtime';
import { PaymentInfo } from '../../models/PaymentInfo';

export class FulfillmentAPI extends BaseAPI {
   async getPaymentsInfo (): Promise<PaymentInfo[]> {
       const response = await this._request({
           path: `/config/fulfillment/payment-info`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as PaymentInfo[];
   }

}
