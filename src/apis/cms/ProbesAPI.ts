import { BaseAPI } from '../../runtime';

export class ProbesAPI extends BaseAPI {
   async ready (): Promise<void> {
       const response = await this.request({
           path: `/cms/probes/ready`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async healthy (): Promise<void> {
       const response = await this.request({
           path: `/cms/probes/healthy`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

}
