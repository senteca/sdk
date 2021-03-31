import { BaseAPI } from '../../runtime';
import { ScriptCategoryDraftDTO } from '../../models/ScriptCategoryDraftDTO';
import { ScriptCategoryDTO } from '../../models/ScriptCategoryDTO';

export class ScriptCategoriesAPI extends BaseAPI {
   async create (dto: ScriptCategoryDraftDTO): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ScriptCategoryDTO;
   }

   async filter (): Promise<ScriptCategoryDTO[]> {
       const response = await this._request({
           path: `/config/script-categories`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptCategoryDTO[];
   }

   async getByKey (key: string): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptCategoryDTO;
   }

   async getById (id: string): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptCategoryDTO;
   }

   async update (id: string, dto: ScriptCategoryDraftDTO): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ScriptCategoryDTO;
   }

   async delete (id: string): Promise<ScriptCategoryDTO> {
       const response = await this._request({
           path: `/config/script-categories/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptCategoryDTO;
   }

}
