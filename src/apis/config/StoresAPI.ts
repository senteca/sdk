import { BaseAPI } from '../../runtime';
import { StoreDraftDTO } from '../../models/StoreDraftDTO';
import { StoreDTO } from '../../models/StoreDTO';

export class StoresAPI extends BaseAPI {
   async createStore (dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this.request({
           path: `/config/stores`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async filterStores (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/config/stores`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findStoreById (id: string): Promise<StoreDTO> {
       const response = await this.request({
           path: `/config/stores/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async updateStoreById (id: string, dto: StoreDraftDTO): Promise<StoreDTO> {
       const response = await this.request({
           path: `/config/stores/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async deleteStoreById (id: string): Promise<StoreDTO> {
       const response = await this.request({
           path: `/config/stores/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async findStoreByKey (key: string): Promise<StoreDTO> {
       const response = await this.request({
           path: `/config/stores/key/${key}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

}
