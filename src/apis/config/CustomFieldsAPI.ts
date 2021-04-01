import { BaseAPI } from '../../runtime';
import { CustomFieldDraftDTO } from '../../models/CustomFieldDraftDTO';
import { CustomFieldDTO } from '../../models/CustomFieldDTO';
import { CustomFieldFilterResultDTO } from '../../models/CustomFieldFilterResultDTO';

export class CustomFieldsAPI extends BaseAPI {
   async create (dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomFieldFilterResultDTO> {
       const response = await this._request({
           path: `/config/custom-fields`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomFieldFilterResultDTO;
   }

   async getById (id: string): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async update (id: string, dto: CustomFieldDraftDTO): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

   async delete (id: string): Promise<CustomFieldDTO> {
       const response = await this._request({
           path: `/config/custom-fields/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CustomFieldDTO;
   }

}
