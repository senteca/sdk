import { BaseAPI } from '../../runtime';
import { StoreViewDraftDTO } from '@models';
import { StoreViewDTO } from '@models';
import { StoreViewFilterResultDTO } from '@models';

export class StoreViewsAPI extends BaseAPI {
   async create (dto: StoreViewDraftDTO): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StoreViewDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StoreViewFilterResultDTO> {
       const response = await this._request({
           path: `/config/store-views`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as StoreViewFilterResultDTO;
   }

   async getById (id: string): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as StoreViewDTO;
   }

   async update (id: string, dto: StoreViewDraftDTO): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StoreViewDTO;
   }

   async delete (id: string): Promise<StoreViewDTO> {
       const response = await this._request({
           path: `/config/store-views/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as StoreViewDTO;
   }

}
