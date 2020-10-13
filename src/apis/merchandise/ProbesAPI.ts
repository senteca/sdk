import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async merchandiseReady (): Promise<void> {
       const response = await this.request({
           path: `/merchandise/probes/ready`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async merchandiseHealthy (): Promise<void> {
       const response = await this.request({
           path: `/merchandise/probes/healthy`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

}
