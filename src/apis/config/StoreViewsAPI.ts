import { BaseAPI } from '../../runtime';
import { StoreViewDraftDTO } from '../../models/StoreViewDraftDTO';
import { StoreViewDTO } from '../../models/StoreViewDTO';
import { StoreViewFilterResultDTO } from '../../models/StoreViewFilterResultDTO';

export class StoreViewsAPI extends BaseAPI {
   async createStoreView (dto: StoreViewDraftDTO): Promise<StoreViewDTO> {
       const response = await this.request({
           path: `/config/store-views`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

   async filterStoreViews (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<StoreViewFilterResultDTO> {
       const response = await this.request({
           path: `/config/store-views`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as StoreViewFilterResultDTO;
   }

   async getStoreViewById (id: string): Promise<StoreViewDTO> {
       const response = await this.request({
           path: `/config/store-views/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

   async update (id: string, dto: StoreViewDraftDTO): Promise<StoreViewDTO> {
       const response = await this.request({
           path: `/config/store-views/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

   async deleteStoreViewById (id: string): Promise<StoreViewDTO> {
       const response = await this.request({
           path: `/config/store-views/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as StoreViewDTO;
   }

}
