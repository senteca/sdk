import { BaseAPI } from '../../runtime';
import { StoreDraftDTO,StoreDTO,StoreFilterResultDTO } from '../../models';

export class StoresAPI extends BaseAPI {
   async create (dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StoreDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StoreFilterResultDTO> {
       const response = await this._request({
           path: `/config/stores`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as StoreFilterResultDTO;
   }

   async getByKey (key: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as StoreDTO;
   }

   async getById (id: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as StoreDTO;
   }

   async update (id: string, dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StoreDTO;
   }

   async delete (id: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as StoreDTO;
   }

}
