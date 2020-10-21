import { BaseAPI } from '../../runtime';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';
import { CustomFieldDTO } from '../../models/CustomFieldDTO';
import { CustomFieldFilterResultDTO } from '../../models/CustomFieldFilterResultDTO';
import { CustomFieldDraftDTO } from '../../models/CustomFieldDraftDTO';

export class CustomFieldsAPI extends BaseAPI {
   async set (): Promise<object> {
       const response = await this._request({
           path: `/config/custom-fields/set`,
           method: 'PUT',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async setMy (dto: SetCustomFieldDTO): Promise<object> {
       const response = await this._request({
           path: `/config/custom-fields/set-my`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async create (dto: CustomFieldDTO): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<CustomFieldFilterResultDTO> {
       const response = await this._request({
           path: `/config/custom-fields`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as CustomFieldFilterResultDTO;
   }

   async getById (id: string): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async update (id: string, dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async delete (id: string): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

}
