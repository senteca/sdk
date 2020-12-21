import { BaseAPI } from '../../runtime';
import { ApiClientFilterResultDTO } from '../../models/ApiClientFilterResultDTO';
import { ApiClientDraftDTO } from '../../models/ApiClientDraftDTO';
import { ApiClientDTO } from '../../models/ApiClientDTO';

export class ApiClientsAPI extends BaseAPI {
   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<ApiClientFilterResultDTO> {
       const response = await this._request({
           path: `/auth/api-clients`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ApiClientFilterResultDTO;
   }

   async create (dto: ApiClientDraftDTO): Promise<ApiClientDTO> {
       const response = await this._request({
           path: `/auth/api-clients`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async getById (id: string): Promise<ApiClientDTO> {
       const response = await this._request({
           path: `/auth/api-clients/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async update (id: string, dto: ApiClientDraftDTO): Promise<ApiClientDTO> {
       const response = await this._request({
           path: `/auth/api-clients/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async delete (id: string): Promise<ApiClientDTO> {
       const response = await this._request({
           path: `/auth/api-clients/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

}
