import { BaseAPI } from '../../runtime';
import { InternationalsDTO } from '../../models/InternationalsDTO';
import { InternationalsDraftDTO } from '../../models/InternationalsDraftDTO';

export class InternationalsAPI extends BaseAPI {
   async get (): Promise<InternationalsDTO> {
       const response = await this._request({
           path: `/config/internationals`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as InternationalsDTO;
   }

   async set (dto: InternationalsDraftDTO): Promise<InternationalsDTO> {
       const response = await this._request({
           path: `/config/internationals`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InternationalsDTO;
   }

}
