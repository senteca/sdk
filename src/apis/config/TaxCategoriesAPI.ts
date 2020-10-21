import { BaseAPI } from '../../runtime';
import { TaxCategoryDraftDTO } from '../../models/TaxCategoryDraftDTO';
import { TaxCategoryDTO } from '../../models/TaxCategoryDTO';
import { TaxCategoryFilterResultDTO } from '../../models/TaxCategoryFilterResultDTO';

export class TaxCategoriesAPI extends BaseAPI {
   async create (dto: TaxCategoryDraftDTO): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<TaxCategoryFilterResultDTO> {
       const response = await this._request({
           path: `/config/tax-categories`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as TaxCategoryFilterResultDTO;
   }

   async getById (id: string): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

   async update (id: string, dto: TaxCategoryDraftDTO): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

   async delete (id: string): Promise<object> {
       const response = await this._request({
           path: `/config/tax-categories/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async getByKey (key: string): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories/key=${key}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

}
