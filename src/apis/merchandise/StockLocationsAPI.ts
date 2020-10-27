import { BaseAPI } from '../../runtime';
import { StockLocationDraftDTO } from '../../models/StockLocationDraftDTO';
import { StockLocationDTO } from '../../models/StockLocationDTO';
import { StockLocationFilterResultDTO } from '../../models/StockLocationFilterResultDTO';

export class StockLocationsAPI extends BaseAPI {
   async create (dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<StockLocationFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as StockLocationFilterResultDTO;
   }

   async getById (id: string): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async update (id: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async delete (id: string): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

}
