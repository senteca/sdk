import { BaseAPI } from '../../runtime';
import { StockLocationDraftDTO } from '../../models/StockLocationDraftDTO';
import { StockLocationDTO } from '../../models/StockLocationDTO';

export class StockLocationsAPI extends BaseAPI {
   async create (dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this.request({
           path: `/merchandise/stock-locations`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/stock-locations`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async getById (id: string): Promise<StockLocationDTO> {
       const response = await this.request({
           path: `/merchandise/stock-locations/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async update (id: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this.request({
           path: `/merchandise/stock-locations/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async delete (id: string): Promise<StockLocationDTO> {
       const response = await this.request({
           path: `/merchandise/stock-locations/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

}
