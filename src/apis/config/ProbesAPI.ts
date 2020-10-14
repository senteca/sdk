import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async configReady (): Promise<object> {
       const response = await this.request({
           path: `/config/probes/ready`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async configHealthy (): Promise<object> {
       const response = await this.request({
           path: `/config/probes/healthy`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
