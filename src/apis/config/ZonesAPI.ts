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
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ZoneDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ZoneFilterResultDTO> {
       const response = await this._request({
           path: `/config/zones`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ZoneFilterResultDTO;
   }

   async getByKey (key: string): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ZoneDTO;
   }

   async getById (id: string): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ZoneDTO;
   }

   async update (id: string, dto: ZoneDraftDTO): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ZoneDTO;
   }

   async delete (id: string): Promise<ZoneDTO> {
       const response = await this._request({
           path: `/config/zones/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ZoneDTO;
   }

}
