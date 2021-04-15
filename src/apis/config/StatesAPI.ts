import { BaseAPI } from '../../runtime';
import { StateDraftDTO } from '../../models/StateDraftDTO';
import { StateDTO } from '../../models/StateDTO';
import { StateFilterResultDTO } from '../../models/StateFilterResultDTO';

export class StatesAPI extends BaseAPI {
   async create (dto: StateDraftDTO): Promise<StateDTO> {
       const response = await this._request({
           path: `/config/states`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StateDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StateFilterResultDTO> {
       const response = await this._request({
           path: `/config/states`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as StateFilterResultDTO;
   }

   async getById (id: string): Promise<StateDTO> {
       const response = await this._request({
           path: `/config/states/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as StateDTO;
   }

   async update (id: string, dto: StateDraftDTO): Promise<StateDTO> {
       const response = await this._request({
           path: `/config/states/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StateDTO;
   }

   async delete (id: string): Promise<StateDTO> {
       const response = await this._request({
           path: `/config/states/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as StateDTO;
   }

   async getByKey (key: string): Promise<StateDTO> {
       const response = await this._request({
           path: `/config/states/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as StateDTO;
   }

}
