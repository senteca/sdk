import { BaseAPI } from '../../runtime';
import { ZoneDraftDTO } from '../../models/ZoneDraftDTO';
import { ZoneDTO } from '../../models/ZoneDTO';
import { ZoneFilterResultDTO } from '../../models/ZoneFilterResultDTO';

export class ZonesAPI extends BaseAPI {
   async create (dto: ZoneDraftDTO): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ZoneDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<ZoneFilterResultDTO> {
       const response = await this._request({
           path: `/config/zones`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ZoneFilterResultDTO;
   }

   async getById (id: string): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ZoneDTO;
   }

   async update (id: string, dto: ZoneDraftDTO): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ZoneDTO;
   }

   async delete (id: string): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ZoneDTO;
   }

}
