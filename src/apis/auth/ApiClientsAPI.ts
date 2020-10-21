import { BaseAPI } from '../../runtime';
import { ApiClientFilterResultDTO } from '../../models/ApiClientFilterResultDTO';
import { ApiClientDraftDTO } from '../../models/ApiClientDraftDTO';
import { ApiClientDTO } from '../../models/ApiClientDTO';

export class ApiClientsAPI extends BaseAPI {
   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<ApiClientFilterResultDTO> {
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
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async getById (id: string): Promise<ApiClientDTO> {
       const response = await this._request({
           path: `/auth/api-clients/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async update (id: string, dto: ApiClientDraftDTO): Promise<ApiClientDTO> {
       const response = await this._request({
           path: `/auth/api-clients/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async delete (id: string): Promise<ApiClientDTO> {
       const response = await this._request({
           path: `/auth/api-clients/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

}
