import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async ready (): Promise<object> {
       const response = await this.request({
           path: `/cms/probes/ready`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async healthy (): Promise<object> {
       const response = await this.request({
           path: `/cms/probes/healthy`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
