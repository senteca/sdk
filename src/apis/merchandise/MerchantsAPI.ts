import { BaseAPI } from '../../runtime';
import { MerchantDraftDTO } from '../../models/MerchantDraftDTO';
import { MerchantDTO } from '../../models/MerchantDTO';

export class MerchantsAPI extends BaseAPI {
   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/merchants`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async create (dto: MerchantDraftDTO): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as MerchantDTO;
   }

   async getById (id: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as MerchantDTO;
   }

   async update (id: string, dto: MerchantDraftDTO): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as MerchantDTO;
   }

   async delete (id: string): Promise<MerchantDTO> {
       const response = await this._request({
           path: `/merchandise/merchants/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as MerchantDTO;
   }

}
