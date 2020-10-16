import { BaseAPI } from '../../runtime';
import { StoreDraftDTO } from '../../models/StoreDraftDTO';
import { StoreDTO } from '../../models/StoreDTO';

export class StoresAPI extends BaseAPI {
   async create (dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/config/stores`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async getById (id: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async update (id: string, dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async delete (id: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async getByKey (key: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/config/stores/key=${key}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

}
