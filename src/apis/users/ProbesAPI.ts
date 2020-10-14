import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async usersReady (): Promise<object> {
       const response = await this.request({
           path: `/users/probes/ready`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async usersHealthy (): Promise<object> {
       const response = await this.request({
           path: `/users/probes/healthy`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
