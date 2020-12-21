import { BaseAPI } from '../../runtime';
import { StoreDraftDTO } from '../../models/StoreDraftDTO';
import { StoreDTO } from '../../models/StoreDTO';
import { StoreFilterResultDTO } from '../../models/StoreFilterResultDTO';

export class StoresAPI extends BaseAPI {
   async create (dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StoreFilterResultDTO> {
       const response = await this._request({
           path: `/config/stores`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as StoreFilterResultDTO;
   }

   async getByKey (key: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async getById (id: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async update (id: string, dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async delete (id: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

}
