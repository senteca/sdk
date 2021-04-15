import { BaseAPI } from '../../runtime';
import { StockLocationSearchResultDTO } from '../../models/StockLocationSearchResultDTO';
import { StockLocationDraftDTO } from '../../models/StockLocationDraftDTO';
import { StockLocationDTO } from '../../models/StockLocationDTO';
import { StockLocationFilterResultDTO } from '../../models/StockLocationFilterResultDTO';

export class StockLocationsAPI extends BaseAPI {
   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<StockLocationSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as StockLocationSearchResultDTO;
   }

   async create (dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StockLocationDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<StockLocationFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as StockLocationFilterResultDTO;
   }

   async import (dto: StockLocationDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/stock-locations/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async getByKey (key: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/key=${encodeURIComponent(key)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as StockLocationDTO;
   }

   async updateByKey (key: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/key=${encodeURIComponent(key)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StockLocationDTO;
   }

   async getById (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as StockLocationDTO;
   }

   async updateById (id: string, dto: StockLocationDraftDTO): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as StockLocationDTO;
   }

   async deleteById (id: string): Promise<StockLocationDTO> {
       const response = await this._request({
           path: `/merchandise/stock-locations/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as StockLocationDTO;
   }

}
