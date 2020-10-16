import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { CategoryDTO } from '../../models/CategoryDTO';
import { CategoryDraftDTO } from '../../models/CategoryDraftDTO';

export class CategoriesAPI extends BaseAPI {
   async addCategoryAsset (categoryId: string, dto: AssetDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${categoryId}/assets`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async updateCategoryAsset (categoryId: string, assetIndex: number, dto: AssetDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${categoryId}/assets/${assetIndex}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async removeCategoryAsset (categoryId: string, assetIndex: number): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${categoryId}/assets/${assetIndex}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async search (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/categories/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/categories`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async create (dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async getCategorySlugs (languageCode: string): Promise<string[]> {
       const response = await this._request({
           path: `/merchandise/categories/slugs/${languageCode}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

   async getById (id: string, query?: { expand?: string[], statuses?: string[] }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${id}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async update (id: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async delete (id: string): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async getByExternalId (externalId: string, query?: { expand?: string[], statuses?: string[] }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/external/${externalId}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async getBySlug (languageCode: string, slug: string, query?: { expand?: string[], statuses?: string[] }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/slug/${languageCode}/${slug}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async importCategories (dto: CategoryDraftDTO[]): Promise<CategoryDTO[]> {
       const response = await this._request({
           path: `/merchandise/categories/import`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CategoryDTO[];
   }

   async updateCategoryByExternalId (id: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/external/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async deleteCategoryByExternalId (id: string): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/external/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

}
