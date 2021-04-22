import { BaseAPI } from '../../runtime';
import { ScriptCategoryDraftDTO } from '../../models/ScriptCategoryDraftDTO';
import { ScriptCategoryDTO } from '../../models/ScriptCategoryDTO';
import { ScriptCategoryFilterResultDTO } from '../../models/ScriptCategoryFilterResultDTO';
import { ScriptCategoryAggregatedDTO } from '../../models/ScriptCategoryAggregatedDTO';

export class ScriptCategoriesAPI extends BaseAPI {
   async create (dto: ScriptCategoryDraftDTO): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ScriptCategoryDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ScriptCategoryFilterResultDTO> {
       const response = await this._request({
           path: `/config/script-categories`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as ScriptCategoryFilterResultDTO;
   }

   async getAggregated (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<ScriptCategoryAggregatedDTO[]> {
       const response = await this._request({
           path: `/config/script-categories/aggregated`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as ScriptCategoryAggregatedDTO[];
   }

   async getByKey (key: string): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as ScriptCategoryDTO;
   }

   async getById (id: string): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as ScriptCategoryDTO;
   }

   async update (id: string, dto: ScriptCategoryDraftDTO): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ScriptCategoryDTO;
   }

   async delete (id: string): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as ScriptCategoryDTO;
   }

}
