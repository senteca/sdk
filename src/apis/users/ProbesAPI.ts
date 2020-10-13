import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async usersReady (): Promise<void> {
       const response = await this.request({
           path: `/users/probes/ready`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async usersHealthy (): Promise<void> {
       const response = await this.request({
           path: `/users/probes/healthy`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

}
