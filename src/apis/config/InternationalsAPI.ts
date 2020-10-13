import { BaseAPI } from '../../runtime';
import { InternationalsDraftDTO } from '../../models/InternationalsDraftDTO';
import { InternationalsDTO } from '../../models/InternationalsDTO';

export class InternationalsAPI extends BaseAPI {
   async filterInternationals (dto: InternationalsDraftDTO): Promise<void> {
       const response = await this.request({
           path: `/config/internationals`,
           method: 'GET',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async createInternationals (dto: InternationalsDTO): Promise<void> {
       const response = await this.request({
           path: `/config/internationals`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

}