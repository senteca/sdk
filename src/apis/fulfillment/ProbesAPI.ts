import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async fulfillmentReady (): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/probes/ready`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async fulfillmentHealthy (): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/probes/healthy`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

}
