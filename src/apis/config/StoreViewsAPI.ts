import { BaseAPI } from '../../runtime';
import { StoreViewDraftDTO } from '../../models/StoreViewDraftDTO';
import { StoreViewDTO } from '../../models/StoreViewDTO';
import { StoreViewFilterResultDTO } from '../../models/StoreViewFilterResultDTO';

export class StoreViewsAPI extends BaseAPI {
   async create (dto: StoreViewDraftDTO): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<StoreViewFilterResultDTO> {
       const response = await this._request({
           path: `/config/store-views`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as StoreViewFilterResultDTO;
   }

   async getById (id: string): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

   async update (id: string, dto: StoreViewDraftDTO): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

   async delete (id: string): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

}
