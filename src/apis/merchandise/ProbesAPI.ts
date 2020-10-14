import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async merchandiseReady (): Promise<object> {
       const response = await this.request({
           path: `/merchandise/probes/ready`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async merchandiseHealthy (): Promise<object> {
       const response = await this.request({
           path: `/merchandise/probes/healthy`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
