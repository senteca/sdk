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
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<PriceListFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as PriceListFilterResultDTO;
   }

   async getById (id: string): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async update (id: string, dto: PriceListDraftDTO): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async delete (id: string): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async getByKey (key: string): Promise<PriceListDTO> {
       const response = await this._request({
           path: `/merchandise/price-lists/key=${key}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

}
