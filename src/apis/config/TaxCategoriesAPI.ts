import { BaseAPI } from '../../runtime';
import { TaxCategoryDraftDTO, TaxCategoryDTO, TaxCategoryFilterResultDTO } from '../../models';

export class TaxCategoriesAPI extends BaseAPI {
   async create (dto: TaxCategoryDraftDTO): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as TaxCategoryDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<TaxCategoryFilterResultDTO> {
       const response = await this._request({
           path: `/config/tax-categories`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as TaxCategoryFilterResultDTO;
   }

   async getByKey (key: string): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as TaxCategoryDTO;
   }

   async getById (id: string): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as TaxCategoryDTO;
   }

   async update (id: string, dto: TaxCategoryDTO): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as TaxCategoryDTO;
   }

   async delete (id: string): Promise<TaxCategoryDTO> {
       const response = await this._request({
           path: `/config/tax-categories/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as TaxCategoryDTO;
   }

}
