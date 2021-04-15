import { BaseAPI } from '../../runtime';
import { PriceListDraftDTO } from '../../models/PriceListDraftDTO';
import { PriceListDTO } from '../../models/PriceListDTO';
import { PriceListFilterResultDTO } from '../../models/PriceListFilterResultDTO';

export class PriceListsAPI extends BaseAPI {
   async create (dto: PriceListDraftDTO): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PriceListDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<PriceListFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as PriceListFilterResultDTO;
   }

   async getByKey (key: string): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as PriceListDTO;
   }

   async getById (id: string): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as PriceListDTO;
   }

   async update (id: string, dto: PriceListDraftDTO): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PriceListDTO;
   }

   async delete (id: string): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as PriceListDTO;
   }

}
