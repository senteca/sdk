import { BaseAPI } from '../../runtime';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';
import { CustomFieldDTO } from '../../models/CustomFieldDTO';
import { CustomFieldDraftDTO } from '../../models/CustomFieldDraftDTO';

export class CustomFieldsAPI extends BaseAPI {
   async setCustomField (): Promise<object> {
       const response = await this.request({
           path: `/config/custom-fields/set`,
           method: 'PUT',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async setMyCustomField (dto: SetCustomFieldDTO): Promise<object> {
       const response = await this.request({
           path: `/config/custom-fields/set-my`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async createCustomField (dto: CustomFieldDTO): Promise<CustomFieldDTO> {
       const response = await this.request({
           path: `/config/custom-fields`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async filterCustomFields (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/config/custom-fields`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async findCustomFieldById (id: string): Promise<CustomFieldDTO> {
       const response = await this.request({
           path: `/config/custom-fields/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async updateCustomFieldById (id: string, dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> {
       const response = await this.request({
           path: `/config/custom-fields/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async deleteCustomFieldById (id: string): Promise<CustomFieldDTO> {
       const response = await this.request({
           path: `/config/custom-fields/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

}
