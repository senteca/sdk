import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async authReady (): Promise<void> {
       const response = await this.request({
           path: `/auth/probes/ready`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async authHealthy (): Promise<void> {
       const response = await this.request({
           path: `/auth/probes/healthy`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

}
