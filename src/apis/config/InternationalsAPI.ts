import { BaseAPI } from '../../runtime';
import { InternationalsDTO,InternationalsDraftDTO } from '../../models';

export class InternationalsAPI extends BaseAPI {
   async get (): Promise<InternationalsDTO> {
       const response = await this._request({
           path: `/config/internationals`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as InternationalsDTO;
   }

   async set (dto: InternationalsDraftDTO): Promise<InternationalsDTO> {
       const response = await this._request({
           path: `/config/internationals`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as InternationalsDTO;
   }

}
