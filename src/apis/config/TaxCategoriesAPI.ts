import { BaseAPI } from '../../runtime';
import { TaxCategoryDraftDTO } from '../../models/TaxCategoryDraftDTO';
import { TaxCategoryDTO } from '../../models/TaxCategoryDTO';

export class TaxCategoriesAPI extends BaseAPI {
   async createTaxCategory (dto: TaxCategoryDraftDTO): Promise<TaxCategoryDTO> {
       const response = await this.request({
           path: `/config/tax-categories`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

   async filterTaxCategories (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/config/tax-categories`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findTaxCategoryById (id: string): Promise<TaxCategoryDTO> {
       const response = await this.request({
           path: `/config/tax-categories/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

   async updateTaxCategoryById (id: string, dto: TaxCategoryDraftDTO): Promise<TaxCategoryDTO> {
       const response = await this.request({
           path: `/config/tax-categories/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

   async deleteTaxCategoryById (id: string): Promise<object> {
       const response = await this.request({
           path: `/config/tax-categories/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as object;
   }

   async findTaxCategoryByKey (key: string): Promise<TaxCategoryDTO> {
       const response = await this.request({
           path: `/config/tax-categories/key/${key}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as TaxCategoryDTO;
   }

}
