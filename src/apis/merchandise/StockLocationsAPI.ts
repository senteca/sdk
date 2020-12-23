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
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StockLocationFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as StockLocationFilterResultDTO;
   }

   async import (dto: StockLocationDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/stock-locations/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as void;
   }

   async getByKey (key: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/key=${encodeURIComponent(key)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async updateByKey (key: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/key=${encodeURIComponent(key)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async getById (id: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async updateById (id: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

   async deleteById (id: string): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO;
   }

}
