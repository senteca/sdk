import { BaseAPI } from '../../runtime';
import { CustomFieldDraftDTO,CustomFieldDTO,CustomFieldFilterResultDTO } from '../../models';

export class CustomFieldsAPI extends BaseAPI {
   async create (dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomFieldDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomFieldFilterResultDTO> {
       const response = await this._request({
           path: `/config/custom-fields`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CustomFieldFilterResultDTO;
   }

   async getById (id: string): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomFieldDTO;
   }

   async update (id: string, dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomFieldDTO;
   }

   async delete (id: string): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CustomFieldDTO;
   }

}
