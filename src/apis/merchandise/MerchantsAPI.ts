import { BaseAPI } from '../../runtime';
import { MerchantFilterResultDTO, MerchantDraftDTO, MerchantDTO } from '../../models';

export class MerchantsAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<MerchantFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/merchants`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as MerchantFilterResultDTO;
   }

   async create (dto: MerchantDraftDTO): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as MerchantDTO;
   }

   async getByKey (key: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as MerchantDTO;
   }

   async getById (id: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as MerchantDTO;
   }

   async update (id: string, dto: MerchantDraftDTO): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as MerchantDTO;
   }

   async delete (id: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as MerchantDTO;
   }

}
