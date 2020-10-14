import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async fulfillmentReady (): Promise<object> {
       const response = await this.request({
           path: `/fulfillment/probes/ready`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async fulfillmentHealthy (): Promise<object> {
       const response = await this.request({
           path: `/fulfillment/probes/healthy`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
