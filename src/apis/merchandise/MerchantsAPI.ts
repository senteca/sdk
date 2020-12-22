import { BaseAPI } from '../../runtime';
import { MerchantFilterResultDTO } from '../../models/MerchantFilterResultDTO';
import { MerchantDraftDTO } from '../../models/MerchantDraftDTO';
import { MerchantDTO } from '../../models/MerchantDTO';

export class MerchantsAPI extends BaseAPI {
   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<MerchantFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/merchants`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as MerchantFilterResultDTO;
   }

   async create (dto: MerchantDraftDTO): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as MerchantDTO;
   }

   async getById (id: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as MerchantDTO;
   }

   async update (id: string, dto: MerchantDraftDTO): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as MerchantDTO;
   }

   async delete (id: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as MerchantDTO;
   }

   async getByKey (key: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as MerchantDTO;
   }

}
