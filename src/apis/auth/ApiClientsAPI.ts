import { BaseAPI } from '../../runtime';
import { ApiClientDraftDTO } from '../../models/ApiClientDraftDTO';
import { ApiClientDTO } from '../../models/ApiClientDTO';

export class ApiClientsAPI extends BaseAPI {
   async filterApiClients (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/auth/api-clients`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createApiClient (dto: ApiClientDraftDTO): Promise<ApiClientDTO> {
       const response = await this.request({
           path: `/auth/api-clients`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async findApiClientById (id: string): Promise<ApiClientDTO> {
       const response = await this.request({
           path: `/auth/api-clients/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async updateApiClientById (id: string, dto: ApiClientDraftDTO): Promise<ApiClientDTO> {
       const response = await this.request({
           path: `/auth/api-clients/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

   async deleteApiClientById (id: string): Promise<ApiClientDTO> {
       const response = await this.request({
           path: `/auth/api-clients/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ApiClientDTO;
   }

}
